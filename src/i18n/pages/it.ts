import type { PagesTranslationBundle } from './types';

export const itPages: PagesTranslationBundle = {
  printerTco: {
    metaTitle: 'Calcolatore Costo Stampante 3D e TCO di Proprietà | 3DPrintingCostCalc.com',
    metaDescription: 'Calcola il vero costo di acquisto e utilizzo di una stampante 3D. Confronta prezzo macchina, spesa elettrica mensile, usura ugelli e ammortamento rispetto ai service online.',
    metaKeywords: 'costo stampante 3d, elettricita stampante 3d, tco stampante 3d, ammortamento stampante 3d, calcolo costo pezzo 3d',
    badge: 'Motore TCO Hardware ed Energia',
    heroTitle: 'Quanto Costa Davvero',
    heroGradient: 'Comprare e Usare una Stampante 3D?',
    heroSubtitle: 'Confronta prezzo iniziale della macchina, consumo elettrico continuo, bobine di filamento e usura degli ugelli. Calcola l\'esatto periodo di ammortamento rispetto ai service di stampa esterni.',
    faqs: [
      {
        question: "Quanto costa una stampante 3D nel 2026?",
        answer: "Le stampanti 3D consumer si suddividono in 3 fasce principali: Entry-level economica (Bambu Lab A1 Mini, Ender-3 V3) tra 199 € e 299 €. Fascia media CoreXY chiusa ad alta velocità (Bambu Lab P1S, K1C) tra 499 € e 849 €. Livello professionale multi-materiale (Bambu X1-Carbon, Prusa XL) da 1.199 € fino a oltre 3.999 €."
      },
      {
        question: "Quanto costa l'elettricità per una stampante 3D al mese?",
        answer: "Per un utilizzo medio di 120-150 ore al mese, il consumo si aggira tra 15 e 35 kWh. Con una tariffa media di 0,28 €/kWh, la spesa elettrica per stampare PLA va da 4,20 € a 9,80 € al mese. Per ABS con piatto a 100 °C, il costo mensile è tra 10 € e 18 €."
      },
      {
        question: "Cosa si intende per costo totale di proprietà (TCO) di una stampante 3D?",
        answer: "Il TCO comprende il prezzo di acquisto dell'hardware più il filamento consumato, le bollette elettriche, gli ugelli di ricambio (acciaio temperato o ottone), i piatti PEI e la manutenzione periodica (grasso, cinghie). Per una stampante da 600 € che consuma 12 bobine all'anno, il TCO del primo anno è di circa 940 €."
      },
      {
        question: "Quanti pezzi bisogna stampare per ammortizzare l'acquisto rispetto a un service?",
        answer: "I service commerciali fanno pagare tra 20 € e 45 € per un pezzo da 100g in PLA, inclusi costi di gestione e spedizione. Stampare lo stesso pezzo a casa costa tra 2,50 € e 3,50 € di materiale ed energia. Con una stampante da 400 €, l'investimento si ripaga già dopo 12-15 pezzi medi."
      }
    ],
    labels: {
      inputsTitle: 'Parametri Hardware e Utilizzo',
      selectPrinter: 'Seleziona Modello di Stampante:',
      customPrinter: '➕ Stampante Personalizzata (Inserimento manuale)',
      upfrontPrice: 'Prezzo di Acquisto della Macchina (€):',
      powerDraw: 'Potenza Assorbita Media (Watt):',
      monthlyHours: 'Ore di Stampa Mensili:',
      spoolsMonth: 'Bobine Usate al Mese (1 kg):',
      spoolCost: 'Prezzo Medio di una Bobina (€):',
      elecRate: 'Tariffa Elettrica (€/kWh):',
      lifespan: 'Durata Stimata Macchina (Anni):',
      maintenance: 'Budget Annuo Ricambi e Manutenzione (€):',
      outsourcedCost: 'Prezzo Equivalente da Service (€/kg):',
      resultsTitle: 'Composizione del Costo Totale di Proprietà (TCO)',
      firstYearCost: 'Costo Complessivo Primo Anno:',
      monthlyRunCost: 'Costo Operativo Mensile:',
      annualCost: 'Costo Operativo Annuo:',
      breakevenTitle: 'Punto di Pareggio: Acquisto vs Service',
      breakevenDesc: 'Rispetto a service commerciali che fatturano ~350 € - 500 €/kg:',
      breakevenMonths: 'Tempo Stimato di Ammortamento:',
    }
  },
  filamentCalc: {
    metaTitle: 'Calcolatore Peso in Lunghezza Filamento 3D | 3DPrintingCostCalc.com',
    metaDescription: 'Converti i grammi di filamento in metri di filo. Calcola il costo al grammo e al metro per filamenti da 1.75mm e 2.85mm in PLA, PETG, ABS, TPU e Nylon.',
    metaKeywords: 'calcolatore lunghezza filamento, peso in metri filamento 3d, quanti metri ha 1kg pla, costo metro filamento 3d',
    badge: 'Convertitore di Fisica Volumetrica',
    heroTitle: 'Filamento per Stampa 3D',
    heroGradient: 'Calcolatore Costo e Lunghezza',
    heroSubtitle: 'Converti con accuratezza tra prezzo della bobina, peso in grammi, metratura e volume in cm³. Calcola il costo esatto al grammo e al metro nei diametri 1.75 mm e 2.85 mm.',
    faqs: [
      {
        question: "Quanti metri di filamento ci sono in una bobina da 1 kg di PLA?",
        answer: "La lunghezza si calcola dalla massa, dalla densità e dalla sezione: Lunghezza = Massa ÷ (Densità × π × Raggio²). Per filamento standard PLA da 1.75 mm con densità di 1.24 g/cm³, una bobina da 1.000 g misura circa 332-335 metri."
      },
      {
        question: "Perché il filamento da 2.85 mm ha meno metri rispetto all'1.75 mm?",
        answer: "La sezione cresce con il quadrato del diametro. Un filamento da 2.85 mm è 2.65 volte più spesso dell'1.75 mm. Di conseguenza 1 kg di PLA da 2.85 mm misura solo circa 125 metri, ma il volume utile stampato per grammo è esattamente lo stesso."
      }
    ],
    labels: {
      configTitle: 'Configurazione Bobina e Materiale',
      selectPolymer: 'Tipo di Polimero / Filamento:',
      customMat: '➕ Materiale Personalizzato (Inserimento manuale)',
      density: 'Densità Fisica del Materiale (g/cm³):',
      diameter: 'Diametro del Filamento:',
      spoolWeight: 'Peso Netto della Bobina (grammi):',
      spoolPrice: 'Prezzo di Acquisto della Bobina (€):',
      resultsTitle: 'Risultati Volumetrici e Costi Unitari',
      totalLengthMeters: 'Lunghezza Totale Stampabile:',
      costPerGram: 'Costo per Grammo:',
      costPerMeter: 'Costo per Metro:',
      costPerFoot: 'Costo per Piede:',
      volumeCm3: 'Volume Totale di Polimero Utile:',
    }
  },
  spoolCalc: {
    metaTitle: 'Database Peso Tara Bobine Vuote e Filamento Residuo | 3DPrintingCostCalc.com',
    metaDescription: 'Pesa la bobina sulla bilancia da cucina per conoscere il filamento rimasto. Oltre 40 tare: Bambu Lab, Polymaker, eSUN, Sunlu, Prusament.',
    metaKeywords: 'peso bobina vuota bambu lab, tara bobina filamento, come sapere quanto filamento rimane, pesare bobina stampa 3d',
    badge: 'Indice delle Tare di Bobine Vuote',
    heroTitle: 'Verifica Tara Bobine Vuote',
    heroGradient: 'e Filamento Residuo su Bilancia',
    heroSubtitle: 'Appoggia la bobina iniziata su una bilancia digitale da cucina. Sottrai la tara del produttore per conoscere i grammi e i metri esatti di filamento utile ed evitare che il filo finisca nel cuore della notte.',
    faqs: [
      {
        question: "Quanto pesa una bobina vuota originale Bambu Lab?",
        answer: "La bobina riutilizzabile originale Bambu Lab in plastica PC (in 2 parti con chip RFID) pesa circa 212 grammi (la versione in policarbonato per alte temperature pesa 248 g). Se usi una ricarica con nucleo di cartone, l'anima di cartone da sola pesa circa 37-45 grammi."
      },
      {
        question: "Come evitare che il filamento si esaurisca durante una stampa lunga?",
        answer: "Prima di lanciare una stampa impegnativa, pesa la bobina intera sulla bilancia. Seleziona il produttore nel nostro archivio per sottrarre la tara. Se il peso netto rimasto supera la stima dello slicer di almeno 15-20 grammi, puoi avviare la stampa in tutta tranquillità."
      }
    ],
    labels: {
      searchSpool: 'Seleziona Produttore e Modello Bobina:',
      customTare: '➕ Tara Personalizzata (Inserimento manuale)',
      currentWeight: 'Lettura Lorda Bilancia (grammi):',
      tareWeight: 'Tara della Bobina Vuota (grammi):',
      resultsTitle: 'Filamento Reale Disponibile',
      remainingGrams: 'Peso Netto di Filamento Rimasto:',
      remainingMeters: 'Metri Utili Stimati:',
      percentLeft: 'Percentuale Rimanente sulla Bobina:',
    }
  },
  amsCalc: {
    metaTitle: 'Calcolatore Scarto di Spurgo Bambu AMS e Multicolore | 3DPrintingCostCalc.com',
    metaDescription: 'Calcola peso e costo dello spurgo di filamento (feci Bambu) e torre di innesco. Scopri come la stampa in lotti sullo stesso piatto taglia lo scarto del 90%.',
    metaKeywords: 'calcolatore scarto ams bambu, feci bambu lab spurgo, costo stampa 3d multicolore, torre di innesco ams',
    badge: 'Economia di Lotto Multimateriale',
    heroTitle: 'Bambu AMS e Multicolore',
    heroGradient: 'Calcolatore Scarto di Spurgo e Costi',
    heroSubtitle: 'Misura con esattezza grammi ed euro gettati nello scivolo di spurgo e nella torre di pulizia. Guarda come stampare più pezzi contemporaneamente distribuisce lo scarto massimizzando i tuoi guadagni.',
    faqs: [
      {
        question: "Perché la stampa 3D multicolore a ugello singolo genera così tanti scarti?",
        answer: "I sistemi a singolo ugello (come il Bambu Lab AMS) devono spurgare completamente il polimero fuso del colore precedente prima di estrudere la nuova tinta per evitare sbavature. Una stampa con 500 cambi colore può facilmente gettare via tra 150g e 300g di materiale."
      },
      {
        question: "Perché stampare più copie contemporaneamente riduce lo scarto?",
        answer: "Il cambio colore avviene per strato (layer), non per singolo pezzo. Se per una statuetta servono 200 cambi, stamparne 10 sullo stesso piatto richiederà sempre e solo 200 cambi in totale! Lo spurgo complessivo rimane identico ma viene ripartito su 10 pezzi, riducendo lo scarto per pezzo del 90%."
      }
    ],
    labels: {
      configTitle: 'Parametri del Lavoro Multicolore',
      totalSwaps: 'Numero Totale di Cambi Colore nello Slicer:',
      flushVolume: 'Spurgo Medio per Cambio (g):',
      modelGrams: 'Peso Netto di un Singolo Modello (g):',
      spoolPriceKg: 'Prezzo Medio del Filamento (€/kg):',
      resultsTitle: 'Analisi dello Scarto e Costi',
      wasteWeight: 'Peso Totale Spurghi + Torre di Innesco:',
      wasteCost: 'Costo del Filamento Finito nello Scivolo:',
      ratio: 'Rapporto Scarto / Peso del Pezzo:',
    }
  },
  resinCalc: {
    metaTitle: 'Calcolatore Costo Stampa Resina SLA / LCD | 3DPrintingCostCalc.com',
    metaDescription: 'Calcola il costo di stampa a resina liquida: spesa al mL, risparmio con svuotamento modelli (hollowing), alcool isopropilico IPA, pellicola FEP e durata schermo LCD.',
    metaKeywords: 'costo stampa resina 3d, prezzo al ml resina sla, calcolare costo resina lcd, usura pellicola fep resina',
    badge: 'Motore Fotopolimero SLA / MSLA',
    heroTitle: 'Resina SLA / LCD',
    heroGradient: 'Calcolatore di Costo e Consumabili',
    heroSubtitle: 'Quantifica scientificamente il costo di produzione in resina fotopolimero. Considera prezzo a flacone per mL, risparmio con svuotamento, alcool isopropilico di lavaggio, usura film FEP e ammortamento dello schermo LCD UV.',
    faqs: [
      {
        question: "Quanto costa un millilitro (mL) di resina per stampante 3D?",
        answer: "Una resina standard 405nm (circa 25 € - 35 € per flacone da 1.000g / ~900 mL) costa circa 0,03 € - 0,04 € per mL. Le resine ad alta tenacità simil-ABS costano tra 0,05 € e 0,08 € per mL, mentre le resine dentali superano 0,15 € per mL."
      },
      {
        question: "Quanta resina si risparmia svuotando (hollowing) un modello?",
        answer: "Svuotare una miniatura con uno spessore di parete di 1.5mm - 2.0mm riduce il consumo di resina dal 50% al 75% nei modelli medi e grandi. Ricordati sempre di praticare fori di drenaggio alla base per evitare l'effetto ventosa e fare defluire la resina liquida intrappolata."
      }
    ],
    labels: {
      configTitle: 'Parametri Resina e Usura Macchina',
      bottlePrice: 'Prezzo del Flacone di Resina (€):',
      printMl: 'Volume del Modello nello Slicer (mL):',
      ipaCost: 'Solvente Alcool IPA e Guanti (€):',
      screenDeprec: 'Usura Film FEP e Schermo LCD (€):',
      resultsTitle: 'Dettaglio Costo Pezzo in Resina',
      rawResinCost: 'Costo Netto Resina Fotopolimero:',
      consumablesCost: 'Lavaggi Chimici e Ammortamento Schermo/FEP:',
      totalJobCost: 'Costo Globale di Produzione Unitaria:',
    }
  },
  legal: {
    privacyTitle: 'Informativa sulla Privacy',
    privacyDesc: 'Tutti i file 3D (.stl, .3mf, .gcode) vengono elaborati al 100% in locale nel tuo browser, senza alcun caricamento su server.',
    privacyBadge: 'Garanzia di Privacy Senza Upload',
    privacyGuarTitle: 'Impegno Fondamentale per la Privacy',
    privacyGuarDesc: '3DPrintingCostCalc.com è un\'applicazione web completamente priva di stato (stateless) eseguita sul lato client. Quando trascini o selezioni un file (.stl, .3mf, .gcode), l\'analisi geometrica avviene nella memoria volatile del tuo browser tramite JavaScript. Nessun modello 3D, file CAD, proprietà intellettuale o percorso G-code viene mai trasmesso ai nostri server o a terze parti.',
    sec1Title: '1. Architettura di Ispezione Locale Senza Server',
    sec1Desc: 'L\'elaborazione avviene esclusivamente nella memoria RAM locale. Non appena ricarichi o chiudi la scheda, tutte le coordinate e i dati del modello vengono eliminati per sempre dalla memoria.',
    sec2Title: '2. Dati Personali Non Raccolti',
    sec2Desc: 'Nessuna registrazione o login richiesti. Non raccogliamo né conserviamo nomi, email, dati bancari o progetti commerciali dei clienti.',
    sec3Title: '3. Preferenze nel Salvataggio Locale',
    sec3Desc: 'Memorizziamo unicamente le tue preferenze grafiche (Tema Scuro / Chiaro) e la tua tariffa elettrica abituale nel localStorage del tuo dispositivo.',

    termsTitle: 'Termini e Condizioni di Servizio',
    termsDesc: 'Termini di utilizzo, dichiarazioni di tolleranza ingegneristica e accordi per gli utenti di 3DPrintingCostCalc.com.',
    termsBadge: 'Condizioni Tecniche e Accordo Utente',
    termsSummaryTitle: 'Sintesi dell\'Accordo',
    termsSummaryDesc: '3DPrintingCostCalc.com offre strumenti gratuiti di stima ingegneristica per maker, farm di stampa 3D e aziende. I calcoli sono stime teoriche che devono essere sempre verificate su attrezzature fisiche calibrate.',
    termsSec1Title: '1. Accettazione dei Termini',
    termsSec1Desc: 'L\'accesso o l\'uso del sito web implica l\'accettazione integrale di questi termini e dell\'informativa sulla privacy.',
    termsSec2Title: '2. Tolleranze Fisiche e Limitazione di Responsabilità',
    termsSec2Desc: 'Le fluttuazioni di densità del filamento (±3-5%), i profili di accelerazione dello slicer, le geometrie di riempimento e la temperatura ambientale generano leggere variazioni rispetto alla realtà. Si raccomanda di verificare i pezzi campione su bilance di precisione.',
    termsSec3Title: '3. Utilizzo Commerciale dei Calcoli',
    termsSec3Desc: 'Sei pienamente libero di impiegare i risultati, i preventivi e i dati generati dai nostri calcolatori per formulare offerte commerciali e stabilire i prezzi di vendita per i tuoi clienti.',

    contactTitle: 'Contatti e Supporto',
    contactSubtitle: 'Accogliamo volentieri suggerimenti della community, nuove stampanti 3D e misurazioni di bobine vuote.',
    contactCardTitle: 'Contatta il Team di Sviluppo',
    contactCardDesc: 'Hai dubbi sulle formule matematiche utilizzate? Vuoi richiedere l\'inserimento di una nuova stampante 3D o inviarci il peso di una bobina vuota misurato sulla tua bilancia?',
    contactEmailLabel: 'Email di Supporto Ufficiale:',
    contactTurnaround: 'Tempi di risposta: Di norma entro 24-48 ore lavorative.',
    contactSuggestTitle: 'Vuoi Suggerire una Tara o una Nuova Macchina?',
    contactSuggestDesc: 'Quando invii dati tecnici, indica produttore, modello preciso, peso esatto in grammi misurato su bilancia digitale e materiale della bobina (cartone, plastica, ecc.).'
  },
  printerProfile: {
    title: (b, m) => `Calcolatore Costo Stampa ed Elettricità ${b} ${m} | 3DPrintingCostCalc.com`,
    description: (b, m, w) => `Calcola il costo esatto di stampa per ${b} ${m}. Potenza media ${w}W, ammortamento hardware e filamento. Strumento 100% gratuito e locale.`,
    badge: 'Profilo Macchina e Analisi TCO',
    heroH1: (b, m) => `Costo di Stampa ed Elettricità ${b} ${m}`,
    subtitle: (b, m, v, msrp) => `Stima personalizzata per ${b} ${m} (Volume di stampa ${v} mm, prezzo indicativo ${msrp} €). Calcola filamento, kWh e ammortamento orario.`,
    smallPart: 'Miniatura Piccola (50g)',
    medPart: 'Pezzo Funzionale Medio (150g)',
    largePart: 'Prototipo Grande / Casco (500g)',
    specsTitle: 'Specifiche Tecniche Hardware',
    hardwareMsrp: 'Prezzo Consigliato Macchina:',
    avgPower: 'Potenza Media (PLA):',
    lifespan: 'Vita Operativa Stimata:',
    buildVolume: 'Volume Massimo di Stampa:',
    benchmarksTitle: 'Scenari Tipici di Stampa',
    colJob: 'Tipo di Lavoro',
    colFilament: 'Filamento (g)',
    colTime: 'Tempo (h)',
    colMatCost: 'Materiale',
    colElecCost: 'Elettricità',
    colMachCost: 'Ammortamento',
    colTotalCost: 'Costo Totale',
    faqs: (p) => [
      {
        question: `Quanta elettricità consuma la ${p.brand} ${p.model}?`,
        answer: `La ${p.brand} ${p.model} consuma mediamente ${p.avgWattsPla} Watt stampando PLA standard con piatto a 55 °C. Con le attuali tariffe dell'energia, 1 ora di stampa costa meno di 0,04 €.`
      },
      {
        question: `Qual è il costo orario di ammortamento della ${p.brand} ${p.model}?`,
        answer: `Con un prezzo di acquisto di circa ${p.msrpUsd} € e una vita utile stimata di ${p.defaultLifespanHours.toLocaleString()} ore di stampa, l'ammortamento della macchina è di circa ${(p.msrpUsd / p.defaultLifespanHours).toFixed(2)} € per ogni ora di lavoro.`
      }
    ]
  },
  materialProfile: {
    title: (n) => `Guida Costo al Grammo, Densità e Parametri per ${n} | 3DPrintingCostCalc.com`,
    description: (n, d) => `Manuale tecnico ed economico per filamento ${n}. Densità fisica ${d} g/cm³, metri per bobina e temperature ottimali di estrusione.`,
    badge: 'Scheda Tecnica Polimero e Costi',
    heroH1: (n) => `Guida Costo e Densità per ${n}`,
    subtitle: (n, d) => `Riferimento tecnico e calcolo costi per filamento ${n} con densità di ${d} g/cm³.`,
    specsTitle: 'Proprietà Fisiche e Parametri Consigliati',
    density: 'Densità del Polimero:',
    nozzleTemp: 'Temperatura Ugello Consigliata:',
    bedTemp: 'Temperatura Piatto Consigliata:',
    chamberReq: 'Camera Chiusa Necessaria:',
    costPerKg: 'Prezzo Medio di Mercato / kg:',
    metersPerKg: 'Metri per Bobina da 1 kg (1.75 mm):',
    shrinkage: 'Ritiro Volumetrico:',
    faqs: (m) => [
      {
        question: `Quanto costa 1 kg di filamento ${m.name}?`,
        answer: `Il prezzo medio per una bobina da 1 kg di filamento ${m.name} di buona qualità è di circa ${m.defaultPricePerKgUsd.toFixed(2)} € (pari a circa ${(m.defaultPricePerKgUsd / 1000).toFixed(3)} € al grammo).`
      },
      {
        question: `Qual è la densità di ${m.name} e quanti metri rende una bobina?`,
        answer: `Il polimero ${m.name} ha una densità di ${m.densityGcm3} g/cm³. Nel diametro standard da 1.75 mm, 1 kg corrisponde a circa ${(1000 / (m.densityGcm3 * 0.02405) / 100).toFixed(1)} metri.`
      }
    ]
  }
};
