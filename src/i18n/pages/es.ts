import type { PagesTranslationBundle } from './types';

export const esPages: PagesTranslationBundle = {
  printerTco: {
    metaTitle: 'Calculadora de Coste de Impresora 3D y TCO de Propiedad | 3DPrintingCostCalc.com',
    metaDescription: 'Calcula el coste real de comprar y mantener una impresora 3D. Compara precio de la máquina, consumo eléctrico mensual, mantenimiento y amortización frente al outsourcing.',
    metaKeywords: 'coste impresora 3d, electricidad impresora 3d, tco impresora 3d, amortizacion impresora 3d, calcular coste impresion 3d',
    badge: 'Motor de TCO y Energía de Hardware',
    heroTitle: '¿Cuánto Cuesta Realmente',
    heroGradient: 'Comprar y Operar una Impresora 3D?',
    heroSubtitle: 'Compara la inversión inicial en hardware, el consumo eléctrico continuo, las bobinas de filamento gastadas y el desgaste de boquillas. Determina el plazo de amortización exacto frente a servicios externos de impresión.',
    faqs: [
      {
        question: "¿Cuánto cuesta comprar una impresora 3D en 2026?",
        answer: "Las impresoras 3D domésticas y profesionales se dividen en 3 gamas principales: Gama de entrada económica (Bambu Lab A1 Mini, Ender-3 V3) entre 199 € y 299 €. Gama media cerrada de alta velocidad CoreXY (Bambu Lab P1S, K1C) entre 499 € y 849 €. Nivel profesional de ingeniería multimaterial (Bambu X1-Carbon, Prusa XL) entre 1.199 € y más de 3.999 €."
      },
      {
        question: "¿Cuánto cuesta la electricidad de una impresora 3D al mes?",
        answer: "Hacer funcionar una impresora 3D durante 120 a 150 horas al mes consume entre 15 y 35 kWh. Con una tarifa eléctrica media de 0,18 €/kWh, el gasto mensual en electricidad para imprimir PLA oscila entre 2,70 € y 6,30 €. Para ABS con cama a 100 °C, el coste ronda entre 7 € y 13 € mensuales."
      },
      {
        question: "¿Qué es el Coste Total de Propiedad (TCO) de una impresora 3D?",
        answer: "El TCO incluye el coste de compra del equipo más el filamento consumido, la factura eléctrica, las boquillas de repuesto (acero endurecido o latón), láminas flexibles PEI y el mantenimiento rutinario (grasa, correas). Para un creador que gaste 12 bobinas al año en una máquina de 600 €, el TCO del primer año ronda los 920 €."
      },
      {
        question: "¿Cuántas piezas necesito imprimir para amortizar la compra frente a servicios de terceros?",
        answer: "Los servicios comerciales de impresión suelen cobrar entre 20 € y 45 € por una pieza de 100 g de PLA para cubrir mano de obra y envíos. Imprimir esa misma pieza en casa cuesta entre 2,50 € y 3,50 € en material y luz. Con una máquina de 400 €, se amortiza tras imprimir unas 12 a 15 piezas medianas."
      }
    ],
    labels: {
      inputsTitle: 'Parámetros de Hardware y Uso',
      selectPrinter: 'Seleccionar Modelo de Impresora:',
      customPrinter: '➕ Impresora Personalizada (Entrada manual)',
      upfrontPrice: 'Precio de Compra de la Máquina (€):',
      powerDraw: 'Potencia Media Consumida (Vatios):',
      monthlyHours: 'Horas de Impresión al Mes:',
      spoolsMonth: 'Bobinas Usadas al Mes (1 kg):',
      spoolCost: 'Coste Medio de una Bobina (€):',
      elecRate: 'Tarifa Eléctrica (€/kWh):',
      lifespan: 'Vida Útil Estimada (Años):',
      maintenance: 'Reserva Anual de Mantenimiento y Repuestos (€):',
      outsourcedCost: 'Precio de Servicio Externo Equivalente (€/kg):',
      resultsTitle: 'Estructura del Coste Total de Propiedad (TCO)',
      firstYearCost: 'Coste Total del Primer Año:',
      monthlyRunCost: 'Coste Operativo Mensual:',
      annualCost: 'Coste de Funcionamiento Anual:',
      breakevenTitle: 'Punto de Equilibrio: Compra vs Subcontratación',
      breakevenDesc: 'Frente a servicios comerciales que cobran ~300 € a 500 €/kg:',
      breakevenMonths: 'Plazo Estimado de Amortización:',
    }
  },
  filamentCalc: {
    metaTitle: 'Calculadora de Peso a Longitud de Filamento 3D | 3DPrintingCostCalc.com',
    metaDescription: 'Convierte peso de filamento a metros. Calcula el coste por gramo y por metro para filamentos de 1.75mm y 2.85mm de PLA, PETG, ABS, TPU y Nylon.',
    metaKeywords: 'calculadora longitud filamento, convertir peso a metros filamento, cuantos metros tiene 1kg pla, precio metro filamento 3d',
    badge: 'Conversor de Física Volumétrica',
    heroTitle: 'Filamento de Impresión 3D',
    heroGradient: 'Calculadora de Coste y Longitud',
    heroSubtitle: 'Convierte con total precisión entre precio de la bobina, peso en gramos, longitud en metros y volumen en cm³. Calcula el coste exacto por gramo y por metro en diámetros de 1.75 mm y 2.85 mm.',
    faqs: [
      {
        question: "¿Cuántos metros de longitud tiene una bobina de 1 kg de PLA?",
        answer: "La longitud se calcula a partir de la masa, la densidad y la sección transversal: Longitud = Masa ÷ (Densidad × π × Radio²). Para filamento estándar PLA de 1.75 mm con densidad de 1.24 g/cm³, una bobina de 1.000 g rinde aproximadamente 332 a 335 metros."
      },
      {
        question: "¿Por qué el filamento de 2.85 mm tiene menos metros por bobina que el de 1.75 mm?",
        answer: "El área transversal aumenta con el cuadrado del diámetro. Un filamento de 2.85 mm es 2.65 veces más grueso que uno de 1.75 mm. En consecuencia, 1 kg de PLA de 2.85 mm rinde unos 125 metros de longitud, aunque el volumen de pieza impresa por gramo sigue siendo idéntico."
      }
    ],
    labels: {
      configTitle: 'Configuración de Bobina y Polímero',
      selectPolymer: 'Tipo de Polímero / Filamento:',
      customMat: '➕ Material Personalizado (Entrada manual)',
      density: 'Densidad Física del Material (g/cm³):',
      diameter: 'Diámetro del Filamento:',
      spoolWeight: 'Peso Neto del Filamento (gramos):',
      spoolPrice: 'Precio de Compra de la Bobina (€):',
      resultsTitle: 'Resultados Volumétricos y Costes Unitarios',
      totalLengthMeters: 'Longitud Total Imprimible:',
      costPerGram: 'Coste por Gramo:',
      costPerMeter: 'Coste por Metro:',
      costPerFoot: 'Coste por Pie:',
      volumeCm3: 'Volumen Total de Polímero Útil:',
    }
  },
  spoolCalc: {
    metaTitle: 'Base de Datos de Tara de Bobinas Vacías y Filamento Restante | 3DPrintingCostCalc.com',
    metaDescription: 'Pesa tu bobine en una báscula de cocina para saber cuánto filamento te queda. Base con más de 40 marcas: Bambu Lab, Polymaker, eSUN, Sunlu, Prusa.',
    metaKeywords: 'peso bobina vacia bambu lab, tara carrete filamento, como saber cuanto filamento queda, pesar filamento 3d',
    badge: 'Índice de Taras de Carretes Vacíos',
    heroTitle: 'Consulta de Tara de Bobinas',
    heroGradient: 'y Filamento Restante en Báscula',
    heroSubtitle: 'Coloca tu bobina empezada en una báscula de cocina. Resta la tara del fabricante para conocer los gramos y metros exactos de filamento útil y evitar quedarte sin material a mitad de impresión.',
    faqs: [
      {
        question: "¿Cuánto pesa una bobina vacía oficial de Bambu Lab?",
        answer: "El carrete reutilizable oficial de Bambu Lab de plástico PC de 2 piezas (con chip RFID) pesa unos 212 gramos (la versión para alta temperatura de policarbonato pesa 248 g). Si utilizas una recarga con núcleo de cartón, el núcleo pesa aproximadamente 37 a 45 gramos."
      },
      {
        question: "¿Cómo evitar que la impresora se quede sin filamento en mitad del trabajo?",
        answer: "Antes de lanzar una impresión larga, pesa la bobina en una báscula de precisión. Selecciona la marca en nuestra base de datos para descontar la tara. Si los gramos netos restantes superan el cálculo del laminador en al menos 15 o 20 g, puedes imprimir con total tranquilidad."
      }
    ],
    labels: {
      searchSpool: 'Seleccionar Marca y Modelo de Bobina:',
      customTare: '➕ Tara Personalizada (Entrada manual)',
      currentWeight: 'Lectura Total de la Báscula (gramos):',
      tareWeight: 'Tara del Carrete Vacío (gramos):',
      resultsTitle: 'Filamento Disponible Real',
      remainingGrams: 'Peso Neto de Filamento Restante:',
      remainingMeters: 'Metros Útiles Estimados:',
      percentLeft: 'Porcentaje Restante en la Bobina:',
    }
  },
  amsCalc: {
    metaTitle: 'Calculadora de Residuos de Purga Bambu AMS y Color | 3DPrintingCostCalc.com',
    metaDescription: 'Calcula el peso y coste de las purgas de filamento (cacas Bambu) y torres de cebado. Descubre cómo la impresión por lotes en una misma bandeja reduce el desperdicio un 90%.',
    metaKeywords: 'calculadora purga bambu ams, residuos ams bambu lab cacas, coste impresion multicolor 3d, optimizar purga multicolor',
    badge: 'Economía de Lotes Multimaterial',
    heroTitle: 'Bambu AMS y Multimaterial',
    heroGradient: 'Calculadora de Desperdicio y Purga',
    heroSubtitle: 'Calcula con exactitud los gramos y euros perdidos por la tolva de purga y la torre de limpieza. Visualiza cómo imprimir varias unidades en una sola bandeja reparte el residuo para maximizar tu margen de venta.',
    faqs: [
      {
        question: "¿Por qué la impresión 3D multicolor con una sola boquilla genera tantos residuos?",
        answer: "Los sistemas de una sola boquilla (como el Bambu Lab AMS) deben purgar todo el plástico fundido residual del color anterior dentro del bloque calefactor antes de empezar con el nuevo tono. Una impresión con 500 cambios de color puede llegar a purgar entre 150 g y 300 g de desperdicio."
      },
      {
        question: "¿Por qué imprimir copias en lote reduce drásticamente las pérdidas?",
        answer: "Los cambios de color ocurren por capa, no por objeto individual. Si imprimir una figura requiere 200 cambios de filamento, imprimir 10 figuras en la misma base seguirá requiriendo solo 200 cambios. El residuo total de purga es el mismo pero se divide entre 10 unidades, recortando el desecho por pieza un 90%."
      }
    ],
    labels: {
      configTitle: 'Parámetros del Trabajo Multicolor',
      totalSwaps: 'Número Total de Cambios de Filamento:',
      flushVolume: 'Purga Media por Cambio (g):',
      modelGrams: 'Peso Neto de una Pieza Suelta (g):',
      spoolPriceKg: 'Precio Medio del Filamento (€/kg):',
      resultsTitle: 'Análisis de Desperdicio y Costes',
      wasteWeight: 'Peso Total Purgas + Torre de Cebado:',
      wasteCost: 'Dinero Perdido en Filamento Purgado:',
      ratio: 'Ratio Desperdicio / Peso de la Pieza:',
    }
  },
  resinCalc: {
    metaTitle: 'Calculadora de Coste de Impresión en Resina SLA / LCD | 3DPrintingCostCalc.com',
    metaDescription: 'Calcula el coste de imprimir en resina líquida fotosensible: coste por mL, ahorro por vaciado de modelos, consumo de alcohol isopropílico IPA, lámina FEP y vida de pantalla LCD.',
    metaKeywords: 'coste impresion resina 3d, precio por ml resina sla, calcular coste resina lcd, desgaste lamina fep resina',
    badge: 'Moteur Économique Résine SLA / MSLA',
    heroTitle: 'Resina SLA / LCD',
    heroGradient: 'Calculadora de Coste y Químicos',
    heroSubtitle: 'Presupuesta con exactitud tus piezas en resina líquida. Incluye el coste del bote por mL, el ahorro por vaciado, el consumo de alcohol isopropílico de lavado, el desgaste del film FEP y la amortización de la pantalla LCD UV.',
    faqs: [
      {
        question: "¿Cuánto cuesta un mililitro (mL) de resina para impresora 3D?",
        answer: "La resina estándar de 405 nm de consumo (entre 25 € y 35 € por botella de 1.000 g / ~900 mL) cuesta unos 0,03 € a 0,04 € por mL. Las resinas de alta tenacidad (tipo ABS) cuestan entre 0,05 € y 0,08 € por mL, y las resinas dentales superan los 0,15 € por mL."
      },
      {
        question: "¿Cuánta resina se ahorra vaciando (ahuecando) una pieza?",
        answer: "Vaciar una pieza con un grosor de pared de 1.5 mm a 2.0 mm permite reducir el consumo de resina líquida entre un 50% y un 75% en figuras medianas o grandes. Recuerda siempre añadir agujeros de drenaje en la base para evitar el efecto ventosa y evacuar la resina líquida atrapada."
      }
    ],
    labels: {
      configTitle: 'Parámetros de Resina y Desgaste',
      bottlePrice: 'Precio de la Botella de Resina (€):',
      printMl: 'Volumen Laminado del Modelo (mL):',
      ipaCost: 'Alcohol Isopropílico IPA y Guantes (€):',
      screenDeprec: 'Desgaste Lámina FEP y Pantalla LCD (€):',
      resultsTitle: 'Desglose del Coste de Pieza en Resina',
      rawResinCost: 'Coste Neto de Resina Fotopolímero:',
      consumablesCost: 'Químicos de Lavado y Amortización LCD/FEP:',
      totalJobCost: 'Coste Global de Producción Unitaria:',
    }
  },
  legal: {
    privacyTitle: 'Política de Privacidad',
    privacyDesc: 'Todos los archivos 3D (.stl, .3mf, .gcode) se procesan 100% en local dentro de tu navegador web sin ninguna subida a servidores.',
    privacyBadge: 'Compromiso de Privacidad Cero Subidas',
    privacyGuarTitle: 'Garantía Fundamental de Privacidad',
    privacyGuarDesc: '3DPrintingCostCalc.com es una herramienta web completamente sin estado (stateless) que opera en el lado del cliente. Cuando arrastras o seleccionas un archivo (.stl, .3mf, .gcode), el análisis geométrico y el cómputo de volumen se ejecutan íntegramente en la memoria de tu navegador mediante JavaScript. Ningún modelo 3D, archivo CAD, plano industrial o código G-code se sube ni se comparte con servidores externos o terceros.',
    sec1Title: '1. Arquitectura de Inspección Local sin Servidores',
    sec1Desc: 'El análisis de datos se efectúa exclusivamente en la memoria RAM volátil de tu ordenador. Al recargar la página o cerrar la pestaña, todos los puntos y mallas tridimensionales se borran por completo de la memoria.',
    sec2Title: '2. Datos Personales que No Recopilamos',
    sec2Desc: 'No requerimos registro de cuentas ni inicio de sesión. No recopilamos nombres, correos electrónicos, datos bancarios ni planos de diseños protegidos.',
    sec3Title: '3. Preferencias en Almacenamiento Local',
    sec3Desc: 'Guardamos únicamente tus preferencias de tema visual (Modo Oscuro / Claro) y tu tarifa eléctrica por defecto en el localStorage de tu dispositivo.',

    termsTitle: 'Términos de Servicio',
    termsDesc: 'Condiciones de uso, exención de responsabilidad técnica y acuerdos para usuarios de 3DPrintingCostCalc.com.',
    termsBadge: 'Acuerdo de Servicio y Exención Técnica',
    termsSummaryTitle: 'Resumen del Acuerdo',
    termsSummaryDesc: '3DPrintingCostCalc.com proporciona herramientas de estimación técnica gratuitas para creadores, granjas de impresión y empresas. El usuario acepta que los cálculos son estimaciones teóricas que deben verificarse en equipos físicos calibrados.',
    termsSec1Title: '1. Aceptación de los Términos',
    termsSec1Desc: 'El acceso o uso del sitio web implica la aceptación plena de estos términos y de la política de privacidad.',
    termsSec2Title: '2. Tolerancias Físicas y Exención de Responsabilidad',
    termsSec2Desc: 'Las fluctuaciones de densidad en el filamento (±3-5%), las curvas de aceleración del laminador, los patrones de relleno y la temperatura ambiente generan pequeñas variaciones respecto al mundo real. Se recomienda realizar impresiones de prueba pesadas en básculas digitales.',
    termsSec3Title: '3. Uso Comercial de las Estimaciones',
    termsSec3Desc: 'Eres libre de utilizar los resultados de los cálculos, desgloses y presupuestos generados para cotizar pedidos y fijar precios comerciales.',

    contactTitle: 'Contacto y Soporte',
    contactSubtitle: 'Agradecemos cualquier comentario, sugerencia de nuevos modelos de impresora y datos de taras de carretes.',
    contactCardTitle: 'Ponte en Contacto con el Equipo',
    contactCardDesc: '¿Tienes dudas sobre los cálculos matemáticos? ¿Quieres solicitar el soporte para una nueva impresora 3D o enviar el peso medido de una bobina vacía para nuestra base de datos?',
    contactEmailLabel: 'Correo Oficial de Soporte:',
    contactTurnaround: 'Tiempo de respuesta: Habitualmente en un plazo de 24 a 48 horas en días laborables.',
    contactSuggestTitle: '¿Vas a Enviar una Tara o una Nueva Impresora?',
    contactSuggestDesc: 'Al remitir datos técnicos, incluye marca del fabricante, nombre exacto del modelo, peso en gramos medido en báscula digital y material del carrete (cartón, plástico rígido, etc.).'
  },
  printerProfile: {
    title: (b, m) => `Calculadora de Coste y Electricidad de ${b} ${m} | 3DPrintingCostCalc.com`,
    description: (b, m, w) => `Calcula el coste exacto de impresión de la ${b} ${m}. Potencia media ${w}W, amortización y desgaste de consumibles. Herramienta 100% gratuita.`,
    badge: 'Ficha de Máquina y Análisis TCO',
    heroH1: (b, m) => `Coste de Impresión y Electricidad ${b} ${m}`,
    subtitle: (b, m, v, msrp) => `Estimación personalizada para ${b} ${m} (${v} mm volumen de impresión, precio aproximado ${msrp} €). Calcula filamento, consumo eléctrico y amortización por hora.`,
    smallPart: 'Pieza Pequeña / Miniatura (50g)',
    medPart: 'Pieza Funcional Mediana (150g)',
    largePart: 'Prototipo Grande / Casco (500g)',
    specsTitle: 'Especificaciones Técnicas del Hardware',
    hardwareMsrp: 'Precio Recomendado de la Máquina:',
    avgPower: 'Consumo Eléctrico Medio (PLA):',
    lifespan: 'Vida Útil Estimada en Horas:',
    buildVolume: 'Volumen de Impresión Máximo:',
    benchmarksTitle: 'Escenarios Típicos de Impresión',
    colJob: 'Tipo de Trabajo',
    colFilament: 'Filamento (g)',
    colTime: 'Tiempo (h)',
    colMatCost: 'Material',
    colElecCost: 'Electricidad',
    colMachCost: 'Amortización',
    colTotalCost: 'Coste Total',
    faqs: (p) => [
      {
        question: `¿Cuánta electricidad consume la ${p.brand} ${p.model}?`,
        answer: `La ${p.brand} ${p.model} consume una media de ${p.avgWattsPla} Vatios imprimiendo PLA estándar a 55 °C de cama. Con las tarifas eléctricas actuales, 1 hora de funcionamiento cuesta menos de 0,03 €.`
      },
      {
        question: `¿Cuál es el coste por hora de amortización de la ${p.brand} ${p.model}?`,
        answer: `Con un precio de compra de unos ${p.msrpUsd} € y una vida útil estimada de ${p.defaultLifespanHours.toLocaleString()} horas de impresión, la depreciación del equipo se sitúa en unos ${(p.msrpUsd / p.defaultLifespanHours).toFixed(2)} € por cada hora de uso.`
      }
    ]
  },
  materialProfile: {
    title: (n) => `Guía de Coste por Gramo, Densidad y Parámetros de ${n} | 3DPrintingCostCalc.com`,
    description: (n, d) => `Manual técnico y económico de filamento ${n}. Densidad ${d} g/cm³, metros por bobina y temperaturas óptimas de extrusión.`,
    badge: 'Ficha Técnica de Polímero y Coste',
    heroH1: (n) => `Guía de Coste y Densidad de ${n}`,
    subtitle: (n, d) => `Referencia técnica y calculadora de costes para material ${n} con una densidad de ${d} g/cm³.`,
    specsTitle: 'Propiedades Físicas y Parámetros Recomendados',
    density: 'Densidad del Polímero:',
    nozzleTemp: 'Temperatura de Boquilla Óptima:',
    bedTemp: 'Temperatura de Cama Óptima:',
    chamberReq: 'Cabina Cerrada Necesaria:',
    costPerKg: 'Precio Medio de Mercado / kg:',
    metersPerKg: 'Metros por Bobina de 1 kg (1.75 mm):',
    shrinkage: 'Contracción Térmica:',
    faqs: (m) => [
      {
        question: `¿Cuánto cuesta 1 kg de filamento ${m.name}?`,
        answer: `El precio medio de una bobina de calidad estándar de ${m.name} ronda los ${m.defaultPricePerKgUsd.toFixed(2)} € por kg (unos ${(m.defaultPricePerKgUsd / 1000).toFixed(3)} € por gramo).`
      },
      {
        question: `¿Cuál es la densidad de ${m.name} y cuántos metros rinde una bobina?`,
        answer: `${m.name} tiene una densidad de ${m.densityGcm3} g/cm³. En filamento estándar de 1.75 mm, 1 kg equivale a aproximadamente ${(1000 / (m.densityGcm3 * 0.02405) / 100).toFixed(1)} metros.`
      }
    ]
  }
};
