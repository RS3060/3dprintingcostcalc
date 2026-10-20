import * as fflate from 'fflate';

export interface ParsedModelResult {
  fileName: string;
  fileSizeBytes: number;
  fileType: 'gcode' | '3mf-sliced' | '3mf-mesh' | 'stl' | 'obj' | 'unknown';
  isSliced: boolean;
  filamentGrams: number;
  printTimeHours: number;
  volumeCm3?: number;
  surfaceAreaCm2?: number;
  triangleCount?: number;
  slicerName?: string;
  warning?: string;
  multiColorFilaments?: Array<{ id: string; grams: number; meters: number }>;
}

export interface MeshEstimationParams {
  wallLoops: number;
  infillRatio: number; // 0.0 to 1.0 (e.g. 0.15 for 15%)
  materialDensity: number; // g/cm³ (e.g. 1.24 for PLA)
  supportMultiplier: number; // 1.0 for none, 1.08 light, 1.18 heavy
  volumetricFlowMm3s: number; // e.g. 10.5 for Bambu P1S, 5.0 for Ender 3
}

export const DEFAULT_MESH_PARAMS: MeshEstimationParams = {
  wallLoops: 2,
  infillRatio: 0.15,
  materialDensity: 1.24,
  supportMultiplier: 1.0,
  volumetricFlowMm3s: 10.0,
};

export function estimateMeshWeightAndTime(
  volumeCm3: number,
  surfaceAreaCm2: number,
  params: MeshEstimationParams = DEFAULT_MESH_PARAMS
): { filamentGrams: number; printTimeHours: number } {
  if (volumeCm3 <= 0) {
    return { filamentGrams: 0, printTimeHours: 0 };
  }

  // Shell volume: Wall count * line width (approx 0.042 cm = 0.42mm). Capped at 85% of total volume for thin walls
  const shellVol = Math.min(volumeCm3 * 0.85, surfaceAreaCm2 * params.wallLoops * 0.042);
  const internalVol = Math.max(0, volumeCm3 - shellVol);
  const infillVol = internalVol * Math.max(0, Math.min(1, params.infillRatio));
  const effectiveVolCm3 = (shellVol + infillVol) * Math.max(1, params.supportMultiplier);

  const filamentGrams = Number((effectiveVolCm3 * params.materialDensity).toFixed(2));

  // Volumetric flow rate to hours: (effectiveVolCm3 * 1000 mm³/cm³) / (flowRate mm³/s * 3600 s/hr) + warmup overhead
  const flowRate = Math.max(1, params.volumetricFlowMm3s);
  const extrusionSeconds = (effectiveVolCm3 * 1000) / flowRate;
  const warmupHours = 0.12; // ~7 minutes bed/hotend heating, homing, and mesh bed leveling
  const printTimeHours = Number(((extrusionSeconds / 3600) + warmupHours).toFixed(2));

  return { filamentGrams, printTimeHours };
}

/**
 * Parses G-code or bgcode by reading the first 64KB and last 128KB of the file
 */
export async function parseGCodeFile(file: File, materialDensity = 1.24): Promise<ParsedModelResult> {
  const headChunkSize = 64 * 1024;
  const tailChunkSize = 128 * 1024;

  const headSlice = file.slice(0, Math.min(file.size, headChunkSize));
  const headText = await headSlice.text();

  let tailText = '';
  if (file.size > headChunkSize) {
    const tailStart = Math.max(headChunkSize, file.size - tailChunkSize);
    const tailSlice = file.slice(tailStart, file.size);
    tailText = await tailSlice.text();
  }

  const combinedText = headText + '\n' + tailText;

  let filamentGrams = 0;
  let printTimeHours = 0;
  let slicer = 'G-code Slicer';

  // Slicer identification
  if (combinedText.includes('BambuStudio') || combinedText.includes('Bambu Studio')) slicer = 'Bambu Studio';
  else if (combinedText.includes('OrcaSlicer') || combinedText.includes('Orca Slicer')) slicer = 'OrcaSlicer';
  else if (combinedText.includes('PrusaSlicer')) slicer = 'PrusaSlicer';
  else if (combinedText.includes('Cura')) slicer = 'UltiMaker Cura';
  else if (combinedText.includes('SuperSlicer')) slicer = 'SuperSlicer';

  // 1. Check weight in grams:
  // Bambu/Orca/Prusa: "; total filament used [g] = 84.3" or "; filament used [g] = 12.3, 45.6"
  const totalWeightMatch = combinedText.match(/;\s*total filament used\s*\[g\]\s*=\s*([0-9.,\s]+)/i);
  const filamentUsedWeightMatch = combinedText.match(/;\s*filament used\s*\[g\]\s*=\s*([0-9.,\s]+)/i);
  const curaWeightMatch = combinedText.match(/;Filament weight\s*=\s*([0-9.]+)/i);

  if (totalWeightMatch && totalWeightMatch[1]) {
    const parts = totalWeightMatch[1].split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
    filamentGrams = parts.reduce((a, b) => a + b, 0);
  } else if (filamentUsedWeightMatch && filamentUsedWeightMatch[1]) {
    const parts = filamentUsedWeightMatch[1].split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
    filamentGrams = parts.reduce((a, b) => a + b, 0);
  } else if (curaWeightMatch && curaWeightMatch[1]) {
    filamentGrams = parseFloat(curaWeightMatch[1]) || 0;
  }

  // 2. Fallback to filament length (mm or m) if weight tag missing
  if (filamentGrams <= 0) {
    const lengthMmMatch = combinedText.match(/;\s*filament used\s*\[mm\]\s*=\s*([0-9.,\s]+)/i);
    const curaLengthMMatch = combinedText.match(/;Filament used:\s*([0-9.]+)m/i);

    let totalLengthMm = 0;
    if (lengthMmMatch && lengthMmMatch[1]) {
      const parts = lengthMmMatch[1].split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
      totalLengthMm = parts.reduce((a, b) => a + b, 0);
    } else if (curaLengthMMatch && curaLengthMMatch[1]) {
      totalLengthMm = (parseFloat(curaLengthMMatch[1]) || 0) * 1000;
    }

    if (totalLengthMm > 0) {
      // 1.75mm diameter filament volume in cm³ = (pi * (1.75/2)^2 * lengthMm) / 1000
      const radiusMm = 1.75 / 2;
      const volMm3 = Math.PI * radiusMm * radiusMm * totalLengthMm;
      const volCm3 = volMm3 / 1000;
      filamentGrams = volCm3 * materialDensity;
    }
  }

  // 3. Print time parsing
  // Slicers format: "; estimated printing time (normal mode) = 2h 45m 12s" or "; estimated printing time = 1d 2h 30m"
  const timeRegex = /;\s*estimated printing time(?:\s*\(normal mode\))?\s*=\s*(?:(\d+)d\s*)?(?:(\d+)h\s*)?(?:(\d+)m\s*)?(?:(\d+)s)?/i;
  const timeMatch = combinedText.match(timeRegex);

  if (timeMatch) {
    const days = parseInt(timeMatch[1] || '0', 10);
    const hrs = parseInt(timeMatch[2] || '0', 10);
    const mins = parseInt(timeMatch[3] || '0', 10);
    const secs = parseInt(timeMatch[4] || '0', 10);
    printTimeHours = days * 24 + hrs + mins / 60 + secs / 3600;
  } else {
    // Cura format: ";TIME:11520" (in seconds)
    const curaTimeMatch = combinedText.match(/;TIME:(\d+)/i);
    if (curaTimeMatch && curaTimeMatch[1]) {
      const totalSecs = parseInt(curaTimeMatch[1], 10);
      printTimeHours = totalSecs / 3600;
    }
  }

  return {
    fileName: file.name,
    fileSizeBytes: file.size,
    fileType: 'gcode',
    isSliced: true,
    filamentGrams: Number(filamentGrams.toFixed(2)),
    printTimeHours: Number(printTimeHours.toFixed(2)),
    slicerName: slicer,
  };
}

/**
 * Parses 3MF files. Detects sliced Bambu/Orca projects (Metadata/slice_info.config) or raw 3D mesh (3D/3dmodel.model)
 */
export async function parse3MFFile(file: File, params: MeshEstimationParams = DEFAULT_MESH_PARAMS): Promise<ParsedModelResult> {
  const arrayBuffer = await file.arrayBuffer();
  const uint8 = new Uint8Array(arrayBuffer);

  let unzipped: Record<string, Uint8Array>;
  try {
    unzipped = fflate.unzipSync(uint8);
  } catch (err) {
    throw new Error('Failed to extract .3mf archive. File may be corrupted.');
  }

  // Case A: Sliced 3MF from Bambu Studio or OrcaSlicer
  const sliceInfoKey = Object.keys(unzipped).find(k => k.toLowerCase() === 'metadata/slice_info.config');
  if (sliceInfoKey) {
    const xmlText = new TextDecoder().decode(unzipped[sliceInfoKey]);
    return parseSliceInfoXml(file.name, file.size, xmlText);
  }

  // Case B: Raw Unsliced 3MF Mesh
  const modelKey = Object.keys(unzipped).find(k => k.toLowerCase() === '3d/3dmodel.model' || k.toLowerCase().endsWith('.model'));
  if (modelKey) {
    const xmlText = new TextDecoder().decode(unzipped[modelKey]);
    const { volumeCm3, surfaceAreaCm2, triangleCount } = parse3mfModelXml(xmlText);
    const estimated = estimateMeshWeightAndTime(volumeCm3, surfaceAreaCm2, params);

    return {
      fileName: file.name,
      fileSizeBytes: file.size,
      fileType: '3mf-mesh',
      isSliced: false,
      filamentGrams: estimated.filamentGrams,
      printTimeHours: estimated.printTimeHours,
      volumeCm3: Number(volumeCm3.toFixed(2)),
      surfaceAreaCm2: Number(surfaceAreaCm2.toFixed(2)),
      triangleCount,
    };
  }

  throw new Error('Neither sliced metadata nor 3D model geometry found inside this .3mf file.');
}

function parseSliceInfoXml(fileName: string, fileSizeBytes: number, xmlText: string): ParsedModelResult {
  let totalGrams = 0;
  let totalTimeSeconds = 0;
  const multiColor: Array<{ id: string; grams: number; meters: number }> = [];

  // Match <prediction>...</prediction>
  const predMatch = xmlText.match(/<prediction[^>]*>([^<]+)<\/prediction>/i);
  if (predMatch && predMatch[1]) {
    totalTimeSeconds = parseFloat(predMatch[1]) || 0;
  }

  // Match all <filament ... used_g="..." used_m="..." />
  const filamentRegex = /<filament\s+[^>]*id="([^"]+)"[^>]*used_g="([^"]+)"[^>]*used_m="([^"]+)"/gi;
  let fMatch: RegExpExecArray | null;
  while ((fMatch = filamentRegex.exec(xmlText)) !== null) {
    const id = fMatch[1];
    const grams = parseFloat(fMatch[2]) || 0;
    const meters = parseFloat(fMatch[3]) || 0;
    multiColor.push({ id, grams: Number(grams.toFixed(2)), meters: Number(meters.toFixed(2)) });
    totalGrams += grams;
  }

  // If used_g regex didn't catch due to attribute order, try alternate attribute order
  if (multiColor.length === 0) {
    const altRegex = /<filament\s+[^>]*used_g="([^"]+)"/gi;
    let aMatch: RegExpExecArray | null;
    let idx = 1;
    while ((aMatch = altRegex.exec(xmlText)) !== null) {
      const grams = parseFloat(aMatch[1]) || 0;
      multiColor.push({ id: `Filament ${idx++}`, grams: Number(grams.toFixed(2)), meters: 0 });
      totalGrams += grams;
    }
  }

  return {
    fileName,
    fileSizeBytes,
    fileType: '3mf-sliced',
    isSliced: true,
    filamentGrams: Number(totalGrams.toFixed(2)),
    printTimeHours: Number((totalTimeSeconds / 3600).toFixed(2)),
    slicerName: 'Bambu Studio / OrcaSlicer (Sliced Project)',
    multiColorFilaments: multiColor.length > 0 ? multiColor : undefined,
  };
}

function parse3mfModelXml(xmlText: string): { volumeCm3: number; surfaceAreaCm2: number; triangleCount: number } {
  const vertices: Array<[number, number, number]> = [];
  const vertexRegex = /<vertex\s+x="([^"]+)"\s+y="([^"]+)"\s+z="([^"]+)"/gi;
  let vMatch: RegExpExecArray | null;
  while ((vMatch = vertexRegex.exec(xmlText)) !== null) {
    vertices.push([parseFloat(vMatch[1]), parseFloat(vMatch[2]), parseFloat(vMatch[3])]);
  }

  let totalSignedTetrahedronVolume = 0;
  let totalSurfaceAreaMm2 = 0;
  let triangleCount = 0;

  const triRegex = /<triangle\s+v1="([^"]+)"\s+v2="([^"]+)"\s+v3="([^"]+)"/gi;
  let tMatch: RegExpExecArray | null;
  while ((tMatch = triRegex.exec(xmlText)) !== null) {
    const i1 = parseInt(tMatch[1], 10);
    const i2 = parseInt(tMatch[2], 10);
    const i3 = parseInt(tMatch[3], 10);

    const p1 = vertices[i1];
    const p2 = vertices[i2];
    const p3 = vertices[i3];

    if (p1 && p2 && p3) {
      triangleCount++;
      // Signed tetrahedron volume formula:
      // V = (-x3*y2*z1 + x2*y3*z1 + x3*y1*z2 - x1*y3*z2 - x2*y1*z3 + x1*y2*z3) / 6
      const signedTetra =
        -p3[0] * p2[1] * p1[2] +
        p2[0] * p3[1] * p1[2] +
        p3[0] * p1[1] * p2[2] -
        p1[0] * p3[1] * p2[2] -
        p2[0] * p1[1] * p3[2] +
        p1[0] * p2[1] * p3[2];
      totalSignedTetrahedronVolume += signedTetra / 6.0;

      // Triangle area = 0.5 * | (p2 - p1) x (p3 - p1) |
      const ax = p2[0] - p1[0];
      const ay = p2[1] - p1[1];
      const az = p2[2] - p1[2];

      const bx = p3[0] - p1[0];
      const by = p3[1] - p1[1];
      const bz = p3[2] - p1[2];

      const cx = ay * bz - az * by;
      const cy = az * bx - ax * bz;
      const cz = ax * by - ay * bx;

      const triArea = 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
      totalSurfaceAreaMm2 += triArea;
    }
  }

  const volumeCm3 = Math.abs(totalSignedTetrahedronVolume) / 1000.0;
  const surfaceAreaCm2 = totalSurfaceAreaMm2 / 100.0;

  return { volumeCm3, surfaceAreaCm2, triangleCount };
}

/**
 * Parses STL files (handles both Binary and ASCII)
 */
export async function parseSTLFile(file: File, params: MeshEstimationParams = DEFAULT_MESH_PARAMS): Promise<ParsedModelResult> {
  const buffer = await file.arrayBuffer();

  // Detection: A binary STL has an 80-byte header, followed by a 4-byte uint32 triangle count,
  // followed by triangleCount * 50 bytes.
  let isBinary = false;
  if (buffer.byteLength >= 84) {
    const dataView = new DataView(buffer);
    const expectedTriangles = dataView.getUint32(80, true);
    if (buffer.byteLength === 84 + expectedTriangles * 50) {
      isBinary = true;
    }
  }

  let volumeCm3 = 0;
  let surfaceAreaCm2 = 0;
  let triangleCount = 0;

  if (isBinary) {
    const parsed = parseBinarySTL(buffer);
    volumeCm3 = parsed.volumeCm3;
    surfaceAreaCm2 = parsed.surfaceAreaCm2;
    triangleCount = parsed.triangleCount;
  } else {
    const text = new TextDecoder().decode(buffer);
    const parsed = parseAsciiSTL(text);
    volumeCm3 = parsed.volumeCm3;
    surfaceAreaCm2 = parsed.surfaceAreaCm2;
    triangleCount = parsed.triangleCount;
  }

  const estimated = estimateMeshWeightAndTime(volumeCm3, surfaceAreaCm2, params);

  return {
    fileName: file.name,
    fileSizeBytes: file.size,
    fileType: 'stl',
    isSliced: false,
    filamentGrams: estimated.filamentGrams,
    printTimeHours: estimated.printTimeHours,
    volumeCm3: Number(volumeCm3.toFixed(2)),
    surfaceAreaCm2: Number(surfaceAreaCm2.toFixed(2)),
    triangleCount,
  };
}

function parseBinarySTL(buffer: ArrayBuffer): { volumeCm3: number; surfaceAreaCm2: number; triangleCount: number } {
  const dataView = new DataView(buffer);
  const triangleCount = dataView.getUint32(80, true);

  let totalSignedTetrahedronVolume = 0;
  let totalSurfaceAreaMm2 = 0;

  let offset = 84;
  for (let i = 0; i < triangleCount; i++) {
    // skip normal vector: 3 * 4 = 12 bytes
    offset += 12;

    const x1 = dataView.getFloat32(offset, true);
    const y1 = dataView.getFloat32(offset + 4, true);
    const z1 = dataView.getFloat32(offset + 8, true);
    offset += 12;

    const x2 = dataView.getFloat32(offset, true);
    const y2 = dataView.getFloat32(offset + 4, true);
    const z2 = dataView.getFloat32(offset + 8, true);
    offset += 12;

    const x3 = dataView.getFloat32(offset, true);
    const y3 = dataView.getFloat32(offset + 4, true);
    const z3 = dataView.getFloat32(offset + 8, true);
    offset += 12;

    // skip attribute byte count: 2 bytes
    offset += 2;

    // Signed tetrahedron formula:
    const signedTetra =
      -x3 * y2 * z1 +
      x2 * y3 * z1 +
      x3 * y1 * z2 -
      x1 * y3 * z2 -
      x2 * y1 * z3 +
      x1 * y2 * z3;
    totalSignedTetrahedronVolume += signedTetra / 6.0;

    // Surface area cross product
    const ax = x2 - x1;
    const ay = y2 - y1;
    const az = z2 - z1;

    const bx = x3 - x1;
    const by = y3 - y1;
    const bz = z3 - z1;

    const cx = ay * bz - az * by;
    const cy = az * bx - ax * bz;
    const cz = ax * by - ay * bx;

    totalSurfaceAreaMm2 += 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
  }

  const volumeCm3 = Math.abs(totalSignedTetrahedronVolume) / 1000.0;
  const surfaceAreaCm2 = totalSurfaceAreaMm2 / 100.0;

  return { volumeCm3, surfaceAreaCm2, triangleCount };
}

function parseAsciiSTL(text: string): { volumeCm3: number; surfaceAreaCm2: number; triangleCount: number } {
  let totalSignedTetrahedronVolume = 0;
  let totalSurfaceAreaMm2 = 0;
  let triangleCount = 0;

  const vertexRegex = /vertex\s+([-\d.eE+]+)\s+([-\d.eE+]+)\s+([-\d.eE+]+)/gi;
  let match: RegExpExecArray | null;
  const vertices: Array<[number, number, number]> = [];

  while ((match = vertexRegex.exec(text)) !== null) {
    vertices.push([parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])]);
    if (vertices.length === 3) {
      triangleCount++;
      const [p1, p2, p3] = vertices;

      const signedTetra =
        -p3[0] * p2[1] * p1[2] +
        p2[0] * p3[1] * p1[2] +
        p3[0] * p1[1] * p2[2] -
        p1[0] * p3[1] * p2[2] -
        p2[0] * p1[1] * p3[2] +
        p1[0] * p2[1] * p3[2];
      totalSignedTetrahedronVolume += signedTetra / 6.0;

      const ax = p2[0] - p1[0];
      const ay = p2[1] - p1[1];
      const az = p2[2] - p1[2];

      const bx = p3[0] - p1[0];
      const by = p3[1] - p1[1];
      const bz = p3[2] - p1[2];

      const cx = ay * bz - az * by;
      const cy = az * bx - ax * bz;
      const cz = ax * by - ay * bx;

      totalSurfaceAreaMm2 += 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
      vertices.length = 0;
    }
  }

  const volumeCm3 = Math.abs(totalSignedTetrahedronVolume) / 1000.0;
  const surfaceAreaCm2 = totalSurfaceAreaMm2 / 100.0;

  return { volumeCm3, surfaceAreaCm2, triangleCount };
}

/**
 * Parses Wavefront OBJ files
 */
export async function parseOBJFile(file: File, params: MeshEstimationParams = DEFAULT_MESH_PARAMS): Promise<ParsedModelResult> {
  const text = await file.text();
  const lines = text.split('\n');

  const vertices: Array<[number, number, number]> = [];
  let totalSignedTetrahedronVolume = 0;
  let totalSurfaceAreaMm2 = 0;
  let triangleCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('v ')) {
      const parts = line.split(/\s+/);
      vertices.push([parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3])]);
    } else if (line.startsWith('f ')) {
      const parts = line.split(/\s+/).slice(1);
      if (parts.length >= 3) {
        // Parse indices (1-indexed in OBJ)
        const indices = parts.map(p => {
          const idx = parseInt(p.split('/')[0], 10);
          return idx > 0 ? idx - 1 : vertices.length + idx;
        });

        // Triangulate if polygon has >3 vertices (fan triangulation)
        for (let j = 1; j < indices.length - 1; j++) {
          const p1 = vertices[indices[0]];
          const p2 = vertices[indices[j]];
          const p3 = vertices[indices[j + 1]];

          if (p1 && p2 && p3) {
            triangleCount++;
            const signedTetra =
              -p3[0] * p2[1] * p1[2] +
              p2[0] * p3[1] * p1[2] +
              p3[0] * p1[1] * p2[2] -
              p1[0] * p3[1] * p2[2] -
              p2[0] * p1[1] * p3[2] +
              p1[0] * p2[1] * p3[2];
            totalSignedTetrahedronVolume += signedTetra / 6.0;

            const ax = p2[0] - p1[0];
            const ay = p2[1] - p1[1];
            const az = p2[2] - p1[2];

            const bx = p3[0] - p1[0];
            const by = p3[1] - p1[1];
            const bz = p3[2] - p1[2];

            const cx = ay * bz - az * by;
            const cy = az * bx - ax * bz;
            const cz = ax * by - ay * bx;

            totalSurfaceAreaMm2 += 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
          }
        }
      }
    }
  }

  const volumeCm3 = Math.abs(totalSignedTetrahedronVolume) / 1000.0;
  const surfaceAreaCm2 = totalSurfaceAreaMm2 / 100.0;
  const estimated = estimateMeshWeightAndTime(volumeCm3, surfaceAreaCm2, params);

  return {
    fileName: file.name,
    fileSizeBytes: file.size,
    fileType: 'obj',
    isSliced: false,
    filamentGrams: estimated.filamentGrams,
    printTimeHours: estimated.printTimeHours,
    volumeCm3: Number(volumeCm3.toFixed(2)),
    surfaceAreaCm2: Number(surfaceAreaCm2.toFixed(2)),
    triangleCount,
  };
}

/**
 * Universal client-side file dispatcher
 */
export async function parse3DFile(file: File, params: MeshEstimationParams = DEFAULT_MESH_PARAMS): Promise<ParsedModelResult> {
  const name = file.name.toLowerCase();

  if (name.endsWith('.gcode') || name.endsWith('.bgcode') || name.endsWith('.gco')) {
    return parseGCodeFile(file, params.materialDensity);
  } else if (name.endsWith('.3mf')) {
    return parse3MFFile(file, params);
  } else if (name.endsWith('.stl')) {
    return parseSTLFile(file, params);
  } else if (name.endsWith('.obj')) {
    return parseOBJFile(file, params);
  }

  throw new Error(`Unsupported file extension: ${file.name}. Please drop an .stl, .3mf, .gcode, .bgcode, or .obj file.`);
}
