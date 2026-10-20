import type { PagesTranslationBundle } from './types';

export const frPages: PagesTranslationBundle = {
  printerTco: {
    metaTitle: 'Calculateur Coût Imprimante 3D & Estimation TCO | 3DPrintingCostCalc.com',
    metaDescription: 'Calculez le coût réel d\'achat et d\'utilisation d\'une imprimante 3D. Comparez le prix d\'achat, l\'électricité mensuelle, la maintenance et le seuil de rentabilité face à la sous-traitance.',
    metaKeywords: 'coût imprimante 3d, électricité imprimante 3d, tco imprimante 3d, rentabilité impression 3d, calcul prix pièce 3d',
    badge: 'Moteur TCO Matériel & Énergie',
    heroTitle: 'Combien Coûte Réellement une',
    heroGradient: 'Imprimante 3D à Acheter et Faire Tourner ?',
    heroSubtitle: 'Comparez le prix du matériel, la consommation électrique continue, les bobines de filament et l\'usure des buses. Déterminez votre seuil de rentabilité exact face aux services d\'impression en ligne.',
    faqs: [
      {
        question: "Combien coûte une imprimante 3D en 2026 ?",
        answer: "Les imprimantes 3D grand public se divisent en 3 gammes : Entrée de gamme économique (Bambu Lab A1 Mini, Creality Ender-3 V3) entre 199 € et 299 €. Milieu de gamme CoreXY rapide fermé (Bambu Lab P1S, K1C) entre 499 € et 849 €. Professionnel multi-matière (Bambu X1-Carbon, Prusa XL) entre 1 199 € et plus de 3 999 €."
      },
      {
        question: "Combien coûte l'électricité mensuelle pour une imprimante 3D ?",
        answer: "Pour 120 à 150 heures de fonctionnement par mois, la consommation se situe entre 15 et 35 kWh. Avec le tarif moyen européen (0,25 €/kWh), le coût d'électricité pour du PLA varie de 3,75 € à 8,75 € par mois. Pour l'ABS avec plateau à 100 °C, comptez 10 € à 18 € par mois."
      },
      {
        question: "Qu'est-ce que le coût total de possession (TCO) d'une imprimante 3D ?",
        answer: "Le TCO comprend l'achat de la machine plus les consommables (filaments), l'électricité, le remplacement des buses (acier trempé ou laiton), les plaques PEI et la maintenance (graisse, courroies). Pour un maker utilisant 12 bobines par an sur une machine à 600 €, le coût de possession de première année est d'environ 950 €."
      },
      {
        question: "Combien de pièces faut-il imprimer pour rentabiliser l'achat face à un sous-traitant ?",
        answer: "Les services d'impression commerciaux facturent généralement entre 25 € et 50 € pour une pièce PLA standard de 100 g. Imprimer cette même pièce chez soi coûte environ 2,50 € à 3,50 € de matière et d'électricité. Sur une machine à 400 €, l'achat est amorti dès 12 à 15 pièces moyennes imprimées."
      }
    ],
    labels: {
      inputsTitle: 'Paramètres Matériels & Utilisation',
      selectPrinter: 'Sélectionner un Modèle d\'Imprimante :',
      customPrinter: '➕ Imprimante Personnalisée (Saisie manuelle)',
      upfrontPrice: 'Prix d\'Achat de la Machine (€) :',
      powerDraw: 'Puissance Absorbée Moyenne (Watts) :',
      monthlyHours: 'Heures d\'Impression par Mois :',
      spoolsMonth: 'Bobines Utilisées par Mois (1 kg) :',
      spoolCost: 'Prix Moyen d\'une Bobine (€) :',
      elecRate: 'Tarif Électricité (€/kWh) :',
      lifespan: 'Durée de Vie Estimée (Années) :',
      maintenance: 'Budget Entretien & Pièces d\'Usure (€/an) :',
      outsourcedCost: 'Prix Équivalent en Sous-Traitance (€/kg) :',
      resultsTitle: 'Structure du Coût Total de Possession (TCO)',
      firstYearCost: 'Coût Global Première Année :',
      monthlyRunCost: 'Coût d\'Exploitation Mensuel :',
      annualCost: 'Coût de Fonctionnement Annuel :',
      breakevenTitle: 'Seuil de Rentabilité Achat vs Sous-Traitance',
      breakevenDesc: 'Face aux prestataires commerciaux facturant ~350 € à 500 €/kg :',
      breakevenMonths: 'Délai d\'Amortissement Prévu :',
    }
  },
  filamentCalc: {
    metaTitle: 'Calculateur Poids en Longueur Filament 3D | 3DPrintingCostCalc.com',
    metaDescription: 'Convertissez le poids de filament en mètres. Calculez le coût au gramme et au mètre pour filaments 1,75 mm et 2,85 mm PLA, PETG, ABS, TPU et Nylon.',
    metaKeywords: 'calculateur longueur filament, poids en metres filament 3d, 1kg pla combien de metres, prix metre filament',
    badge: 'Convertisseur Physique Volumétrique',
    heroTitle: 'Filament Imprimante 3D',
    heroGradient: 'Calculateur Coût & Longueur',
    heroSubtitle: 'Convertissez librement entre prix d\'achat, poids en grammes, longueur en mètres et volume en cm³. Calculez le coût exact au gramme et au mètre en 1,75 mm et 2,85 mm pour tous vos polymères.',
    faqs: [
      {
        question: "Combien de mètres contient une bobine de 1 kg de PLA ?",
        answer: "La longueur se calcule à partir de la masse, de la densité et de la section du fil : Longueur = Masse ÷ (Densité × π × Rayon²). Pour du PLA 1,75 mm standard d'une densité de 1,24 g/cm³, une bobine de 1 000 g mesure environ 332 à 335 mètres."
      },
      {
        question: "Pourquoi le filament 2,85 mm a-t-il moins de mètres que le 1,75 mm ?",
        answer: "La section augmente avec le carré du diamètre. Un filament de 2,85 mm est 2,65 fois plus épais qu'un filament de 1,75 mm. Une bobine de 1 kg en 2,85 mm ne mesure donc qu'environ 125 mètres, mais le volume imprimable par gramme reste strictement identique."
      }
    ],
    labels: {
      configTitle: 'Configuration Bobine & Matière',
      selectPolymer: 'Type de Polymère / Filament :',
      customMat: '➕ Matière Personnalisée (Saisie manuelle)',
      density: 'Densité Physique (g/cm³) :',
      diameter: 'Diamètre du Filament :',
      spoolWeight: 'Poids Net de la Bobine (g) :',
      spoolPrice: 'Prix d\'Achat de la Bobine (€) :',
      resultsTitle: 'Résultats Volumétriques & Coûts Unitaires',
      totalLengthMeters: 'Longueur Totale Imprimable :',
      costPerGram: 'Coût par Gramme :',
      costPerMeter: 'Coût par Mètre :',
      costPerFoot: 'Coût par Pied :',
      volumeCm3: 'Volume Polymère Total Utile :',
    }
  },
  spoolCalc: {
    metaTitle: 'Base Poids Bobines Vides & Filament Restant | 3DPrintingCostCalc.com',
    metaDescription: 'Pesez votre bobine sur une balance de cuisine pour connaître le filament restant. Base de 40+ tares : Bambu Lab, Polymaker, eSUN, Sunlu, Prusament.',
    metaKeywords: 'poids bobine vide bambu lab, tare bobine filament, combien filament reste bobine, peser bobine 3d',
    badge: 'Index de Tare des Bobines Vides',
    heroTitle: 'Tare des Bobines Vides',
    heroGradient: '& Calcul du Filament Restant',
    heroSubtitle: 'Posez votre bobine entamée sur une balance de cuisine. Déduisez le poids de la bobine vide du fabricant pour connaître les grammes et mètres restants et éviter les pannes de filament en pleine nuit.',
    faqs: [
      {
        question: "Combien pèse une bobine vide Bambu Lab ?",
        answer: "La bobine réutilisable officielle Bambu Lab en plastique PC (2 parties avec puce RFID) pèse environ 212 grammes (la version polycarbonate haute température pèse 248 g). Si vous utilisez une recharge avec mandrin carton, le carton seul pèse environ 37 à 45 g."
      },
      {
        question: "Comment éviter de manquer de filament en cours d'impression ?",
        answer: "Avant de lancer une longue impression, pesez la bobine sur une balance électronique. Sélectionnez la marque dans notre base pour soustraire la tare. Si le poids net restant dépasse l'estimation du slicer de 15 à 20 g au moins, vous pouvez imprimer sereinement."
      }
    ],
    labels: {
      searchSpool: 'Sélectionner la Marque et Modèle :',
      customTare: '➕ Tare Personnalisée (Saisie manuelle)',
      currentWeight: 'Poids Total Mesuré sur Balance (g) :',
      tareWeight: 'Tare de la Bobine Vide (g) :',
      resultsTitle: 'Filament Réellement Disponible',
      remainingGrams: 'Poids Net de Filament Restant :',
      remainingMeters: 'Mètres Imprimables Estimés :',
      percentLeft: 'Pourcentage Restant sur la Bobine :',
    }
  },
  amsCalc: {
    metaTitle: 'Calculateur Déchets Bambu AMS & Impression Multicouleur | 3DPrintingCostCalc.com',
    metaDescription: 'Calculez le poids et le coût des purges filament (crottes Bambu) et tours d\'amorçage. Découvrez l\'économie d\'échelle de l\'impression groupée en plateau plein.',
    metaKeywords: 'calculateur dechets ams bambu, crottes bambu lab purge, cout impression 3d multicolore, tour amorcage ams',
    badge: 'Optimisation Économique Multicolore',
    heroTitle: 'Bambu AMS & Multicolore',
    heroGradient: 'Calculateur Pertes & Coût de Purge',
    heroSubtitle: 'Mesurez précisément les grammes et les euros perdus dans le bac de purge et la tour d\'essuyage. Visualisez comment l\'impression de séries sur un même plateau divise les pertes de matière jusqu\'à 90 %.',
    faqs: [
      {
        question: "Pourquoi l'impression multicolore monopoint produit-elle autant de déchets ?",
        answer: "Les systèmes mono-buse (comme le Bambu Lab AMS) doivent extruder une quantité de purge importante à chaque changement de filament pour nettoyer la chambre de fusion et éviter que la couleur précédente ne déteigne. Un print de 500 couches avec 3 couleurs par couche peut générer 150 à 300 g de purge."
      },
      {
        question: "Pourquoi imprimer plusieurs pièces identiques réduit-il drastiquement les pertes ?",
        answer: "Les changements de couleur s'effectuent par couche, et non par pièce. Si imprimer une figurine demande 200 changements, en imprimer 10 sur le même plateau ne demandera toujours que 200 changements ! Les déchets totaux de purge restent identiques mais sont divisés par 10."
      }
    ],
    labels: {
      configTitle: 'Paramètres du Travail Multicolore',
      totalSwaps: 'Nombre Total de Changements de Couleur :',
      flushVolume: 'Purge Moyenne par Changement (g) :',
      modelGrams: 'Poids Net d\'un Modèle Seul (g) :',
      spoolPriceKg: 'Prix Moyen du Filament (€/kg) :',
      resultsTitle: 'Analyse des Pertes & Coût de Purge',
      wasteWeight: 'Poids Total Purges + Tour d\'Amorçage :',
      wasteCost: 'Coût du Filament Jeté au Bac de Purge :',
      ratio: 'Ratio Déchets / Poids de la Pièce :',
    }
  },
  resinCalc: {
    metaTitle: 'Calculateur Coût Impression Résine SLA / LCD | 3DPrintingCostCalc.com',
    metaDescription: 'Calculez le coût réel d\'impression résine : prix au mL de photopolymère, économies par évidement, bain d\'alcool IPA, film FEP/ACF et usure de l\'écran LCD mono.',
    metaKeywords: 'cout impression 3d resine, calcul prix resine sla, cout alcool ipa impression 3d, usure fep ecran lcd resine',
    badge: 'Moteur Économique Résine SLA / MSLA',
    heroTitle: 'Résine SLA / LCD',
    heroGradient: 'Calculateur de Coût & Consommables',
    heroSubtitle: 'Chiffrez précisément vos impressions en résine liquide. Intégrez le prix du flacon au mL, l\'économie par évidement, la dégradation du bain d\'alcool IPA, le film FEP et l\'amortissement de l\'écran LCD UV.',
    faqs: [
      {
        question: "Combien coûte un millilitre (mL) de résine d'impression 3D ?",
        answer: "Une résine standard 405nm grand public (environ 25 € à 35 € le flacon de 1 000 g / ~900 mL) revient à environ 0,03 € à 0,04 € par mL. Les résines haute résistance (Tough / ABS-like) coûtent 0,05 € à 0,08 € le mL, et les résines techniques dentaires dépassent 0,15 € le mL."
      },
      {
        question: "Combien de résine économise-t-on en évidant une pièce ?",
        answer: "Évider une pièce avec une paroi de 1,5 mm à 2,0 mm permet de réduire la consommation de résine de 50 % à 75 % sur les modèles de taille moyenne à grande. N'oubliez jamais d'ajouter des trous de drainage à la base pour éviter l'effet ventouse et permettre à la résine liquide de s'écouler."
      }
    ],
    labels: {
      configTitle: 'Paramètres Résine & Usure Machine',
      bottlePrice: 'Prix de la Bouteille de Résine (€) :',
      printMl: 'Volume Trancheur de la Pièce (mL) :',
      ipaCost: 'Solvant Alcool IPA & Gants (€) :',
      screenDeprec: 'Usure Film FEP & Écran LCD (€) :',
      resultsTitle: 'Décomposition du Coût Pièce Résine',
      rawResinCost: 'Coût Résine Photopolymère Nette :',
      consumablesCost: 'Solvants & Amortissement Écran/FEP :',
      totalJobCost: 'Coût Global de Production Unitaire :',
    }
  },
  legal: {
    privacyTitle: 'Politique de Confidentialité',
    privacyDesc: 'Tous les fichiers 3D (.stl, .3mf, .gcode) sont analysés à 100 % localement dans votre navigateur, sans aucun téléversement sur nos serveurs.',
    privacyBadge: 'Garantie Zéro-Téléversement',
    privacyGuarTitle: 'Engagement Fondamental de Confidentialité',
    privacyGuarDesc: '3DPrintingCostCalc.com est un utilitaire web entièrement sans état (stateless) fonctionnant exclusivement côté client. Lorsque vous déposez ou sélectionnez un fichier (.stl, .3mf, .gcode), les facettes triangulaires et les trajectoires sont calculées dans la mémoire volatile de votre navigateur. Aucun fichier 3D, modèle CAO, propriété intellectuelle ou code d\'impression n\'est jamais envoyé vers nos serveurs ou vers un tiers.',
    sec1Title: '1. Architecture d\'Inspection Locale Zéro Serveur',
    sec1Desc: 'Le traitement s\'exécute uniquement dans la mémoire RAM locale. Dès que vous rechargez ou fermez l\'onglet, toutes les données géométriques sont immédiatement et définitivement purgées de votre ordinateur.',
    sec2Title: '2. Données Personnelles Non Collectées',
    sec2Desc: 'Aucune création de compte ou connexion n\'est requise. Nous ne collectons ni ne conservons aucun nom, adresse e-mail, coordonnée bancaire ou design propriétaire.',
    sec3Title: '3. Préférences de Stockage Local',
    sec3Desc: 'Nous enregistrons uniquement vos préférences de thème (Sombre/Clair) et votre tarif électrique habituel dans le localStorage de votre navigateur pour votre confort.',

    termsTitle: 'Conditions Générales d\'Utilisation',
    termsDesc: 'Conditions d\'utilisation, clauses de non-responsabilité technique et charte utilisateur de 3DPrintingCostCalc.com.',
    termsBadge: 'Conditions Techniques & Accord Utilisateur',
    termsSummaryTitle: 'Résumé de l\'Accord',
    termsSummaryDesc: '3DPrintingCostCalc.com met à disposition des outils d\'estimation d\'ingénierie gratuits pour les makers, fermes d\'impression et professionnels. En utilisant le service, vous comprenez que les calculs sont des estimations indicatives devant être confirmées sur vos équipements réels.',
    termsSec1Title: '1. Acceptation des Conditions',
    termsSec1Desc: 'L\'accès et l\'utilisation du site web valent acceptation pleine et entière des présentes conditions et de la politique de confidentialité.',
    termsSec2Title: '2. Tolérances Physiques & Avertissement Technique',
    termsSec2Desc: 'Les fluctuations de densité des filaments (±3 à 5 %), les accélérations du slicer, les motifs de remplissage et les températures ambiantes créent des variations avec la réalité physique. Il est conseillé d\'effectuer des pièces témoins pesées sur balance de précision.',
    termsSec3Title: '3. Utilisation Commerciale des Données',
    termsSec3Desc: 'Vous êtes libres d\'utiliser les calculs, devis et données générés par nos outils pour vos devis clients et vos tarifs de vente commerciaux.',

    contactTitle: 'Contact & Support Communautaire',
    contactSubtitle: 'Nous accueillons avec plaisir les retours d\'expérience, suggestions de machines et pesées de bobines vides.',
    contactCardTitle: 'Contacter l\'Équipe Technique',
    contactCardDesc: 'Une question sur nos formules mathématiques ? Vous souhaitez l\'ajout d\'un profil de nouvelle imprimante 3D ou soumettre le poids d\'une bobine vide pesée par vos soins ?',
    contactEmailLabel: 'E-mail de Support Officiel :',
    contactTurnaround: 'Délai de réponse : Généralement sous 24 à 48 heures ouvrées.',
    contactSuggestTitle: 'Vous Proposez une Tare de Bobine ou un Modèle de Machine ?',
    contactSuggestDesc: 'Merci d\'indiquer la marque, le modèle précis, le poids à vide mesuré sur balance de précision (en grammes) et la matière du corps de bobine (carton, plastique, etc.).'
  },
  printerProfile: {
    title: (b, m) => `Calculateur Coût Impression & Électricité ${b} ${m} | 3DPrintingCostCalc.com`,
    description: (b, m, w) => `Calculez le coût exact d'impression sur ${b} ${m}. Puissance moyenne ${w}W, amortissement matériel et consommables. Calcul 100% local et gratuit.`,
    badge: 'Profil Machine & Calculateur TCO',
    heroH1: (b, m) => `Coût d'Impression & Électricité ${b} ${m}`,
    subtitle: (b, m, v, msrp) => `Estimation personnalisée pour ${b} ${m} (Volume de construction ${v} mm, prix indicatif ${msrp} €). Calculez filament, kWh et usure machine.`,
    smallPart: 'Petite Figurine / Pièce (50g)',
    medPart: 'Pièce Fonctionnelle Moyenne (150g)',
    largePart: 'Grand Prototype / Casque (500g)',
    specsTitle: 'Spécifications Techniques Matérielles',
    hardwareMsrp: 'Prix Matériel Indicatif :',
    avgPower: 'Puissance Moyenne (PLA) :',
    lifespan: 'Durée de Vie Estimée :',
    buildVolume: 'Volume Utile Maximal :',
    benchmarksTitle: 'Scénarios Types d\'Impression',
    colJob: 'Type de Travail',
    colFilament: 'Filament (g)',
    colTime: 'Durée (h)',
    colMatCost: 'Matière',
    colElecCost: 'Électricité',
    colMachCost: 'Amortissement',
    colTotalCost: 'Coût Total',
    faqs: (p) => [
      {
        question: `Combien d'électricité consomme la ${p.brand} ${p.model} ?`,
        answer: `La ${p.brand} ${p.model} consomme en moyenne ${p.avgWattsPla} Watts en imprimant du PLA standard avec un plateau à 55 °C. Aux tarifs d'électricité européens, 1 heure d'impression revient à moins de 0,04 €.`
      },
      {
        question: `Quel est le coût horaire d'amortissement de la ${p.brand} ${p.model} ?`,
        answer: `Avec un prix d'achat d'environ ${p.msrpUsd} € et une durée de vie opérationnelle de ${p.defaultLifespanHours.toLocaleString()} heures, l'amortissement machine s'élève à ${(p.msrpUsd / p.defaultLifespanHours).toFixed(2)} € par heure d'impression.`
      }
    ]
  },
  materialProfile: {
    title: (n) => `Guide Coût au Gramme, Densité & Paramètres ${n} | 3DPrintingCostCalc.com`,
    description: (n, d) => `Manuel technique et économique pour filament ${n}. Densité physique ${d} g/cm³, métrage par bobine et températures d'extrusion recommandées.`,
    badge: 'Fiche Technique Polymère & Économie',
    heroH1: (n) => `Guide Coût & Densité Filament ${n}`,
    subtitle: (n, d) => `Données techniques complètes pour filament ${n} avec une densité de ${d} g/cm³.`,
    specsTitle: 'Propriétés Physiques & Paramètres d\'Impression',
    density: 'Densité du Polymère :',
    nozzleTemp: 'Température de Buse Conseillée :',
    bedTemp: 'Température de Plateau Conseillée :',
    chamberReq: 'Caisson Fermé Nécessaire :',
    costPerKg: 'Prix Moyen du Marché / kg :',
    metersPerKg: 'Mètres par Bobine 1 kg (1,75 mm) :',
    shrinkage: 'Retrait Volumétrique :',
    faqs: (m) => [
      {
        question: `Combien coûte 1 kg de filament ${m.name} ?`,
        answer: `Le prix moyen d'une bobine de 1 kg de filament ${m.name} de bonne qualité se situe autour de ${m.defaultPricePerKgUsd.toFixed(2)} € (soit environ ${(m.defaultPricePerKgUsd / 1000).toFixed(3)} € le gramme).`
      },
      {
        question: `Quelle est la densité du ${m.name} et sa longueur par bobine ?`,
        answer: `La densité du ${m.name} est de ${m.densityGcm3} g/cm³. Pour du fil standard 1,75 mm, 1 kg correspond à environ ${(1000 / (m.densityGcm3 * 0.02405) / 100).toFixed(1)} mètres.`
      }
    ]
  }
};
