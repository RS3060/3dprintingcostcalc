export interface NotFoundTranslation {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  titlePrimary: string;
  titleGradient: string;
  description: string;
  logFile: string;
  logHoming: string;
  logCooldown: string;
  logBedShutdown: string;
  logException: string;
  logReroute: string;
  btnJobCost: string;
  btnTco: string;
  calcDirectoryTitle: string;
}

export const NOT_FOUND_TRANSLATIONS: Record<string, NotFoundTranslation> = {
  en: {
    metaTitle: '404: Toolpath Not Found | 3DPrintingCostCalc.com',
    metaDescription: 'Layer shift detected! The requested 3D printing calculator page or resource does not exist on this build platform.',
    badge: 'Status 404 · Layer Shift Detected',
    titlePrimary: 'Toolpath',
    titleGradient: 'Not Found',
    description: 'The coordinates or file you requested are not on this build plate. The URL may have shifted, the slicer path was purged, or the page was relocated.',
    logFile: 'terminal-output.log',
    logHoming: '; Auto-homing axes',
    logCooldown: 'Extruder heater cooldown',
    logBedShutdown: 'Heated bed shutdown',
    logException: '[Fatal Exception]: Target toolpath out of printable volume envelope.',
    logReroute: 'Re-routing user to primary calibration tools...',
    btnJobCost: 'Job Cost Calculator',
    btnTco: 'Printer TCO & Electricity',
    calcDirectoryTitle: 'Calculators',
  },
  es: {
    metaTitle: '404: Trayectoria No Encontrada | 3DPrintingCostCalc.com',
    metaDescription: '¡Desplazamiento de capa detectado! La página o recurso solicitado no existe en esta plataforma de impresión.',
    badge: 'Estado 404 · Desplazamiento de Capa Detectado',
    titlePrimary: 'Trayectoria',
    titleGradient: 'No Encontrada',
    description: 'Las coordenadas o el archivo que buscas no están en esta base de impresión. Es posible que la URL haya cambiado, la ruta se haya purgado o la página haya sido reubicada.',
    logFile: 'terminal-output.log',
    logHoming: '; Auto-centrado de ejes',
    logCooldown: 'Enfriamiento del extrusor',
    logBedShutdown: 'Apagado de la cama caliente',
    logException: '[Excepción Grave]: Trayectoria fuera del volumen imprimible.',
    logReroute: 'Re-enrutando usuario a herramientas principales de calibración...',
    btnJobCost: 'Calculadora de Coste de Impresión',
    btnTco: 'TCO de Impresora y Electricidad',
    calcDirectoryTitle: 'Calculadoras',
  },
  zh: {
    metaTitle: '404: 未找到打印路径 | 3DPrintingCostCalc.com',
    metaDescription: '检测到错层！您请求的 3D 打印计算器页面或资源不存在于当前构建平台上。',
    badge: '状态 404 · 检测到错层',
    titlePrimary: '打印路径',
    titleGradient: '未找到',
    description: '您请求的坐标或文件不在当前打印底板上。URL 可能已变更、切片路径已清除或页面已被移动。',
    logFile: 'terminal-output.log',
    logHoming: '; 各轴自动归零',
    logCooldown: '挤出头加热器降温',
    logBedShutdown: '热床断电停机',
    logException: '[致命异常]: 目标路径超出可打印成型尺寸范围。',
    logReroute: '正在重新将用户重定向至主要校准工具...',
    btnJobCost: '打印成本计算器',
    btnTco: '打印机拥有成本 (TCO) 与能耗',
    calcDirectoryTitle: '计算器工具',
  },
  ja: {
    metaTitle: '404: ツールパスが見つかりません | 3DPrintingCostCalc.com',
    metaDescription: 'レイヤーシフトを検出！リクエストされた 3D プリント計算ツールまたはページは存在しません。',
    badge: 'ステータス 404 · レイヤーシフト検出',
    titlePrimary: 'ツールパスが',
    titleGradient: '見つかりません',
    description: '指定された座標またはファイルはこのビルドプレート上にありません。URLが移動したか、スライサーパスがパージされた可能性があります。',
    logFile: 'terminal-output.log',
    logHoming: '; 軸の原点復帰 (ホーミング)',
    logCooldown: 'ノズルヒーター冷却',
    logBedShutdown: 'ヒートベッド停止',
    logException: '[重大な例外]: ターゲットツールパスが最大印刷可能領域外です。',
    logReroute: '主要な校正ツールへ再ルーティング中...',
    btnJobCost: 'プリントコスト計算機',
    btnTco: '3DプリンターTCO & 電気代',
    calcDirectoryTitle: '各種計算ツール',
  },
  ko: {
    metaTitle: '404: 툴패스를 찾을 수 없습니다 | 3DPrintingCostCalc.com',
    metaDescription: '레이어 밀림 감지! 요청하신 3D 프린팅 계산기 페이지 또는 리소스가 빌드 플레이트에 없습니다.',
    badge: '상태 404 · 레이어 밀림 감지됨',
    titlePrimary: '툴패스를',
    titleGradient: '찾을 수 없음',
    description: '요청하신 좌표 또는 파일이 빌드 플레이트에 존재하지 않습니다. URL이 변경되었거나 슬라이서 경로가 제거되었을 수 있습니다.',
    logFile: 'terminal-output.log',
    logHoming: '; 전축 원점 복귀 (오토홈)',
    logCooldown: '노즐 히터 냉각',
    logBedShutdown: '히팅베드 전원 차단',
    logException: '[치명적 예외]: 대상 툴패스가 최대 출력 가능 체적을 벗어났습니다.',
    logReroute: '기본 보정 도구로 사용자를 다시 안내하는 중...',
    btnJobCost: '출력 비용 계산기',
    btnTco: '프린터 TCO 및 소비 전력',
    calcDirectoryTitle: '계산기 모음',
  },
  fr: {
    metaTitle: '404 : Trajectoire Introuvable | 3DPrintingCostCalc.com',
    metaDescription: 'Décalage de couche détecté ! La calculatrice d’impression 3D ou la ressource demandée n’existe pas.',
    badge: 'Statut 404 · Décalage de Couche Détecté',
    titlePrimary: 'Trajectoire',
    titleGradient: 'Introuvable',
    description: 'Les coordonnées ou le fichier demandé ne figurent pas sur ce plateau. L’URL a peut-être changé, la trajectoire a été purgée ou la page déplacée.',
    logFile: 'terminal-output.log',
    logHoming: '; Mise à l’origine automatique des axes',
    logCooldown: 'Refroidissement de la buse',
    logBedShutdown: 'Extinction du plateau chauffant',
    logException: '[Exception Fatale] : Trajectoire cible hors du volume d’impression maximal.',
    logReroute: 'Redirection vers les outils de calibration principaux...',
    btnJobCost: 'Calculateur de Coût d’Impression',
    btnTco: 'TCO Imprimante & Électricité',
    calcDirectoryTitle: 'Calculatrices',
  },
  de: {
    metaTitle: '404: Druckpfad Nicht Gefunden | 3DPrintingCostCalc.com',
    metaDescription: 'Schichtversatz erkannt! Die angeforderte 3D-Druck-Rechnerseite existiert auf dieser Bauplatte nicht.',
    badge: 'Status 404 · Schichtversatz Erkannt',
    titlePrimary: 'Druckpfad',
    titleGradient: 'Nicht Gefunden',
    description: 'Die angeforderten Koordinaten oder die Datei befinden sich nicht auf dieser Druckplatte. Die URL wurde möglicherweise verschoben oder gelöscht.',
    logFile: 'terminal-output.log',
    logHoming: '; Automatische Nullpunktfahrt der Achsen',
    logCooldown: 'Düse abkühlen',
    logBedShutdown: 'Druckbett abschalten',
    logException: '[Schwerer Ausnahmefehler]: Ziel-Druckpfad liegt außerhalb des Druckvolumens.',
    logReroute: 'Benutzer wird zu den Kalibrierungs-Werkzeugen umgeleitet...',
    btnJobCost: 'Druckkosten-Rechner',
    btnTco: 'Drucker-TCO & Stromverbrauch',
    calcDirectoryTitle: 'Rechner',
  },
  pt: {
    metaTitle: '404: Percurso Não Encontrado | 3DPrintingCostCalc.com',
    metaDescription: 'Deslocamento de camada detetado! A calculadora de impressão 3D ou recurso solicitado não existe nesta base.',
    badge: 'Estado 404 · Deslocamento de Camada Detetado',
    titlePrimary: 'Percurso',
    titleGradient: 'Não Encontrado',
    description: 'As coordenadas ou o ficheiro solicitado não estão nesta mesa de impressão. O URL pode ter sido alterado ou o ficheiro deslocalizado.',
    logFile: 'terminal-output.log',
    logHoming: '; Auto-homing dos eixos',
    logCooldown: 'Arrefecimento do extrusor',
    logBedShutdown: 'Desligamento da mesa aquecida',
    logException: '[Exceção Grave]: Percurso de corte fora do volume de impressão útil.',
    logReroute: 'A redirecionar utilizador para as ferramentas de calibração...',
    btnJobCost: 'Calculadora de Custo de Impressão',
    btnTco: 'TCO de Impressora e Consumo',
    calcDirectoryTitle: 'Calculadoras',
  },
  it: {
    metaTitle: '404: Percorso Utensile Non Trovato | 3DPrintingCostCalc.com',
    metaDescription: 'Spostamento di livello rilevato! La calcolatrice di stampa 3D o la pagina richiesta non esiste su questo piatto.',
    badge: 'Stato 404 · Layer Shift Rilevato',
    titlePrimary: 'Percorso',
    titleGradient: 'Non Trovato',
    description: 'Le coordinate o il file richiesto non si trovano su questo piano di stampa. L’URL potrebbe essere mutato o la pagina ricollocata.',
    logFile: 'terminal-output.log',
    logHoming: '; Azzeramento assi automatico',
    logCooldown: 'Raffreddamento estrusore',
    logBedShutdown: 'Spegnimento piatto riscaldato',
    logException: '[Eccezione Irreversibile]: Percorso fuori dal volume massimo stampabile.',
    logReroute: 'Reindirizzamento alle calcolatrici principali in corso...',
    btnJobCost: 'Calcolatore Costo Stampa',
    btnTco: 'TCO Stampante & Energia',
    calcDirectoryTitle: 'Calcolatori',
  },
  ru: {
    metaTitle: '404: Траектория Не Найдена | 3DPrintingCostCalc.com',
    metaDescription: 'Обнаружен сдвиг слоев! Запрашиваемый калькулятор 3D-печати или файл отсутствует на рабочей платформе.',
    badge: 'Статус 404 · Обнаружен Сдвиг Слоев',
    titlePrimary: 'Траектория',
    titleGradient: 'Не Найдена',
    description: 'Координаты или файл, которые вы запросили, отсутствуют на рабочем столе. Возможно, ссылка устарела или страница была перемещена.',
    logFile: 'terminal-output.log',
    logHoming: '; Авто-калибровка нулей осей',
    logCooldown: 'Охлаждение экструдера',
    logBedShutdown: 'Отключение подогрева стола',
    logException: '[Критическая Ошибка]: Траектория выходит за пределы области печати.',
    logReroute: 'Перенаправление к основным калибровочным калькуляторам...',
    btnJobCost: 'Калькулятор Стоимости Печати',
    btnTco: 'TCO Принтера и Электроэнергия',
    calcDirectoryTitle: 'Калькуляторы',
  },
};

export function getNotFoundTranslation(locale?: string): NotFoundTranslation {
  if (locale && locale in NOT_FOUND_TRANSLATIONS) {
    return NOT_FOUND_TRANSLATIONS[locale];
  }
  return NOT_FOUND_TRANSLATIONS.en;
}

export interface SiteUiTranslation {
  nav: {
    jobCost: string;
    printerTco: string;
    filamentLength: string;
    spoolTare: string;
    amsWaste: string;
    resinSla: string;
    calculators: string;
    machineProfiles: string;
    materialsGuides: string;
    privacy: string;
    terms: string;
    contact: string;
    proMakerSuite: string;
  };
  footer: {
    aboutDesc: string;
    clientSideBadge: string;
    calculatorsCol: string;
    machineProfilesCol: string;
    materialsCol: string;
    copyrightNotice: string;
    builtFor: string;
  };
}

export const SITE_UI_TRANSLATIONS: Record<string, SiteUiTranslation> = {
  "de": {
    "nav": {
      "jobCost": "Druckkosten",
      "printerTco": "Drucker TCO",
      "filamentLength": "Filament & Länge",
      "spoolTare": "Spulen-Leergewicht",
      "amsWaste": "AMS-Spülverlust",
      "resinSla": "SLA-Harz",
      "calculators": "Rechner-Übersicht",
      "machineProfiles": "Beliebte Drucker-Profile",
      "materialsGuides": "Materialien & Guides",
      "privacy": "Datenschutz",
      "terms": "AGB",
      "contact": "Kontakt",
      "proMakerSuite": "Pro Maker Suite"
    },
    "footer": {
      "aboutDesc": "Kostenlose, rein clientseitige 3D-Druck-Wirtschaftsplattform für Maker, Druckfarmen und Online-Händler. Blitzschnelle Analyse von .STL-, .3MF- und .GCODE-Dateien ganz ohne Server-Upload.",
      "clientSideBadge": "100% Client-Side",
      "calculatorsCol": "Rechner",
      "machineProfilesCol": "Drucker-Profile",
      "materialsCol": "Material & Rechtliches",
      "copyrightNotice": "© 2026 3DPrintingCostCalc.com. Alle Berechnungen dienen professionellen Richtwert-Kalkulationen.",
      "builtFor": "Entwickelt für Präzisions-Maker und gewerbliche Druckfarmen weltweit."
    }
  },
  "en": {
    "nav": {
      "jobCost": "Job Cost",
      "printerTco": "Printer TCO",
      "filamentLength": "Filament & Length",
      "spoolTare": "Spool Tare",
      "amsWaste": "AMS Waste",
      "resinSla": "Resin SLA",
      "calculators": "Calculators",
      "machineProfiles": "Popular Machine Profiles",
      "materialsGuides": "Materials & Guides",
      "privacy": "Privacy Policy",
      "terms": "Terms & Conditions",
      "contact": "Contact Us",
      "proMakerSuite": "Pro Maker Suite"
    },
    "footer": {
      "aboutDesc": "100% free, client-side 3D printing economics hub for makers, print farms, and Etsy businesses. Drag-and-drop .STL, .3MF, and .GCODE parsing with zero server uploads.",
      "clientSideBadge": "100% Client-Side",
      "calculatorsCol": "Calculators",
      "machineProfilesCol": "Machine Profiles",
      "materialsCol": "Materials & Legal",
      "copyrightNotice": "© 2026 3DPrintingCostCalc.com. All calculations provided for professional estimation purposes.",
      "builtFor": "Built for precision makers & print farms worldwide."
    }
  },
  "es": {
    "nav": {
      "jobCost": "Coste de Impresión",
      "printerTco": "TCO Impresora",
      "filamentLength": "Filamento & Longitud",
      "spoolTare": "Tara de Bobina",
      "amsWaste": "Purga AMS",
      "resinSla": "Resina SLA",
      "calculators": "Calculadoras",
      "machineProfiles": "Perfiles de Impresoras",
      "materialsGuides": "Materiales & Guías",
      "privacy": "Privacidad",
      "terms": "Términos",
      "contact": "Contacto",
      "proMakerSuite": "Suite Pro Maker"
    },
    "footer": {
      "aboutDesc": "Plataforma económica de impresión 3D 100% gratuita y en el navegador para makers, granjas de impresión y vendedores online. Análisis instantáneo de archivos .STL, .3MF y .GCODE sin subir datos al servidor.",
      "clientSideBadge": "100% en tu navegador",
      "calculatorsCol": "Calculadoras",
      "machineProfilesCol": "Perfiles de Máquinas",
      "materialsCol": "Materiales y Legal",
      "copyrightNotice": "© 2026 3DPrintingCostCalc.com. Todos los cálculos se ofrecen con fines de estimación profesional.",
      "builtFor": "Diseñado para makers de precisión y granjas de impresión de todo el mundo."
    }
  },
  "fr": {
    "nav": {
      "jobCost": "Coût d’impression",
      "printerTco": "TCO Imprimante",
      "filamentLength": "Filament & Longueur",
      "spoolTare": "Tare Bobine",
      "amsWaste": "Pertes AMS",
      "resinSla": "Résine SLA",
      "calculators": "Calculateurs",
      "machineProfiles": "Profils Machines Populaires",
      "materialsGuides": "Matériaux & Guides",
      "privacy": "Confidentialité",
      "terms": "Conditions",
      "contact": "Contact",
      "proMakerSuite": "Suite Pro Maker"
    },
    "footer": {
      "aboutDesc": "Hub économique d’impression 3D 100% gratuit et côté client pour makers, fermes d’impression et vendeurs e-commerce. Analyse instantanée des fichiers .STL, .3MF et .GCODE sans aucun téléversement serveur.",
      "clientSideBadge": "100% Côté Client",
      "calculatorsCol": "Calculateurs",
      "machineProfilesCol": "Profils d’imprimantes",
      "materialsCol": "Matériaux & Légal",
      "copyrightNotice": "© 2026 3DPrintingCostCalc.com. Tous les calculs sont fournis à titre d’estimation professionnelle.",
      "builtFor": "Conçu pour les makers de précision et fermes d’impression du monde entier."
    }
  },
  "it": {
    "nav": {
      "jobCost": "Costo Stampa",
      "printerTco": "TCO Stampante",
      "filamentLength": "Filamento & Lunghezza",
      "spoolTare": "Tara Bobina",
      "amsWaste": "Scarto AMS",
      "resinSla": "Resina SLA",
      "calculators": "Calcolatori",
      "machineProfiles": "Profili Stampanti Popolari",
      "materialsGuides": "Materiali & Guide",
      "privacy": "Privacy",
      "terms": "Termini",
      "contact": "Contatto",
      "proMakerSuite": "Suite Pro Maker"
    },
    "footer": {
      "aboutDesc": "Hub economico per la stampa 3D 100% gratuito e locale per maker, print farm e venditori online. Analisi immediata dei file .STL, .3MF e .GCODE senza caricamento su server esterni.",
      "clientSideBadge": "100% Locale nel Browser",
      "calculatorsCol": "Calcolatori",
      "machineProfilesCol": "Profili Stampanti",
      "materialsCol": "Materiali e Note Legali",
      "copyrightNotice": "© 2026 3DPrintingCostCalc.com. Tutti i calcoli sono forniti a scopo di stima professionale.",
      "builtFor": "Creato per maker di precisione e print farm di tutto il mondo."
    }
  },
  "ja": {
    "nav": {
      "jobCost": "造形コスト",
      "printerTco": "プリンターTCO",
      "filamentLength": "フィラメント＆長さ",
      "spoolTare": "スプール風袋重量",
      "amsWaste": "AMSパージ廃棄量",
      "resinSla": "光造形レジン",
      "calculators": "計算ツール一覧",
      "machineProfiles": "人気機種プロファイル",
      "materialsGuides": "素材＆ガイド",
      "privacy": "プライバシーポリシー",
      "terms": "利用規約",
      "contact": "お問い合わせ",
      "proMakerSuite": "プロメイカースイート"
    },
    "footer": {
      "aboutDesc": "メイカー、プリントファーム、クリエイター向けの完全無料・完全クライアントサイド3Dプリント原価計算ツール。サーバーへのアップロード不要で.STL、.3MF、.GCODEファイルを直接解析。",
      "clientSideBadge": "100% クライアントサイド動作",
      "calculatorsCol": "計算ツール",
      "machineProfilesCol": "対応機種一覧",
      "materialsCol": "素材と法的情報",
      "copyrightNotice": "© 2026 3DPrintingCostCalc.com. すべての計算は専門的な見積もり目安として提供されます。",
      "builtFor": "世界中の精密ものづくりメイカーとプリントファームのために。"
    }
  },
  "ko": {
    "nav": {
      "jobCost": "출력 비용",
      "printerTco": "프린터 TCO",
      "filamentLength": "필라멘트 & 길이",
      "spoolTare": "스풀 무게",
      "amsWaste": "AMS 배출 낭비",
      "resinSla": "레진 광경화",
      "calculators": "계산기 모음",
      "machineProfiles": "인기 프린터 프로필",
      "materialsGuides": "소재 및 가이드",
      "privacy": "개인정보처리방침",
      "terms": "이용약관",
      "contact": "문의하기",
      "proMakerSuite": "프로 메이커 도구"
    },
    "footer": {
      "aboutDesc": "메이커, 출력 대행 팜 및 온라인 판매자를 위한 100% 무료 클라이언트 기반 3D 프린팅 경제성 계산기. 서버 업로드 없이 .STL, .3MF, .GCODE 파일을 로컬에서 즉시 분석합니다.",
      "clientSideBadge": "100% 클라이언트 연산",
      "calculatorsCol": "계산 도구",
      "machineProfilesCol": "프린터 모델",
      "materialsCol": "소재 및 약관",
      "copyrightNotice": "© 2026 3DPrintingCostCalc.com. 모든 계산 결과는 전문적인 견적 산정용 참조 자료입니다.",
      "builtFor": "전 세계의 정밀 메이커와 프린팅 팜을 위해 제작되었습니다."
    }
  },
  "pt": {
    "nav": {
      "jobCost": "Custo da Impressão",
      "printerTco": "TCO da Impressora",
      "filamentLength": "Filamento & Comprimento",
      "spoolTare": "Tara do Carretel",
      "amsWaste": "Desperdício AMS",
      "resinSla": "Resina SLA",
      "calculators": "Calculadoras",
      "machineProfiles": "Perfis de Impressoras",
      "materialsGuides": "Materiais & Guias",
      "privacy": "Privacidade",
      "terms": "Termos",
      "contact": "Contato",
      "proMakerSuite": "Suite Pro Maker"
    },
    "footer": {
      "aboutDesc": "Hub econômico de impressão 3D 100% gratuito e local no navegador para makers, fazendas de impressão e vendedores online. Análise rápida de arquivos .STL, .3MF e .GCODE sem envio para servidores.",
      "clientSideBadge": "100% no seu navegador",
      "calculatorsCol": "Calculadoras",
      "machineProfilesCol": "Perfis de Máquinas",
      "materialsCol": "Materiais e Legal",
      "copyrightNotice": "© 2026 3DPrintingCostCalc.com. Todos os cálculos são para estimativa profissional.",
      "builtFor": "Desenvolvido para makers de precisão e fazendas de impressão no mundo inteiro."
    }
  },
  "ru": {
    "nav": {
      "jobCost": "Стоимость печати",
      "printerTco": "TCO Принтера",
      "filamentLength": "Филамент и длина",
      "spoolTare": "Вес пустой катушки",
      "amsWaste": "Отходы AMS",
      "resinSla": "Фотополимерная смола",
      "calculators": "Калькуляторы",
      "machineProfiles": "Популярные принтеры",
      "materialsGuides": "Материалы и гайды",
      "privacy": "Конфиденциальность",
      "terms": "Условия",
      "contact": "Контакты",
      "proMakerSuite": "Профессиональный набор"
    },
    "footer": {
      "aboutDesc": "Бесплатный локальный онлайн-калькулятор себестоимости 3D-печати для мейкеров, ферм 3D-принтеров и коммерческих заказов. Мгновенный разбор файлов .STL, .3MF и .GCODE прямо в браузере без отправки на сервер.",
      "clientSideBadge": "100% Локально в браузере",
      "calculatorsCol": "Калькуляторы",
      "machineProfilesCol": "Модели принтеров",
      "materialsCol": "Материалы и правила",
      "copyrightNotice": "© 2026 3DPrintingCostCalc.com. Все расчеты носят ориентировочный инженерный характер.",
      "builtFor": "Создано для мейкеров и коммерческих ферм 3D-печати по всему миру."
    }
  },
  "zh": {
    "nav": {
      "jobCost": "打印成本",
      "printerTco": "打印机TCO",
      "filamentLength": "耗材与长度",
      "spoolTare": "料盘皮重",
      "amsWaste": "AMS废料",
      "resinSla": "光固化树脂",
      "calculators": "计算器工具箱",
      "machineProfiles": "热门打印机配置",
      "materialsGuides": "材料与指南",
      "privacy": "隐私政策",
      "terms": "服务条款",
      "contact": "联系我们",
      "proMakerSuite": "专业创客套件"
    },
    "footer": {
      "aboutDesc": "面向创客、农场与电商卖家的100%完全免费、纯本地端3D打印经济学计算平台。支持直接拖拽解析.STL、.3MF与.GCODE文件，无需上传服务器。",
      "clientSideBadge": "100% 纯本地运行",
      "calculatorsCol": "计算工具",
      "machineProfilesCol": "机型预设",
      "materialsCol": "材料与条款",
      "copyrightNotice": "© 2026 3DPrintingCostCalc.com。所有估算仅供专业测算参考。",
      "builtFor": "专为全球精密创客与打印农场量身打造。"
    }
  }
};
