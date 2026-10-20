import type { PagesTranslationBundle } from './types';

export const enPages: PagesTranslationBundle = {
  printerTco: {
    metaTitle: '3D Printer Cost Calculator & Ownership TCO Estimator | 3DPrintingCostCalc.com',
    metaDescription: 'Calculate the true cost of buying and owning a 3D printer. Compare upfront machine price, monthly electricity, maintenance, and buy vs outsource break-even analysis.',
    metaKeywords: '3d printer cost, cost of 3d printer, how much does a 3d printer cost, 3d printer electricity cost calculator, 3d printer tco',
    badge: 'Hardware TCO & Electricity Engine',
    heroTitle: 'How Much Does a',
    heroGradient: '3D Printer Cost',
    heroSubtitle: 'Compare upfront hardware purchase price, continuous electricity draw, ongoing filament spools, and maintenance wear. Determine your exact break-even timeline versus commercial printing services.',
    faqs: [
      {
        question: "How much does a 3D printer cost to buy in 2026?",
        answer: "Consumer 3D printers span three primary tiers: Budget entry-level printers (such as Bambu Lab A1 Mini, Ender-3 V3 SE) cost $199-$299. Mid-range high-speed enclosed CoreXY printers (Bambu Lab P1S, K1C) cost $499-$849. Professional multi-tool engineering machines (Bambu X1-Carbon, Prusa XL) range from $1,199 to $3,999+."
      },
      {
        question: "How much does a 3D printer cost to run per month in electricity?",
        answer: "Running a 3D printer for 120-150 hours a month consumes between 15 and 35 kWh. At average US utility rates ($0.16/kWh), monthly electricity costs range between $2.40 and $5.60 for PLA printing, or $7.20 to $12.00 for 100°C heated bed ABS printing."
      },
      {
        question: "What is the true Total Cost of Ownership (TCO) of a 3D printer?",
        answer: "Total Cost of Ownership includes the upfront machine purchase price plus ongoing consumable filament, electricity, replacement nozzles, PEI build plates, and routine maintenance. For an average user consuming 12 spools a year on a $600 printer, the first-year ownership cost is roughly $900."
      },
      {
        question: "How many prints does it take to break even versus outsourcing to 3D print services?",
        answer: "Commercial 3D printing services typically charge $20 to $45 for a standard 100g PLA part. Printing that same part at home costs approximately $2.50 to $3.50 in material and electricity. On a $400 3D printer, you break even after printing approximately 12 to 15 medium-sized parts."
      }
    ],
    labels: {
      inputsTitle: 'Hardware & Usage Parameters',
      selectPrinter: 'Select 3D Printer Model:',
      customPrinter: '➕ Custom Printer (Manual Entry)',
      upfrontPrice: 'Upfront Printer Price ($):',
      powerDraw: 'Printer Power Draw (Watts):',
      monthlyHours: 'Monthly Print Hours:',
      spoolsMonth: 'Spools Used Per Month (1kg):',
      spoolCost: 'Average Spool Cost ($):',
      elecRate: 'Electricity Rate ($/kWh):',
      lifespan: 'Printer Lifespan (Years):',
      maintenance: 'Annual Maintenance Reserve ($):',
      outsourcedCost: 'Commercial Service Price ($/kg equivalent):',
      resultsTitle: 'Total Cost of Ownership (TCO)',
      firstYearCost: 'First-Year Total Cost:',
      monthlyRunCost: 'Monthly Operating Cost:',
      annualCost: 'Annual Running Cost:',
      breakevenTitle: 'Buy vs Outsource Break-Even',
      breakevenDesc: 'Versus commercial printing services charging ~$50/kg:',
      breakevenMonths: 'Estimated Break-Even Timeline:',
    }
  },
  filamentCalc: {
    metaTitle: 'Filament Cost & Length Calculator (Weight to Length) | 3DPrintingCostCalc.com',
    metaDescription: 'Convert filament weight to length, calculate cost per gram and cost per meter for 1.75mm and 2.85mm PLA, PETG, ABS, TPU, and Nylon spools.',
    metaKeywords: 'filament cost calculator, filament length to weight calculator, cost per gram of filament, 1kg filament length, filament calculator, 3d printer filament cost calculator',
    badge: 'Volumetric Physics Converter',
    heroTitle: 'Filament',
    heroGradient: 'Cost & Length Calculator',
    heroSubtitle: 'Convert between spool price, weight in grams, length in meters/feet, and volume in cm³. Calculate exact cost per gram and cost per meter across 1.75mm and 2.85mm diameters for PLA, PETG, ABS, TPU, and Carbon Fiber.',
    faqs: [
      {
        question: "How do you calculate the length of filament on a 1kg spool?",
        answer: "Filament length is calculated from mass, polymer density, and cross-sectional wire area: Length = Mass ÷ (Density × π × Radius²). For standard 1.75mm PLA with a density of 1.24 g/cm³, a 1,000g spool yields approximately 335.3 meters (1,100 feet)."
      },
      {
        question: "Why does 2.85mm filament have fewer meters per spool than 1.75mm?",
        answer: "Because cross-sectional area scales with the square of the diameter (A = π × r²), a 2.85mm filament is roughly 2.65 times thicker than a 1.75mm filament. Consequently, 1 kg of 2.85mm PLA yields only about 125 meters of length, although the printed volume per gram remains identical."
      },
      {
        question: "How do I calculate cost per meter of 3D printer filament?",
        answer: "To find cost per meter, divide spool purchase price by total meters on the spool: Cost Per Meter = Spool Price ÷ Total Spool Meters. On a $20.00 1kg spool of 1.75mm PLA containing 335 meters, the cost is $20.00 ÷ 335m = $0.0597 per meter (~5.97 cents/meter)."
      }
    ],
    labels: {
      configTitle: 'Spool & Material Configuration',
      selectPolymer: 'Polymer / Filament Type:',
      customMat: '➕ Custom Material (Manual Entry)',
      density: 'Material Density (g/cm³):',
      diameter: 'Filament Diameter:',
      spoolWeight: 'Spool Net Weight (grams):',
      spoolPrice: 'Spool Purchase Price ($):',
      resultsTitle: 'Volumetric & Cost Outputs',
      totalLengthMeters: 'Total Printable Length:',
      costPerGram: 'Cost Per Gram:',
      costPerMeter: 'Cost Per Meter:',
      costPerFoot: 'Cost Per Foot:',
      volumeCm3: 'Total Usable Polymer Volume:',
    }
  },
  spoolCalc: {
    metaTitle: 'Empty Spool Tare Weight Database & Remaining Filament Calculator | 3DPrintingCostCalc.com',
    metaDescription: 'Weigh your spool on a kitchen scale to see how much filament is left. Search 40+ empty spool tare weights for Bambu Lab, Polymaker, eSUN, Sunlu, Elegoo, and Prusament.',
    metaKeywords: 'how much filament left on spool, empty spool weight database, bambu spool weight, polymaker empty spool weight, filament spool tare weight',
    badge: 'Scale-to-Net Tare Database',
    heroTitle: 'Remaining Filament &',
    heroGradient: 'Spool Tare Weight Lookup',
    heroSubtitle: 'Put your partially used spool on a digital scale. Select your filament brand to subtract empty spool tare weight and verify whether your print will succeed overnight or run out mid-job.',
    faqs: [
      {
        question: "What is empty spool tare weight?",
        answer: "Tare weight is the weight of the empty plastic or cardboard spool itself without any filament on it. Subtracting known tare weight from total scale reading reveals the exact remaining net filament in grams: Net Filament = Gross Scale Weight - Empty Spool Tare Weight."
      },
      {
        question: "How much does an empty Bambu Lab spool weigh?",
        answer: "The standard Bambu Lab reusable 2-piece injection-molded plastic spool weighs approximately 212 grams (high-temperature polycarbonate versions weigh 248g). Bambu cardboard refills alone weigh about 37 grams."
      },
      {
        question: "How much does a Polymaker cardboard spool weigh?",
        answer: "A standard 1 kg Polymaker cardboard spool weighs approximately 140 grams (±10g)."
      }
    ],
    labels: {
      searchSpool: 'Select Empty Spool Profile:',
      customTare: '➕ Custom Spool (Manual Tare Entry)',
      currentWeight: 'Scale Gross Reading (grams):',
      tareWeight: 'Empty Spool Tare (grams):',
      resultsTitle: 'Remaining Filament Calculation',
      remainingGrams: 'Net Filament Remaining:',
      remainingMeters: 'Estimated Usable Meters:',
      percentLeft: 'Spool Remaining Percentage:',
    }
  },
  amsCalc: {
    metaTitle: 'Bambu Lab AMS Purge Waste & Multi-Color Batch Calculator | 3DPrintingCostCalc.com',
    metaDescription: 'Calculate Bambu AMS and multi-color purge poop waste. See how batch printing on a single plate divides flush waste by 10x and dramatically cuts per-unit 3D printing cost.',
    metaKeywords: 'bambu ams waste calculator, multicolor 3d print cost calculator, purge volume calculator, bambu poop calculator, 3d print batch optimizer',
    badge: 'Multi-Material Batch Economics',
    heroTitle: 'Bambu AMS & Multi-Color',
    heroGradient: 'Purge Waste Calculator',
    heroSubtitle: 'Calculate the exact filament grams and dollars lost to purge chute poop and prime towers. Visualize how full-plate batch printing divides flush waste across multiple units to maximize your Etsy margins.',
    faqs: [
      {
        question: "Why does multi-color 3D printing produce so much purge waste ('poop')?",
        answer: "Single-nozzle multi-material systems (like Bambu Lab AMS, Creality CFS) use one hotend to extrude multiple colors. When switching from one color to another, the printer must purge residual melted plastic through the chute to prevent color bleeding. A print with 500 swaps can easily purge 150g to 300g of waste."
      },
      {
        question: "How does printing multiple copies in a batch reduce AMS waste?",
        answer: "Color changes occur per layer, not per object. If you print one figurine that requires 200 swaps, the printer purges 200 times. If you print 10 identical figurines on the same plate, the printer still only purges 200 times total! The total flush waste is divided across 10 units, slashing waste per item by 90%."
      }
    ],
    labels: {
      configTitle: 'Multi-Color Job Parameters',
      totalSwaps: 'Total Filament Swaps:',
      flushVolume: 'Avg Flush Per Swap (g):',
      modelGrams: 'Single Model Weight (g):',
      spoolPriceKg: 'Average Spool Cost ($/kg):',
      resultsTitle: 'Purge Waste & Cost Analysis',
      wasteWeight: 'Total Purge & Tower Waste:',
      wasteCost: 'Filament Wasted to Poop Chute:',
      ratio: 'Waste-to-Model Ratio:',
    }
  },
  resinCalc: {
    metaTitle: 'Resin 3D Print Cost Calculator (SLA / MSLA) | 3DPrintingCostCalc.com',
    metaDescription: 'Calculate SLA/MSLA liquid photopolymer resin print costs. Accounts for resin mL, hollow savings, supports, IPA wash depletion, FEP release film wear, and LCD screen life.',
    metaKeywords: 'resin 3d print cost calculator, resin print price calculator, msla print cost, sla 3d printer cost',
    badge: 'Photopolymer SLA / MSLA Physics',
    heroTitle: 'Resin 3D Print',
    heroGradient: 'Cost & Chemical Calculator',
    heroSubtitle: 'Accurately price MSLA & SLA liquid resin prints. Factor in raw bottle cost, model hollowing savings, support volume, IPA wash solvent replenishment, FEP release film degradation, and mono LCD screen wear.',
    faqs: [
      {
        question: "How is resin 3D printing cost calculated?",
        answer: "Resin printing costs include liquid photopolymer resin volume ($/mL), support volume (typically 15%–25% extra), Isopropyl Alcohol (IPA) wash bath degradation, disposable nitrile gloves, FEP/ACF vat release film wear, LCD mono screen amortization, and UV cure station electricity."
      },
      {
        question: "How much cheaper is a hollowed resin model compared to solid?",
        answer: "Hollowing a resin model with a 1.5mm to 2.0mm wall thickness reduces liquid resin consumption by 50% to 75% for medium and large models."
      }
    ],
    labels: {
      configTitle: 'Resin Job Parameters',
      bottlePrice: 'Resin Bottle Price ($):',
      printMl: 'Model Slicer Volume (mL):',
      ipaCost: 'IPA Wash Solvent ($):',
      screenDeprec: 'FEP / Screen Wear ($):',
      resultsTitle: 'Resin Part Cost Breakdown',
      rawResinCost: 'Liquid Photopolymer Resin:',
      consumablesCost: 'Wash Chemicals & Screen Amortization:',
      totalJobCost: 'Total Single Part Cost:',
    }
  },
  legal: {
    privacyTitle: 'Privacy Policy',
    privacyDesc: 'All 3D files (.stl, .3mf, .gcode) are parsed 100% locally in your browser with zero server uploads.',
    privacyBadge: 'Zero-Upload Privacy Standard',
    privacyGuarTitle: 'Core Privacy Guarantee',
    privacyGuarDesc: '3DPrintingCostCalc.com is an entirely stateless client-side web utility. When you drop, upload, or select a 3D model file (.stl, .3mf, .gcode, .bgcode, or .obj), the file is read, triangulated, and parsed entirely inside your local browser memory using modern JavaScript Web APIs. No 3D models, CAD geometries, intellectual property, or G-code toolpaths are ever uploaded or transmitted to our servers or any third party.',
    sec1Title: '1. Zero-Server File Inspection Architecture',
    sec1Desc: 'Binary STL, OBJ, 3MF packages, and G-code toolpaths are decoded entirely in local volatile RAM. As soon as you reload or close the tab, all parsed mesh coordinates are purged from memory.',
    sec2Title: '2. Personal Data We Do Not Collect',
    sec2Desc: 'No account registration is required. We never collect names, emails, billing details, or proprietary designs.',
    sec3Title: '3. Local Storage Preferences',
    sec3Desc: 'We store your preferred theme and default printer presets inside your own browser localStorage for your convenience.',

    termsTitle: 'Terms of Service',
    termsDesc: 'Terms of service, engineering calculation disclaimers, and user agreements for 3DPrintingCostCalc.com.',
    termsBadge: 'Engineering Terms & Agreement',
    termsSummaryTitle: 'Agreement Summary',
    termsSummaryDesc: '3DPrintingCostCalc.com provides free engineering estimation tools for 3D printing makers, print farms, and businesses. By using this service, you agree that calculations are engineering estimates for planning and must be verified on calibrated physical equipment.',
    termsSec1Title: '1. Acceptance of Terms',
    termsSec1Desc: 'By accessing or using this website, you agree to these Terms of Service and our Privacy Policy.',
    termsSec2Title: '2. Engineering Calculation Disclaimer',
    termsSec2Desc: 'Polymer density variations (±3-5%), slicer acceleration limits, infill geometry choices, and ambient temperatures affect real-world outcomes. Users are advised to verify test prints on physical scales.',
    termsSec3Title: '3. Commercial & Business Usage',
    termsSec3Desc: 'You are welcome to use our calculation outputs, quote breakdowns, and pricing templates for commercial quoting and manufacturing pricing.',

    contactTitle: 'Contact & Support',
    contactSubtitle: 'We welcome community feedback, tare weight submissions, and printer presets.',
    contactCardTitle: 'Get in Touch',
    contactCardDesc: 'Have a question about our 3D print calculations, want to request support for a new 3D printer model, or submit an empty spool tare weight to our database?',
    contactEmailLabel: 'Official Support Email:',
    contactTurnaround: 'Response turnaround time: Typically within 24 to 48 hours on business days.',
    contactSuggestTitle: 'Suggesting a Tare Weight or Machine Preset?',
    contactSuggestDesc: 'When submitting new hardware data, please include manufacturer brand, exact model name, empty weight in grams weighed on a digital scale, and spool material type.'
  },
  printerProfile: {
    title: (b, m) => `${b} ${m} 3D Print Cost Calculator & Electricity Guide | 3DPrintingCostCalc.com`,
    description: (b, m, w) => `Calculate exact print costs for ${b} ${m}. Features ${w}W average power draw, hardware depreciation, and consumable wear rates. Free instant calculation.`,
    badge: 'Hardware Profile & TCO Engine',
    heroH1: (b, m) => `${b} ${m} 3D Print Cost & Electricity Calculator`,
    subtitle: (b, m, v, msrp) => `Customized cost breakdown for ${b} ${m} (${v} mm build volume, $${msrp} MSRP). Calculate filament, power consumption, and hourly depreciation.`,
    smallPart: 'Small Miniature (50g)',
    medPart: 'Medium Functional Part (150g)',
    largePart: 'Large Prototype / Helmet (500g)',
    specsTitle: 'Hardware Specifications',
    hardwareMsrp: 'Hardware MSRP:',
    avgPower: 'Avg Power Draw (PLA):',
    lifespan: 'Design Service Lifespan:',
    buildVolume: 'Max Build Volume:',
    benchmarksTitle: 'Cost Benchmark Scenarios',
    colJob: 'Print Job Type',
    colFilament: 'Filament (g)',
    colTime: 'Time (h)',
    colMatCost: 'Material Cost',
    colElecCost: 'Electricity',
    colMachCost: 'Machine Deprec.',
    colTotalCost: 'Total Cost',
    faqs: (p) => [
      {
        question: `How much electricity does the ${p.brand} ${p.model} use?`,
        answer: `The ${p.brand} ${p.model} consumes an average of ${p.avgWattsPla} Watts when printing standard PLA (55°C bed). At US utility rates ($0.16/kWh), printing for 1 hour costs under $0.03.`
      },
      {
        question: `What is the hourly depreciation cost of the ${p.brand} ${p.model}?`,
        answer: `With an MSRP of $${p.msrpUsd} and an estimated operational service lifespan of ${p.defaultLifespanHours.toLocaleString()} print hours, capital depreciation is $${(p.msrpUsd / p.defaultLifespanHours).toFixed(3)} per hour.`
      }
    ]
  },
  materialProfile: {
    title: (n) => `${n} Cost Per Gram, Density & Slicing Guide | 3DPrintingCostCalc.com`,
    description: (n, d) => `Calculate 3D print costs with ${n}. Features ${d} g/cm³ density, unit cost per gram, meters per spool, and optimal extrusion temperatures.`,
    badge: 'Polymer Engineering Profile',
    heroH1: (n) => `${n} Cost & Density Guide`,
    subtitle: (n, d) => `Engineering reference and cost calculator for ${n} filament (${d} g/cm³ density).`,
    specsTitle: 'Physical & Slicing Parameters',
    density: 'Polymer Density:',
    nozzleTemp: 'Nozzle Temperature:',
    bedTemp: 'Bed Temperature:',
    chamberReq: 'Enclosure Recommended:',
    costPerKg: 'Average Market Price / kg:',
    metersPerKg: 'Meters Per 1kg (1.75mm):',
    shrinkage: 'Volumetric Shrinkage:',
    faqs: (m) => [
      {
        question: `How much does 1 gram of ${m.name} cost?`,
        answer: `At an average retail price of $${m.defaultPricePerKgUsd.toFixed(2)} per 1 kg spool, ${m.name} costs $${(m.defaultPricePerKgUsd / 1000).toFixed(4)} per gram.`
      },
      {
        question: `What is the density of ${m.name} and how does it affect length?`,
        answer: `${m.name} has a density of ${m.densityGcm3} g/cm³. 1 kg yields approximately ${(1000 / (m.densityGcm3 * 0.02405) / 100).toFixed(1)} meters of 1.75mm filament.`
      }
    ]
  }
};
