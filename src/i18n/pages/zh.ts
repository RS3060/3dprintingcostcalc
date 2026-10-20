import type { PagesTranslationBundle } from './types';

export const zhPages: PagesTranslationBundle = {
  printerTco: {
    metaTitle: '3D打印机成本计算器与总拥有成本 (TCO) 评估 | 3DPrintingCostCalc.com',
    metaDescription: '精确计算购买和运行3D打印机的真实总成本。对比整机购机价格、每月电费、日常损耗备件维护，以及自购打印机对比商业外包打样的回本周期。',
    metaKeywords: '3D打印机成本, 3D打印机电费计算, 3D打印机TCO, 打印机回本周期, 拓竹打样成本',
    badge: '硬件TCO与能耗测算引擎',
    heroTitle: '购买与运行一台',
    heroGradient: '3D打印机究竟要花多少钱？',
    heroSubtitle: '全面对比整机硬件购入价格、持续运行电费、耗材线料消耗以及易损件维护折旧。精准测算自购打印机对比商业代工打样服务的回本周期。',
    faqs: [
      {
        question: "2026年买一台3D打印机大概需要多少钱？",
        answer: "消费级3D打印机主要分为三大梯队：入门平价机（如拓竹A1 Mini、创想三维Ender-3 V3）价格在1,200元至2,000元之间；中端高速封闭式CoreXY机型（如拓竹P1S、K1C）价格在3,500元至6,000元之间；专业级多色工程打印机（如拓竹X1-Carbon、Prusa XL）售价在8,000元至25,000元以上。"
      },
      {
        question: "3D打印机一个月大概用多少度电？",
        answer: "一台3D打印机每月运行120至150小时（每天约4-5小时），耗电量在15到35度（kWh）之间。按民用电费0.6-0.8元/度计算，打印PLA的月电费仅约10元至25元；若打印ABS等需热床维持100°C的高温材料，月电费约为30元至60元。"
      },
      {
        question: "什么是3D打印机的真实总拥有成本 (TCO)？",
        answer: "TCO总拥有成本包括裸机购置费、持续消耗的耗材线料、电费支出，以及易损件更换备件金（如硬化钢喷嘴、双面PEI弹簧钢板、同步带润滑）。以一台3,500元打印机年消耗12卷线材计算，首年综合拥有成本约为5,500元左右。"
      },
      {
        question: "自己买打印机对比外包打样，做多少件能回本？",
        answer: "商业打样服务通常按每克1.5元至3元收费，一个100克的PLA零件外包需150至300元；自印单件原料加电费仅需约15元至20元。自购一台2,500元打印机，打印约12至18个中型零件即可完全收回购机成本。"
      }
    ],
    labels: {
      inputsTitle: '硬件规格与日常使用参数',
      selectPrinter: '选择3D打印机预设型号：',
      customPrinter: '➕ 自定义打印机 (手动输入)',
      upfrontPrice: '打印机购入裸机价格 (¥)：',
      powerDraw: '打印机运行功率 (瓦)：',
      monthlyHours: '每月预估开机工时 (小时)：',
      spoolsMonth: '每月消耗耗材卷数 (1kg/卷)：',
      spoolCost: '耗材平均购买单价 (¥)：',
      elecRate: '所在地区电费单价 (¥/度)：',
      lifespan: '整机预估使用年限 (年)：',
      maintenance: '年度易损件维护备用金 (¥)：',
      outsourcedCost: '商业外包代工等量价格 (¥/卷)：',
      resultsTitle: '设备全生命周期拥有成本 (TCO) 构成',
      firstYearCost: '首年综合支出成本：',
      monthlyRunCost: '每月持续运营支出：',
      annualCost: '年化日常运行成本：',
      breakevenTitle: '自购打印机对比外包代工回本周期',
      breakevenDesc: '对比商业打样服务商每公斤成品收费约300元至600元：',
      breakevenMonths: '预计投资回本时间：',
    }
  },
  filamentCalc: {
    metaTitle: '3D打印耗材重量与长度转换计算器 | 3DPrintingCostCalc.com',
    metaDescription: '根据耗材克重精确折算线材米数，计算1.75mm与2.85mm规格PLA、PETG、ABS、TPU及尼龙线材每克与每米成本。',
    metaKeywords: '耗材长度计算器, 3D打印耗材重量转米数, 1公斤PLA有多少米, 耗材一米多少钱',
    badge: '物理几何体积换算引擎',
    heroTitle: '3D打印耗材',
    heroGradient: '成本与长度换算器',
    heroSubtitle: '在料卷价格、克重、米数与模型体积之间自由换算。支持1.75mm和2.85mm不同线径PLA、PETG、ABS、TPU及碳纤复合材料每克与每米单价精确换算。',
    faqs: [
      {
        question: "1公斤（1kg）PLA线材大概有多少米长？",
        answer: "线材长度取决于质量、材料密度和截面积：长度 = 质量 ÷ (密度 × π × 半径²)。对于密度1.24 g/cm³的标准1.75mm PLA线材，1000克整卷线材的长度约为332至335米。"
      },
      {
        question: "为什么2.85mm线材一卷的米数比1.75mm少很多？",
        answer: "截面积与直径的平方成正比。2.85mm线材截面积为6.38 mm²，是1.75mm（2.41 mm²）的2.65倍粗。因此1kg的2.85mm PLA线材仅约125米长，但每米所含材料体积相应多出2.65倍，按克计算的打印量完全一致。"
      },
      {
        question: "如何计算3D打印耗材每米单价？",
        answer: "每米成本 = 整卷售价 ÷ 整卷总米数。若一卷1kg的1.75mm PLA售价69元，总长335米，则每米成本为 69 ÷ 335 ≈ 0.206元（即每米约2毛钱）。"
      }
    ],
    labels: {
      configTitle: '线盘与材料规格配置',
      selectPolymer: '材料材质类型：',
      customMat: '➕ 自定义材料 (手动输入)',
      density: '材料物理密度 (g/cm³)：',
      diameter: '耗材线径规格：',
      spoolWeight: '线盘净重 (克)：',
      spoolPrice: '整盘售价 (¥)：',
      resultsTitle: '长度与单位成本测算结果',
      totalLengthMeters: '总可打印线材长度：',
      costPerGram: '每克耗材成本：',
      costPerMeter: '每米耗材成本：',
      costPerFoot: '每英尺成本：',
      volumeCm3: '整卷线材实际可用体积：',
    }
  },
  spoolCalc: {
    metaTitle: '空料盘皮重数据库与剩余耗材查询 | 3DPrintingCostCalc.com',
    metaDescription: '查询拓竹、Prusa、三绿、eSun易生、Polymaker等主流品牌空料盘皮重。用厨房秤快速称出剩余耗材克重与米数。',
    metaKeywords: '空料盘重量, 料盘皮重查询, 拓竹空盘重量, 剩余耗材怎么称, 3D打印耗材还剩多少',
    badge: '料盘空盘皮重索引库',
    heroTitle: '空料盘皮重查询',
    heroGradient: '& 剩余耗材称重计算',
    heroSubtitle: '将用了一半的线盘放到电子秤上，一键减去各厂商空料盘净皮重，精准测算盘内剩余线材克重与剩余长度，告别打印中途缺料断料风险。',
    faqs: [
      {
        question: "拓竹（Bambu Lab）官方空料盘有多重？",
        answer: "拓竹官方可重复使用PC塑料空料盘带RFID芯片的净重约为210克至220克之间。如果使用的是拓竹纸管替换装，内圈纸套净重约为45克。"
      },
      {
        question: "如何避免长工时大件打印半途断料？",
        answer: "开启长工时打印前，将剩余料卷放到电子秤上称出毛重。在空盘数据库中选择品牌扣除皮重，将剩余净重与切片软件预估耗量对比。若剩余克重超出切片需求15-20克以上即可安全开印。"
      }
    ],
    labels: {
      searchSpool: '选择耗材品牌与线盘型号：',
      customTare: '➕ 自定义空盘重量 (手动输入)',
      currentWeight: '当前连盘带料称重重量 (克)：',
      tareWeight: '空盘扣重 (克)：',
      resultsTitle: '实际剩余可用线材',
      remainingGrams: '剩余线材净重：',
      remainingMeters: '预估剩余可用米数：',
      percentLeft: '整盘剩余余量百分比：',
    }
  },
  amsCalc: {
    metaTitle: '拓竹AMS多色打印废料与吐丝成本计算器 | 3DPrintingCostCalc.com',
    metaDescription: '测算拓竹Bambu Lab P1S、X1C、A1多色打印冲刷废料重量、擦拭塔耗材与耗时惩罚。精准优化多色打印成本。',
    metaKeywords: 'AMS废料计算器, 拓竹多色吐丝多少, 3D打印换色废料计算, 拓竹冲刷量优化',
    badge: '多色换料废料优化器',
    heroTitle: '拓竹Bambu AMS',
    heroGradient: '多色冲刷废料与成本测算',
    heroSubtitle: '精准预测单喷嘴多色打印过程中换料吐丝与擦拭塔的实际克重与金钱损耗，帮您优化冲刷倍率、保护接单利润。',
    faqs: [
      {
        question: "为什么单喷嘴多色3D打印会产生这么多废料？",
        answer: "拓竹AMS等单喷嘴系统在每次更换颜色时，必须彻底将喷嘴熔池中上一卷颜色的残留塑料冲刷挤出，以避免浅色被深色污染。一个500层、每层换色3次的手办模型，总计需要经历1500次冲刷动作。"
      },
      {
        question: "一盘同时排布多个相同零件打印，为什么能大幅节省多色冲刷废料？",
        answer: "多色换料是按层执行的，不是按零件执行的。如果单打1只手办需要换色200次，整盘同打10只手办依然只换色200次！总吐丝废料完全相同，但分摊到每件成品上的废料暴降90%。"
      }
    ],
    labels: {
      configTitle: '多色任务参数设置',
      totalSwaps: '切片换色总次数：',
      flushVolume: '平均单次冲刷体积 (mm³)：',
      modelGrams: '模型净重克数 (g)：',
      spoolPriceKg: '耗材平均价格 (¥/kg)：',
      resultsTitle: '废料与损耗成本分析',
      wasteWeight: '冲刷吐丝与擦拭塔总重量：',
      wasteCost: '冲刷废料浪费金额：',
      ratio: '废料与成品重量比例：',
    }
  },
  resinCalc: {
    metaTitle: '光固化LCD/SLA 3D打印成本计算器 | 3DPrintingCostCalc.com',
    metaDescription: '精确计算UV光敏树脂每毫升成本、IPA异丙醇清洗液消耗、离型膜损耗及黑白黑白液晶屏折旧。',
    metaKeywords: '光固化成本计算器, 树脂打印一毫升多少钱, SLA打印机成本, 异丙醇清洗成本, 离型膜寿命折旧',
    badge: 'UV光固化树脂引擎',
    heroTitle: '光固化SLA / LCD',
    heroGradient: '3D打印综合成本计算器',
    heroSubtitle: '精准计算UV光敏树脂每毫升用量、异丙醇清洗损耗、离型膜FEP/ACF磨损与LCD曝光屏幕折旧，为精密手办与牙科打样提供科学报价依据。',
    faqs: [
      {
        question: "光敏树脂3D打印耗材一毫升多少钱？",
        answer: "标准405nm消费级光敏树脂售价通常在每公斤（约900ml）70元至120元之间，折合每毫升约0.08元至0.13元。高韧性类ABS树脂每毫升约0.15元至0.25元。"
      },
      {
        question: "光固化模型抽壳镂空能省多少树脂？",
        answer: "对于中大型手办或结构件，将实体模型抽壳为1.5mm至2.0mm壁厚，可直接减少50%到75%的树脂用量。务必在模型底部设置泄气孔和排胶孔，防止形成真空吸盘导致脱盘。"
      }
    ],
    labels: {
      configTitle: '树脂材料与机器损耗参数',
      bottlePrice: '树脂售价 (¥/1000ml)：',
      printMl: '模型切片体积 (ml / cm³)：',
      ipaCost: '酒精清洗与手套单次消耗 (¥)：',
      screenDeprec: '曝光屏与离型膜折旧 (¥)：',
      resultsTitle: '光固化成品总成本',
      rawResinCost: '光敏树脂材料费：',
      consumablesCost: '清洗耗材与磨损折旧：',
      totalJobCost: '单件综合生产成本：',
    }
  },
  legal: {
    privacyTitle: '隐私政策',
    privacyDesc: '所有3D模型文件（.stl、.3mf、.gcode）100%在您的本地浏览器中直接解析计算，绝无任何服务器上传。',
    privacyBadge: '零上传纯本地隐私准则',
    privacyGuarTitle: '核心隐私安全承诺',
    privacyGuarDesc: '3DPrintingCostCalc.com 采用纯无状态的前端客户端计算架构。当您拖入或选择3D模型文件时，所有几何三角面与切片指令完全由浏览器利用现代JavaScript引擎在本地RAM内存中解码计算。没有任何三维模型、CAD图纸、商业知识产权或G-code路径被上传至服务器或任何第三方。',
    sec1Title: '1. 零服务器文件检验架构',
    sec1Desc: 'STL、OBJ网格与3MF压缩包完全在浏览器临时内存中计算体积。页面一旦关闭或刷新，所有解析出的三维数据与文件缓冲区立即从系统内存彻底清除。',
    sec2Title: '2. 我们绝不收集个人信息',
    sec2Desc: '无需注册账号，无需登录。我们绝不收集您的真实姓名、电子邮箱、手机号或任何支付银行卡信息。',
    sec3Title: '3. 本地存储配置偏好',
    sec3Desc: '我们仅在您本地设备的localStorage中保存您的暗黑/明亮主题偏好以及默认电费单价设置，以方便您再次使用。',

    termsTitle: '服务条款',
    termsDesc: '3DPrintingCostCalc.com 服务协议、工程计算免责声明及创客使用规范。',
    termsBadge: '工程计算协议与免责声明',
    termsSummaryTitle: '协议概要',
    termsSummaryDesc: '3DPrintingCostCalc.com 为全球3D打印创客、打印农场及商业外包团队提供免费工程估算工具。使用本站工具即表示您知悉计算结果为理论工程预估，实际打样请以实测为准。',
    termsSec1Title: '1. 接受服务条款',
    termsSec1Desc: '访问并使用本网站及其包含的各类计算器，即视为您完全阅读并同意本条款及隐私声明。',
    termsSec2Title: '2. 工程计算容差免责声明',
    termsSec2Desc: '材料物理密度波动（±3%至5%）、不同切片软件的加速度与拐角降速曲线、填充样式及气温环境均会对实测成品重量产生细微影响。大批量生产交付前，请先打印样件并在校准电子秤上实测复核。',
    termsSec3Title: '3. 商业报价与自由使用',
    termsSec3Desc: '您可以自由使用本站生成的成本测算结果、报价单明细及TCO模型用于客户商务报价及商业核算。',

    contactTitle: '联系我们与反馈建议',
    contactSubtitle: '我们真诚欢迎广大创客社区提交空盘皮重数据、新机型参数及改进建议。',
    contactCardTitle: '联络通道',
    contactCardDesc: '对计算公式有疑问？希望我们收录某款新上市3D打印机？或在电子秤上测得了一款新空盘重量希望加入数据库？欢迎随时联络技术支持团队。',
    contactEmailLabel: '官方支持邮箱：',
    contactTurnaround: '回复周期：工作日通常在 24 至 48 小时内回复。',
    contactSuggestTitle: '提交新机型或空料盘皮重？',
    contactSuggestDesc: '提交硬件数据时，请附上品牌厂商、精确型号、高精度电子秤实称克重以及料盘材质（纸盘、PC注塑盘或组合盘）。'
  },
  printerProfile: {
    title: (b, m) => `${b} ${m} 3D打印成本计算器与电费指南 | 3DPrintingCostCalc.com`,
    description: (b, m, w) => `测算 ${b} ${m} 3D打印机的实际耗电功率 (${w}W)、设备折旧与耗材成本。纯本地免费计算。`,
    badge: '机型档案与经济性测算',
    heroH1: (b, m) => `${b} ${m} 3D打印成本与电费计算`,
    subtitle: (b, m, v, msrp) => `专为 ${b} ${m} (${v} mm 打印成型体积，售价约 ¥${msrp}) 量身定制的耗材用量、耗电量与折旧测算。`,
    smallPart: '小型手办零件 (50g)',
    medPart: '中型功能结构件 (150g)',
    largePart: '大型外壳/道具头盔 (500g)',
    specsTitle: '硬件技术规格',
    hardwareMsrp: '官方参考售价：',
    avgPower: '打印PLA平均功耗：',
    lifespan: '预估设计工作寿命：',
    buildVolume: '最大成型尺寸：',
    benchmarksTitle: '典型场景打印成本基准',
    colJob: '打印工件类型',
    colFilament: '耗材克重 (g)',
    colTime: '耗时 (h)',
    colMatCost: '原料费用',
    colElecCost: '耗电电费',
    colMachCost: '设备折旧',
    colTotalCost: '综合成本',
    faqs: (p) => [
      {
        question: `${p.brand} ${p.model} 打印时耗电量有多大？`,
        answer: `${p.brand} ${p.model} 在以55°C热床打印标准PLA时，平均运行功率约为 ${p.avgWattsPla} 瓦。按普通家庭电费计算，连续打印1小时电费不到0.1元。`
      },
      {
        question: `${p.brand} ${p.model} 每小时设备折旧该算多少钱？`,
        answer: `按设备售价约 ¥${p.msrpUsd} 与设计工作寿命 ${p.defaultLifespanHours.toLocaleString()} 小时测算，每打印一小时的纯设备折旧约为 ¥${(p.msrpUsd / p.defaultLifespanHours).toFixed(2)}。`
      }
    ]
  },
  materialProfile: {
    title: (n) => `${n} 3D打印耗材成本、物理密度与工艺参数指南 | 3DPrintingCostCalc.com`,
    description: (n, d) => `${n} 3D打印材料技术与成本手册。物理密度 ${d} g/cm³，每公斤米数折算及打印经济性分析。`,
    badge: '材料聚合物经济档案',
    heroH1: (n) => `${n} 耗材成本与技术参数`,
    subtitle: (n, d) => `基于物理密度 ${d} g/cm³ 的 ${n} 3D打印材料全方位技术与经济性分析。`,
    specsTitle: '物理与工艺参数',
    density: '材料物理密度：',
    nozzleTemp: '推荐喷嘴温度：',
    bedTemp: '推荐热床温度：',
    chamberReq: '是否需要封闭机箱：',
    costPerKg: '市场每公斤均价：',
    metersPerKg: '每公斤1.75mm米数：',
    shrinkage: '冷却体积收缩率：',
    faqs: (m) => [
      {
        question: `1公斤 ${m.name} 耗材大概需要多少钱？`,
        answer: `市场上常规品质的 ${m.name} 耗材平均售价约为每公斤 ¥${m.defaultPricePerKgUsd.toFixed(2)}（折合每克约 ¥${(m.defaultPricePerKgUsd / 1000).toFixed(3)}）。`
      },
      {
        question: `${m.name} 耗材的密度是多少？一卷有多长？`,
        answer: `${m.name} 的物理密度为 ${m.densityGcm3} g/cm³。标准1.75mm线径下，每公斤线材长度约为 ${(1000 / (m.densityGcm3 * 0.02405) / 100).toFixed(1)} 米。`
      }
    ]
  }
};
