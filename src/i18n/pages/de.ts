import type { PagesTranslationBundle } from './types';

export const dePages: PagesTranslationBundle = {
  printerTco: {
    metaTitle: '3D-Drucker Kostenrechner & Gesamtbetriebskosten (TCO) | 3DPrintingCostCalc.com',
    metaDescription: 'Berechne die wahren Kosten für Kauf und Betrieb eines 3D-Druckers. Vergleiche Hardwarepreis, monatlichen Stromverbrauch, Wartung und Amortisation gegenüber Druckdienstleistern.',
    metaKeywords: '3d drucker kosten, 3d drucker stromkosten, tco 3d drucker, amortisation 3d drucker, 3d druck stückkosten berechnen',
    badge: 'Hardware TCO- & Energie-Rechner',
    heroTitle: 'Was Kostet ein',
    heroGradient: '3D-Drucker Wirklich in Anschaffung & Betrieb?',
    heroSubtitle: 'Vergleiche den Hardware-Kaufpreis, kontinuierlichen Stromverbrauch, Filamentbedarf und Düsenverschleiß. Ermittle die exakte Amortisationszeit gegenüber gewerblichen 3D-Druckdienstleistern.',
    faqs: [
      {
        question: "Was kostet ein 3D-Drucker im Jahr 2026?",
        answer: "Verbraucher-3D-Drucker teilen sich in drei Hauptklassen: Günstige Einsteigergeräte (Bambu Lab A1 Mini, Ender-3 V3) kosten zwischen 199 € und 299 €. Geschlossene High-Speed CoreXY-Mittelklasse (Bambu Lab P1S, K1C) liegt zwischen 499 € und 849 €. Professionelle Multi-Material-Maschinen (Bambu X1-Carbon, Prusa XL) kosten zwischen 1.199 € und über 3.999 €."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für einen 3D-Drucker?",
        answer: "Bei einer monatlichen Laufzeit von 120 bis 150 Stunden verbraucht ein 3D-Drucker etwa 15 bis 35 kWh. Bei einem durchschnittlichen Strompreis von 0,32 €/kWh liegen die monatlichen Stromkosten für PLA-Drucke bei rund 4,80 € bis 11,20 €. Für ABS mit 100 °C Heizbett betragen sie etwa 12 € bis 22 € im Monat."
      },
      {
        question: "Was gehört zu den Gesamtbetriebskosten (TCO) eines 3D-Druckers?",
        answer: "Die TCO umfasst neben dem Kaufpreis die verbrauchten Filamentspulen, die Stromrechnung, Ersatzdüsen (gehärteter Stahl oder Messing), PEI-Druckplatten sowie Schmiermittel und Riemenwartung. Bei einem 600-€-Drucker und 12 verbrauchten Spulen pro Jahr belaufen sich die TCO im ersten Jahr auf etwa 950 €."
      },
      {
        question: "Nach wie vielen Drucken amortisiert sich der Kauf im Vergleich zu Druckdienstleistern?",
        answer: "Kommerzielle Druckdienstleister berechnen für ein typisches 100g-PLA-Teil 25 € bis 50 € inklusive Versand. Zu Hause kostet der Druck desselben Teils an Material und Strom lediglich 2,50 € bis 3,50 €. Bei einem 400-€-Drucker ist die Anschaffung bereits nach 12 bis 15 mittleren Druckteilen vollständig amortisiert."
      }
    ],
    labels: {
      inputsTitle: 'Hardware- & Betriebsparameter',
      selectPrinter: '3D-Drucker-Modell auswählen:',
      customPrinter: '➕ Eigener Drucker (Manuelle Eingabe)',
      upfrontPrice: 'Anschaffungspreis des Druckers (€):',
      powerDraw: 'Durchschnittliche Leistungsaufnahme (Watt):',
      monthlyHours: 'Monatliche Druckstunden:',
      spoolsMonth: 'Verbrauchte Spulen pro Monat (1 kg):',
      spoolCost: 'Durchschnittlicher Spulenpreis (€):',
      elecRate: 'Strompreis (€/kWh):',
      lifespan: 'Erwartete Nutzungsdauer (Jahre):',
      maintenance: 'Jährliche Rücklage für Wartung & Ersatzteile (€):',
      outsourcedCost: 'Vergleichspreis bei Druckdienstleistern (€/kg):',
      resultsTitle: 'Zusammensetzung der Gesamtbetriebskosten (TCO)',
      firstYearCost: 'Gesamtkosten im 1. Jahr:',
      monthlyRunCost: 'Monatliche Betriebskosten:',
      annualCost: 'Jährliche laufende Kosten:',
      breakevenTitle: 'Amortisation: Selbstdruck vs. Dienstleister',
      breakevenDesc: 'Gegenüber Dienstleistern mit ~300 € bis 500 €/kg:',
      breakevenMonths: 'Voraussichtliche Amortisationszeit:',
    }
  },
  filamentCalc: {
    metaTitle: '3D-Drucker Filament Gewichts- & Längenrechner | 3DPrintingCostCalc.com',
    metaDescription: 'Filament-Gramm exakt in Meter umrechnen. Berechne Kosten pro Gramm und Kosten pro Meter für 1,75 mm und 2,85 mm PLA, PETG, ABS, TPU und Nylon.',
    metaKeywords: 'filament längenrechner, filament gewicht in meter umrechnen, wieviel meter hat 1kg pla, filament meterpreis 3d drucker',
    badge: 'Volumetrischer Physik-Konverter',
    heroTitle: '3D-Druck-Filament',
    heroGradient: 'Kosten- & Längenrechner',
    heroSubtitle: 'Rechne flexibel zwischen Spulenpreis, Gewicht in Gramm, Länge in Metern und Volumen in cm³ um. Ermittle die exakten Kosten pro Gramm und Meter für 1,75 mm und 2,85 mm Durchmesser.',
    faqs: [
      {
        question: "Wie viele Meter Filament sind auf einer 1-kg-Spule PLA?",
        answer: "Die Länge berechnet sich aus Masse, Dichte und Drahtquerschnitt: Länge = Masse ÷ (Dichte × π × Radius²). Bei Standard-PLA (1,75 mm Durchmesser, Dichte 1,24 g/cm³) beträgt die Gesamtlänge einer 1.000g-Spule etwa 332 bis 335 Meter."
      },
      {
        question: "Warum hat 2,85-mm-Filament weniger Meter pro Spule als 1,75-mm?",
        answer: "Die Querschnittsfläche wächst quadratisch mit dem Durchmesser. Ein 2,85-mm-Filament ist 2,65-mal dicker als ein 1,75-mm-Draht. Folglich liefert 1 kg 2,85-mm-PLA nur rund 125 Meter Länge, wobei das druckbare Bauteilvolumen pro Gramm identisch bleibt."
      }
    ],
    labels: {
      configTitle: 'Spulen- & Materialeinstellungen',
      selectPolymer: 'Polymer- / Filamenttyp:',
      customMat: '➕ Eigenes Material (Manuelle Eingabe)',
      density: 'Materialdichte (g/cm³):',
      diameter: 'Filamentdurchmesser:',
      spoolWeight: 'Spulen-Nettogewicht (Gramm):',
      spoolPrice: 'Kaufpreis der Spule (€):',
      resultsTitle: 'Volumen- & Einheitskosten-Ergebnisse',
      totalLengthMeters: 'Gesamte druckbare Filamentlänge:',
      costPerGram: 'Kosten pro Gramm:',
      costPerMeter: 'Kosten pro Meter:',
      costPerFoot: 'Kosten pro Fuß:',
      volumeCm3: 'Nutzbares Gesamt-Polymer-Volumen:',
    }
  },
  spoolCalc: {
    metaTitle: 'Leere Spulen Taragewicht-Datenbank & Restfilament | 3DPrintingCostCalc.com',
    metaDescription: 'Spule auf die Küchenwaage legen und exaktes Restfilament ermitteln. Über 40 Leergewichte für Bambu Lab, Polymaker, eSUN, Sunlu und Prusament.',
    metaKeywords: 'leergewicht spule bambu lab, taragewicht spule filament, wieviel filament noch auf spule, filament wiegen restmenge',
    badge: 'Spulen-Taragewicht-Datenbank',
    heroTitle: 'Spulen-Leergewicht (Tara)',
    heroGradient: '& Filament-Restmengen-Rechner',
    heroSubtitle: 'Lege deine angebrochene Spule einfach auf eine digitale Küchenwaage. Ziehe das Leergewicht des Herstellers ab, um das verbleibende Nettogewicht und Restmeter zu erfahren und nächtliche Fehldrucke zu verhindern.',
    faqs: [
      {
        question: "Wie viel wiegt eine leere Original-Spule von Bambu Lab?",
        answer: "Die originale wiederverwendbare 2-teilige PC-Kunststoffspule von Bambu Lab (mit RFID-Chip) wiegt ca. 212 Gramm (die hitzebeständige Polycarbonat-Version wiegt 248 g). Bei Refills mit Pappkern wiegt der Pappkern allein etwa 37 bis 45 Gramm."
      },
      {
        question: "Wie verhindere ich, dass mir mitten im Druck das Filament ausgeht?",
        answer: "Vor langen Druckjobs die Spule auf eine Küchenwaage legen. Hersteller in unserer Datenbank auswählen und das Leergewicht abziehen. Liegt das verbleibende Nettogewicht mindestens 15 bis 20 Gramm über der Slicer-Vorgabe, kann bedenkenlos gedruckt werden."
      }
    ],
    labels: {
      searchSpool: 'Hersteller und Spulentyp auswählen:',
      customTare: '➕ Eigene Tara (Manuelle Eingabe)',
      currentWeight: 'Gewogenes Bruttogewicht (Gramm):',
      tareWeight: 'Spulen-Leergewicht / Tara (Gramm):',
      resultsTitle: 'Tatsächlich verfügbare Restmenge',
      remainingGrams: 'Verbleibendes Netto-Filament:',
      remainingMeters: 'Geschätzte verbleibende Meter:',
      percentLeft: 'Verbleibender Spulenvorrat in Prozent:',
    }
  },
  amsCalc: {
    metaTitle: 'Bambu AMS Spülverlust- & Mehrfarbendruck-Rechner | 3DPrintingCostCalc.com',
    metaDescription: 'Berechne Spülabfall (Bambu Poop) und Spülturm-Verbrauch beim Mehrfarbendruck. Erfahre, wie Drucken mehrerer Kopien auf einer Druckplatte den Abfall um 90 % senkt.',
    metaKeywords: 'bambu ams abfall rechner, bambu lab poop rechner, mehrfarben 3d druck verlust, spülturm kosten berechnen',
    badge: 'Multi-Material Chargen-Ökonomie',
    heroTitle: 'Bambu AMS & Mehrfarbendruck',
    heroGradient: 'Spülverlust- & Kostenrechner',
    heroSubtitle: 'Ermittle exakt, wie viel Gramm und Euro durch Spülschacht und Abziehturm verloren gehen. Visualisiere, wie Serienfertigung auf einer Druckplatte den Spülabfall pro Stück drastisch minimiert.',
    faqs: [
      {
        question: "Warum entsteht beim Einzeldüsen-Mehrfarbendruck so viel Spülmüll?",
        answer: "Einzeldüsensysteme wie das Bambu Lab AMS müssen bei jedem Farbwechsel den vorherigen Farbton vollständig aus der Schmelzzone spülen, um Verfärbungen zu vermeiden. Bei einem Modell mit 500 Farbwechseln können so leicht 150 bis 300 Gramm Filament als Spülabfall anfallen."
      },
      {
        question: "Warum spart das Drucken mehrerer Kopien auf einer Platte enorm Material?",
        answer: "Farbwechsel erfolgen pro Schicht, nicht pro Objekt. Werden 10 identische Figuren gleichzeitig gedruckt, finden immer noch genau dieselben 200 Farbwechsel statt wie bei einer Einzelfigur. Der Gesamtspülmüll bleibt identisch, verteilt sich aber auf 10 Einheiten – der Müll pro Stück sinkt um 90 %."
      }
    ],
    labels: {
      configTitle: 'Parameter des Mehrfarben-Auftrags',
      totalSwaps: 'Gesamtzahl der Filamentwechsel laut Slicer:',
      flushVolume: 'Durchschnittlicher Spülverlust pro Wechsel (g):',
      modelGrams: 'Nettogewicht eines einzelnen Modells (g):',
      spoolPriceKg: 'Durchschnittlicher Filamentpreis (€/kg):',
      resultsTitle: 'Abfall- & Verlustkosten-Analyse',
      wasteWeight: 'Gesamtgewicht Spülreste & Abziehturm:',
      wasteCost: 'Finanzieller Verlust durch Spülmüll:',
      ratio: 'Verhältnis Abfall zu Bauteilgewicht:',
    }
  },
  resinCalc: {
    metaTitle: 'SLA / LCD Kunstharz 3D-Druck Kostenrechner | 3DPrintingCostCalc.com',
    metaDescription: 'Kosten für Harzdruck präzise berechnen: Preis pro mL UV-Resin, Ersparnis durch Aushöhlen (Hollowing), Isopropanol-Verschleiß, FEP-Folie und LCD-Lebensdauer.',
    metaKeywords: 'kunstharz 3d druck kosten, resin druck preis pro ml berechnen, sla 3d drucker kosten, fep folie abnutzung rechner',
    badge: 'UV-Photopolymer SLA / MSLA Rechner',
    heroTitle: 'SLA / LCD Photopolymer-Harz',
    heroGradient: 'Kosten- & Verbrauchsmaterialrechner',
    heroSubtitle: 'Kalkuliere Harzdrucke wissenschaftlich fundiert. Berücksichtige Flaschenpreis pro mL, Einsparungen durch Aushöhlen, Isopropanol-Reinigungsbäder, FEP-Folienverschleiß und die Abschreibung des Mono-LCD-Bildschirms.',
    faqs: [
      {
        question: "Was kostet ein Milliliter (mL) 3D-Druck-Harz?",
        answer: "Standard-UV-Resin 405nm (ca. 25 € bis 35 € pro 1.000g-Flasche / ~900 mL) kostet etwa 0,03 € bis 0,04 € pro mL. Zähe ABS-ähnliche Harze kosten ca. 0,05 € bis 0,08 € pro mL, zahnmedizinische Spezialharze über 0,15 € pro mL."
      },
      {
        question: "Wie viel Harz spart das Aushöhlen von Modellen?",
        answer: "Das Aushöhlen auf 1,5 mm bis 2,0 mm Wandstärke spart bei mittleren und großen Modellen 50 % bis 75 % Harz. Ablaufbohrungen an der Unterseite sind zwingend erforderlich, um Saugglockeneffekte zu verhindern und unverbrauchtes Harz abfließen zu lassen."
      }
    ],
    labels: {
      configTitle: 'Harz- & Verschleißparameter',
      bottlePrice: 'Preis der Harzflasche (€):',
      printMl: 'Bauteilvolumen laut Slicer (mL):',
      ipaCost: 'IPA-Reinigungsalkohol & Handschuhe (€):',
      screenDeprec: 'Verschleiß FEP-Folie & LCD-Display (€):',
      resultsTitle: 'Aufschlüsselung der Bauteilkosten',
      rawResinCost: 'Reine Kunstharz-Materialkosten:',
      consumablesCost: 'Reinigungschemie & Display-/Folienverschleiß:',
      totalJobCost: 'Gesamte Produktionsstückkosten:',
    }
  },
  legal: {
    privacyTitle: 'Datenschutzerklärung',
    privacyDesc: 'Alle 3D-Dateien (.stl, .3mf, .gcode) werden zu 100 % lokal in deinem Browser verarbeitet, ohne jeglichen Server-Upload.',
    privacyBadge: 'Null-Upload Datenschutzstandard',
    privacyGuarTitle: 'Grundlegendes Datenschutzversprechen',
    privacyGuarDesc: '3DPrintingCostCalc.com ist ein vollständig zustandsloses (stateless) clientseitiges Web-Tool. Beim Auswählen einer Datei (.stl, .3mf, .gcode) erfolgt die Analyse der Dreiecksnetze und Druckpfade komplett im flüchtigen Arbeitsspeicher deines Browsers mittels JavaScript. Es werden zu keinem Zeitpunkt 3D-Modelle, Konstruktionsdateien, geistiges Eigentum oder G-Codes an unsere Server oder Dritte übertragen.',
    sec1Title: '1. Serverlose Inspektionsarchitektur',
    sec1Desc: 'Die Dekodierung erfolgt ausschließlich im lokalen RAM. Sobald du den Browser-Tab aktualisierst oder schließt, werden alle Koordinaten und Dateipuffer restlos gelöscht.',
    sec2Title: '2. Personenbezogene Daten, die wir nicht erfassen',
    sec2Desc: 'Es ist keine Registrierung erforderlich. Wir erfassen und speichern keine Namen, E-Mail-Adressen, Zahlungsdaten oder geschützte Kundendesigns.',
    sec3Title: '3. Einstellungen im lokalen Speicher',
    sec3Desc: 'Wir speichern lediglich dein bevorzugtes Farbthema (Dunkel/Hell) sowie deinen Standard-Stromtarif im localStorage deines Browsers.',

    termsTitle: 'Allgemeine Geschäftsbedingungen (AGB)',
    termsDesc: 'Nutzungsbedingungen, technische Haftungsausschlüsse und Richtlinien für 3DPrintingCostCalc.com.',
    termsBadge: 'Ingenieurtechnische Nutzungsbedingungen',
    termsSummaryTitle: 'Zusammenfassung der Vereinbarung',
    termsSummaryDesc: '3DPrintingCostCalc.com stellt kostenlose ingenieurtechnische Schätzungswerkzeuge für Maker, Druckfarmen und Unternehmen bereit. Alle Berechnungen sind theoretische Richtwerte und vor Serienfertigung messtechnisch zu validieren.',
    termsSec1Title: '1. Zustimmung zu den Bedingungen',
    termsSec1Desc: 'Mit der Nutzung der Website und der Rechner erkennst du diese Bedingungen und die Datenschutzerklärung uneingeschränkt an.',
    termsSec2Title: '2. Physikalischer Toleranz- & Haftungsausschluss',
    termsSec2Desc: 'Dichteschwankungen des Filaments (±3 bis 5 %), Beschleunigungsprofile des Slicers, Infill-Geometrien und Raumtemperaturen führen zu geringfügigen Abweichungen in der Realität. Testdrucke sollten auf kalibrierten Waagen nachgewogen werden.',
    termsSec3Title: '3. Gewerbliche Nutzung der Kalkulationen',
    termsSec3Desc: 'Du darfst alle mit unseren Tools erstellten Berechnungen und Preisaufschlüsselungen uneingeschränkt für Kundenangebote und kommerzielle Preiskalkulationen verwenden.',

    contactTitle: 'Kontakt & Feedback',
    contactSubtitle: 'Wir freuen uns über Feedback, gewogene Leerspulen-Gewichte und Vorschläge für neue Druckermodelle.',
    contactCardTitle: 'Technischen Support kontaktieren',
    contactCardDesc: 'Hast du Fragen zu unseren Berechnungsformeln? Möchtest du ein neues Druckermodell vorschlagen oder das Taragewicht einer leeren Spule übermitteln?',
    contactEmailLabel: 'Offizielle Support-E-Mail:',
    contactTurnaround: 'Antwortzeit: Werktags üblicherweise innerhalb von 24 bis 48 Stunden.',
    contactSuggestTitle: 'Möchtest du ein Spulengewicht oder einen Drucker einreichen?',
    contactSuggestDesc: 'Bitte nenne uns bei Hardwaredaten Hersteller, genaue Modellbezeichnung, das auf der Digitalwaage gewogene Leergewicht in Gramm und das Spulenmaterial (Pappe, Kunststoff etc.).'
  },
  printerProfile: {
    title: (b, m) => `${b} ${m} 3D-Druck Kostenrechner & Stromkosten-Guide | 3DPrintingCostCalc.com`,
    description: (b, m, w) => `Berechne exakte Druckkosten für ${b} ${m}. Durchschnittlich ${w}W Leistungsaufnahme, Maschinenabschreibung und Filamentverbrauch. Kostenlos und lokal.`,
    badge: 'Maschinenprofil & TCO-Analyse',
    heroH1: (b, m) => `Druckkosten & Stromverbrauch ${b} ${m}`,
    subtitle: (b, m, v, msrp) => `Individuelle Kostenberechnung für ${b} ${m} (${v} mm Bauraum, ca. ${msrp} € UVP). Berechne Filament, kWh und stündliche Abschreibung.`,
    smallPart: 'Kleine Miniatur (50g)',
    medPart: 'Mittleres Funktionsteil (150g)',
    largePart: 'Großer Prototyp / Helm (500g)',
    specsTitle: 'Technische Hardware-Spezifikationen',
    hardwareMsrp: 'Hardware-UVP:',
    avgPower: 'Durchschnittsleistung (PLA):',
    lifespan: 'Auslegungs-Betriebslebensdauer:',
    buildVolume: 'Maximaler Bauraum:',
    benchmarksTitle: 'Typische Druckszenarien im Kostenvergleich',
    colJob: 'Druckauftrag',
    colFilament: 'Filament (g)',
    colTime: 'Dauer (h)',
    colMatCost: 'Material',
    colElecCost: 'Strom',
    colMachCost: 'Abschreibung',
    colTotalCost: 'Gesamtkosten',
    faqs: (p) => [
      {
        question: `Wie viel Strom verbraucht der ${p.brand} ${p.model}?`,
        answer: `Der ${p.brand} ${p.model} verbraucht im Schnitt ca. ${p.avgWattsPla} Watt beim Drucken von Standard-PLA mit 55 °C Heizbett. Bei aktuellen Stromtarifen kostet eine Stunde Drucken weniger als 0,05 €.`
      },
      {
        question: `Wie hoch ist der stündliche Maschinenverschleiß des ${p.brand} ${p.model}?`,
        answer: `Bei einem Kaufpreis von ca. ${p.msrpUsd} € und einer Betriebsdauer von ${p.defaultLifespanHours.toLocaleString()} Stunden liegt die reine Hardware-Abschreibung bei ca. ${(p.msrpUsd / p.defaultLifespanHours).toFixed(2)} € pro Druckstunde.`
      }
    ]
  },
  materialProfile: {
    title: (n) => `${n} Kosten pro Gramm, Dichte & Slicer-Guide | 3DPrintingCostCalc.com`,
    description: (n, d) => `Technisches Handbuch & Kostenübersicht für ${n} Filament. Dichte ${d} g/cm³, Meter pro Spule und optimale Extrusionstemperaturen.`,
    badge: 'Polymer-Datenblatt & Wirtschaftlichkeit',
    heroH1: (n) => `Leitfaden Kosten & Dichte für ${n}`,
    subtitle: (n, d) => `Technische Kennwerte und Kostenkalkulation für ${n} Filament mit einer Dichte von ${d} g/cm³.`,
    specsTitle: 'Physikalische Eigenschaften & Druckparameter',
    density: 'Polymer-Dichte:',
    nozzleTemp: 'Empfohlene Düsentemperatur:',
    bedTemp: 'Empfohlene Betttemperatur:',
    chamberReq: 'Geschlossener Bauraum erforderlich:',
    costPerKg: 'Durchschnittlicher Marktpreis / kg:',
    metersPerKg: 'Meter pro 1-kg-Spule (1,75 mm):',
    shrinkage: 'Volumetrische Schrumpfung:',
    faqs: (m) => [
      {
        question: `Was kostet 1 kg ${m.name} Filament?`,
        answer: `Der Durchschnittspreis für eine 1-kg-Spule ${m.name} in Standardqualität liegt bei etwa ${m.defaultPricePerKgUsd.toFixed(2)} € (ca. ${(m.defaultPricePerKgUsd / 1000).toFixed(3)} € pro Gramm).`
      },
      {
        question: `Welche Dichte hat ${m.name} und wie viele Meter sind auf der Spule?`,
        answer: `${m.name} hat eine Dichte von ${m.densityGcm3} g/cm³. Bei Standard-1,75-mm-Draht entspricht 1 kg ca. ${(1000 / (m.densityGcm3 * 0.02405) / 100).toFixed(1)} Metern.`
      }
    ]
  }
};
