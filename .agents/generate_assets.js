import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = '/home/sonal-raj/projects/3dprintingcostcalc.com/public';

// 1. Generate OG Image (1200x630)
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080c15"/>
      <stop offset="50%" stop-color="#0c1424"/>
      <stop offset="100%" stop-color="#05080e"/>
    </linearGradient>

    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22d3ee"/>
      <stop offset="50%" stop-color="#60a5fa"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>

    <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="33%" stop-color="#3b82f6"/>
      <stop offset="66%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>

    <radialGradient id="cyanGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="rgba(6, 182, 212, 0.22)"/>
      <stop offset="100%" stop-color="rgba(6, 182, 212, 0)"/>
    </radialGradient>

    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Radial Glow Behind Center -->
  <rect width="1200" height="630" fill="url(#cyanGlow)"/>

  <!-- Top Decorative Layer Line -->
  <rect x="0" y="0" width="1200" height="6" fill="url(#accentLine)"/>

  <!-- Border Frame -->
  <rect x="24" y="24" width="1152" height="582" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

  <!-- Logo and Brand Badge Header -->
  <g transform="translate(80, 80)">
    <!-- 3D Box Icon -->
    <rect x="0" y="0" width="56" height="56" fill="#0e1628" stroke="rgba(34, 211, 238, 0.4)" stroke-width="2"/>
    <path d="M28 8 L46 18 V38 L28 48 L10 38 V18 Z" stroke="#06b6d4" stroke-width="2.5" fill="none"/>
    <path d="M28 8 V28 M46 18 L28 28 M10 18 L28 28" stroke="#3b82f6" stroke-width="2" fill="none"/>
    <path d="M28 28 V48" stroke="#06b6d4" stroke-width="2.5"/>
    <circle cx="28" cy="28" r="3" fill="#10b981"/>

    <!-- Site Title -->
    <text x="76" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" fill="#ffffff" letter-spacing="-0.5px">3DPrintingCostCalc.com</text>
    <text x="76" y="52" font-family="ui-monospace, monospace" font-size="13" font-weight="600" fill="#38bdf8" letter-spacing="2px">PRO MAKER &amp; PRINT FARM SUITE</text>

    <!-- Client-Side Badge -->
    <rect x="860" y="8" width="180" height="36" fill="rgba(6, 78, 59, 0.4)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1"/>
    <circle cx="878" cy="26" r="4" fill="#34d399"/>
    <text x="892" y="31" font-family="ui-monospace, monospace" font-size="12" font-weight="700" fill="#6ee7b7" letter-spacing="1px">100% CLIENT-SIDE</text>
  </g>

  <!-- Big Hero Title -->
  <g transform="translate(80, 230)">
    <text font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" fill="#ffffff" letter-spacing="-1.5px">
      3D Print &amp; Filament
    </text>
    <text y="68" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" fill="url(#textGrad)" letter-spacing="-1.5px">
      Cost Calculator Studio
    </text>

    <text y="125" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400" fill="#94a3b8">
      Drop .STL, .3MF &amp; .GCODE files to calculate filament grams, Bambu/Prusa wattage,
    </text>
    <text y="155" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400" fill="#94a3b8">
      machine depreciation, AMS waste, labor, and commercial Etsy seller profit margins.
    </text>
  </g>

  <!-- Feature Cards Grid (4 Badges) -->
  <g transform="translate(80, 465)">
    <!-- Card 1 -->
    <rect x="0" y="0" width="245" height="70" fill="#0e1628" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <rect x="0" y="0" width="3" height="70" fill="#06b6d4"/>
    <text x="18" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">3D File Pre-Flight</text>
    <text x="18" y="50" font-family="ui-monospace, monospace" font-size="11" fill="#22d3ee">STL · 3MF · GCODE · OBJ</text>

    <!-- Card 2 -->
    <rect x="265" y="0" width="245" height="70" fill="#0e1628" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <rect x="265" y="0" width="3" height="70" fill="#3b82f6"/>
    <text x="283" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Hardware TCO &amp; Power</text>
    <text x="283" y="50" font-family="ui-monospace, monospace" font-size="11" fill="#60a5fa">Bambu, Prusa, Creality</text>

    <!-- Card 3 -->
    <rect x="530" y="0" width="245" height="70" fill="#0e1628" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <rect x="530" y="0" width="3" height="70" fill="#10b981"/>
    <text x="548" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">AMS Waste &amp; Spool Tare</text>
    <text x="548" y="50" font-family="ui-monospace, monospace" font-size="11" fill="#34d399">Purge Poop &amp; Net Grams</text>

    <!-- Card 4 -->
    <rect x="795" y="0" width="245" height="70" fill="#0e1628" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <rect x="795" y="0" width="3" height="70" fill="#8b5cf6"/>
    <text x="813" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Commercial Pricing</text>
    <text x="813" y="50" font-family="ui-monospace, monospace" font-size="11" fill="#a78bfa">Etsy, eBay, Shopify Fees</text>
  </g>

  <!-- Bottom Accent / Watermark -->
  <text x="1100" y="580" text-anchor="end" font-family="ui-monospace, monospace" font-size="11" fill="#475569">
    https://3dprintingcostcalc.com
  </text>
</svg>
`;

// 2. Generate Apple Touch Icon (180x180)
const appleIconSvg = `
<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" fill="#080c15"/>
  <rect x="4" y="4" width="172" height="172" stroke="rgba(6, 182, 212, 0.4)" stroke-width="2"/>
  <path d="M90 25L145 55V125L90 155L35 125V55L90 25Z" stroke="#06b6d4" stroke-width="8" stroke-linejoin="round"/>
  <path d="M90 25V90M145 55L90 90M35 55L90 90" stroke="#3b82f6" stroke-width="6" stroke-linejoin="round"/>
  <path d="M90 90V155" stroke="#06b6d4" stroke-width="8" stroke-linecap="round"/>
  <circle cx="90" cy="90" r="10" fill="#10b981"/>
</svg>
`;

async function main() {
  console.log('Rendering og-image.png...');
  await sharp(Buffer.from(ogSvg))
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('✓ Created public/og-image.png');

  console.log('Rendering apple-touch-icon.png...');
  await sharp(Buffer.from(appleIconSvg))
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Created public/apple-touch-icon.png');
}

main().catch(console.error);
