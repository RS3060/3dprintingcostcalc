import type { PagesTranslationBundle } from './types';

export const jaPages: PagesTranslationBundle = {
  printerTco: {
    metaTitle: '3Dプリンター運用コスト・TCO総所有コスト計算機 | 3DPrintingCostCalc.com',
    metaDescription: '3Dプリンターの購入本体価格、毎月の消費電力電気代、消耗品フィラメント、ノズル減価償却費を正確に試算。外注出力サービスとの損益分岐点を瞬時にシミュレーション。',
    metaKeywords: '3Dプリンター 電気代, 3Dプリンター コスト 計算, 3Dプリンター TCO, 3Dプリンター 減価償却, 造形コスト 計算機',
    badge: 'ハードウェアTCO＆消費電力解析エンジン',
    heroTitle: '3Dプリンターの購入・運用に',
    heroGradient: '実際にいくらかかるのか？',
    heroSubtitle: '初期本体購入費、日々の消費電力電気代、フィラメント消耗量、摩耗部品の減価償却費を精密算出。商用外注受託造形サービスに対する投資回収・損益分岐期間を導き出します。',
    faqs: [
      {
        question: "2026年現在、3Dプリンターの本体価格相場はどのくらいですか？",
        answer: "家庭用・業務用3Dプリンターは主に3つのクラスに分かれます：入門エントリー機（Bambu Lab A1 Mini、Ender-3 V3等）は3万〜5万円台。中級の高速密閉型CoreXY機（Bambu Lab P1S、Creality K1C等）は7万〜13万円台。エンジニアリング向けプロ機（Bambu X1-Carbon、Prusa XL等）は18万〜60万円以上となります。"
      },
      {
        question: "3Dプリンターを1ヶ月稼働させると電気代はいくらですか？",
        answer: "月間120〜150時間（1日約4〜5時間）稼働させた場合、電力消費量は約15〜35kWhです。日本の一般的な電気料金単価（約31円/kWh）で計算すると、標準的なPLA造形時の月間電気代は約450〜1,100円程度です。ヒートベッドを100℃に保つABS等の高温造形では月間約1,400〜2,500円となります。"
      },
      {
        question: "3DプリンターのTCO（総所有コスト）とは？",
        answer: "TCOには本体購入代金のほか、フィラメント代、電気代、定期交換が必要なノズル（硬化鋼や真鍮）、PEIビルドプレート、タイミングベルトや潤滑油のメンテナンス費が含まれます。本体6万円のプリンターで年間12スプールを消費する場合、初年度の総所有コストは約10万〜11万円が目安です。"
      },
      {
        question: "DMM.make等の外注出力サービスと比べて何個作れば元が取れますか？",
        answer: "商用造形サービスで100gのPLAパーツを出力すると送料込みで約3,000〜6,000円かかります。自宅で出力した場合の原料費＋電気代はわずか300〜400円です。5万円の3Dプリンターを購入した場合、中型パーツを約12〜16個造形するだけで本体代金を回収できます。"
      }
    ],
    labels: {
      inputsTitle: 'ハードウェア仕様および運用パラメータ',
      selectPrinter: 'プリセット3Dプリンター機種を選択：',
      customPrinter: '➕ カスタム機種（手動数値入力）',
      upfrontPrice: 'プリンター本体購入価格 (円)：',
      powerDraw: '平均消費電力 (W / ワット)：',
      monthlyHours: '月間想定稼働時間 (時間)：',
      spoolsMonth: '月間使用スプール本数 (1kg/本)：',
      spoolCost: 'スプール平均購入単価 (円)：',
      elecRate: '電気料金単価 (円/kWh)：',
      lifespan: '本体想定耐用年数 (年)：',
      maintenance: '年間保守・予備パーツ引当金 (円)：',
      outsourcedCost: '外注出力サービスの等価費用 (円/kg)：',
      resultsTitle: 'TCO総所有コスト試算結果',
      firstYearCost: '初年度総合運用支出：',
      monthlyRunCost: '毎月のランニングコスト：',
      annualCost: '年間継続運用費用：',
      breakevenTitle: '外注受託出力との投資回収損益分岐',
      breakevenDesc: '1kgあたり約30,000円〜50,000円の外注サービスと比較：',
      breakevenMonths: '投資回収までの想定期間：',
    }
  },
  filamentCalc: {
    metaTitle: '3Dプリンターフィラメント重量・長さ変換計算機 | 3DPrintingCostCalc.com',
    metaDescription: 'フィラメントの重量（g）から総延長（m）を高精度換算。1.75mmおよび2.85mmのPLA、PETG、ABS、TPU、ナイロンの1gあたり・1mあたりコストを即座に計算。',
    metaKeywords: 'フィラメント 長さ 計算, フィラメント 重量 メートル 変換, 1kg PLA 何メートル, 3Dプリンター フィラメント 単価',
    badge: '体積幾何学コンバーター',
    heroTitle: '3Dプリンターフィラメント',
    heroGradient: 'コスト＆長さ換算計算機',
    heroSubtitle: 'スプール購入価格、重量（グラム）、長さ（メートル）、体積（cm³）を瞬時に相互変換。1.75mmおよび2.85mm径のPLA、PETG、ABS、TPU等の1g単価・1m単価を算出します。',
    faqs: [
      {
        question: "1kgのPLAフィラメントは何メートルありますか？",
        answer: "フィラメントの長さは質量、材料密度、断面積から計算されます：長さ = 質量 ÷ (密度 × π × 半径²)。密度1.24 g/cm³の標準的な1.75mm PLAの場合、1,000gのスプール総延長は約332〜335メートルとなります。"
      },
      {
        question: "なぜ2.85mmフィラメントは1.75mmよりメーター数が少ないのですか？",
        answer: "断面積は直径の2乗に比例するため、2.85mmフィラメントの断面積（約6.38 mm²）は1.75mm（約2.41 mm²）の約2.65倍になります。そのため1kgスプールあたりの長さは約125mとなりますが、1gあたりに出力できる体積は全く同じです。"
      }
    ],
    labels: {
      configTitle: 'スプール仕様および材料設定',
      selectPolymer: '樹脂マテリアル種別：',
      customMat: '➕ カスタム材料（手動入力）',
      density: 'ポリマー物理密度 (g/cm³)：',
      diameter: 'フィラメント径規格：',
      spoolWeight: 'スプール正味重量 (g)：',
      spoolPrice: 'スプール購入価格 (円)：',
      resultsTitle: '体積および単位コスト計算結果',
      totalLengthMeters: '総出力可能フィラメント長さ：',
      costPerGram: '1グラムあたりコスト：',
      costPerMeter: '1メートルあたりコスト：',
      costPerFoot: '1フィートあたりコスト：',
      volumeCm3: 'スプール総有効体積：',
    }
  },
  spoolCalc: {
    metaTitle: '空スプール風袋重量データベース＆残量計算機 | 3DPrintingCostCalc.com',
    metaDescription: 'キッチンスケールで量るだけでフィラメント残量を即座に判定。Bambu Lab、Prusa、Polymaker、eSUN、Sunlu等の空スプール風袋引きデータベース。',
    metaKeywords: '空スプール 重量, フィラメント 残量 測り方, バンブラボ 空スプール 重さ, スプール 風袋引き, 3Dプリント 残量 不足',
    badge: 'スプール風袋重量インデックス',
    heroTitle: '空スプール風袋引き照会',
    heroGradient: '＆フィラメント残量計量計算機',
    heroSubtitle: '使いかけのスプールをデジタルキッチンスケールに載せるだけ。メーカー各社の空スプール自重（風袋）をワンクリックで差し引き、夜間プリント中のフィラメント切れ事故を防止します。',
    faqs: [
      {
        question: "Bambu Lab（バンブラボ）の純正空スプールの重さは何グラムですか？",
        answer: "Bambu Lab純正の再利用可能PCプラスチックスプール（RFIDチップ付き2分割式）の風袋重量は約210g〜220gです。紙管芯のみのリフィル交換タイプの場合、内側のボール紙芯単体は約37g〜45gです。"
      },
      {
        question: "プリント途中のフィラメント切れを防ぐにはどうすればよいですか？",
        answer: "長時間造形を開始する前に、スプールごとスケールに載せて総重量を測定します。当データベースでメーカーの風袋重量を引いて正味残量を算出し、スライサーの必要重量より15g以上余裕があれば安心して造形を開始できます。"
      }
    ],
    labels: {
      searchSpool: 'メーカーおよびスプール型番を選択：',
      customTare: '➕ カスタム風袋重量（手動入力）',
      currentWeight: 'スケール総測定重量 (g)：',
      tareWeight: '空スプール風袋引き重量 (g)：',
      resultsTitle: '実際の有効残量計算結果',
      remainingGrams: 'フィラメント正味残量：',
      remainingMeters: '想定残長メーター数：',
      percentLeft: 'スプール残量パーセンテージ：',
    }
  },
  amsCalc: {
    metaTitle: 'Bambu AMSマルチカラーパージ廃棄物・コスト計算機 | 3DPrintingCostCalc.com',
    metaDescription: 'Bambu Lab P1S/X1C/A1のマルチカラー造形におけるうんち（パージ）廃棄量、プライムタワー消費、バッチ印刷による廃棄物激減シミュレーション。',
    metaKeywords: 'Bambu AMS 廃棄 計算, バンブラボ うんち 計算機, マルチカラー 3Dプリント 廃棄量, プライムタワー コスト',
    badge: 'マルチマテリアル廃棄物最適化エンジン',
    heroTitle: 'Bambu AMS＆マルチカラー',
    heroGradient: 'パージ廃棄物・コスト計算機',
    heroSubtitle: '単一ノズルの色替えパージシュートから排出されるフィラメント（うんち）とプライムタワーの総廃棄重量・損失金額を正確に試算。複数個同時配置によるコスト大幅圧縮を可視化します。',
    faqs: [
      {
        question: "なぜ単一ノズルのマルチカラー造形は大量のパージゴミが出るのですか？",
        answer: "Bambu AMSなどの単一ノズルシステムでは、色を切り替えるたびにノズルヒートブロック内の前色樹脂を完全にパージして押し出さなければ、色が混ざってしまいます。500回色替えを行うモデルでは、パージだけで150g〜300g以上廃棄されることがあります。"
      },
      {
        question: "ビルドプレートに同一モデルを複数個並べると、なぜ廃棄物が減るのですか？",
        answer: "色替えは「レイヤーごと」に行われ、個数ごとではありません。1体造形で200回色替えが必要な場合、10体並べても色替え回数は同じ200回のままです。パージ総量は変わらず10体で均等分散されるため、1体あたりの廃棄率は90%激減します。"
      }
    ],
    labels: {
      configTitle: 'マルチカラー造形ジョブ設定',
      totalSwaps: 'スライサー上のフィラメント切替総回数：',
      flushVolume: '1回あたり平均パージ量 (g)：',
      modelGrams: '製品単体正味重量 (g)：',
      spoolPriceKg: 'フィラメント平均価格 (円/kg)：',
      resultsTitle: '廃棄物およびコスト損失分析',
      wasteWeight: 'パージゴミおよびタワー総廃棄重量：',
      wasteCost: 'パージシュートに消えた材料損失金額：',
      ratio: '製品に対する廃棄物比率：',
    }
  },
  resinCalc: {
    metaTitle: '光造形SLA/LCDレジン3Dプリントコスト計算機 | 3DPrintingCostCalc.com',
    metaDescription: 'UV光硬化レジンのmL単価、中空化（肉抜き）によるレジン節約効果、IPA洗浄液損耗、FEP/ACFフィルム摩耗、モノクロLCD液晶寿命の減価償却費を正確に試算。',
    metaKeywords: '光造形 コスト 計算機, レジン 3Dプリンター 単価, SLA コスト 算出, IPA 洗浄コスト, FEPフィルム 寿命',
    badge: '光硬化レジン経済工学エンジン',
    heroTitle: '光造形SLA / LCDレジン',
    heroGradient: '造形総合コスト＆消耗品計算機',
    heroSubtitle: 'UV光硬化レジンのミリリットル単価、IPAアルコール洗浄液の劣化補充、FEP離型フィルムの摩耗、露光LCDスクリーンの減価償却費を精密網羅。フィギュア・デンタル造形の正確な見積もりに。',
    faqs: [
      {
        question: "光造形レジンの1mLあたりのコストはいくらですか？",
        answer: "一般的な405nm波長の標準レジン（1kgボトル約3,500円〜5,000円、約900mL）の場合、1mLあたり約3.8円〜5.5円です。高強度ABSライクレジンで5円〜8円、歯科用・耐熱特殊レジンでは15円〜30円程度となります。"
      },
      {
        question: "モデルを中空化（肉抜き）するとどれくらいレジン代を節約できますか？",
        answer: "中〜大型フィギュアを壁厚1.5mm〜2.0mmで中空化すると、レジン消費量を50%〜75%削減できます。内部の未硬化レジンを逃がすための排液穴・空気穴を底面に必ず設けてください。"
      }
    ],
    labels: {
      configTitle: 'レジン材料および損耗パラメータ',
      bottlePrice: 'レジンボトル価格 (円/1000ml)：',
      printMl: 'スライサー算出モデル体積 (mL)：',
      ipaCost: 'IPA洗浄液および手袋損耗費 (円)：',
      screenDeprec: 'FEPフィルムおよび液晶画面減価償却 (円)：',
      resultsTitle: '光造形パーツ単価内訳',
      rawResinCost: '光硬化液状レジン純材料費：',
      consumablesCost: '洗浄薬液・フィルム・スクリーン消耗費：',
      totalJobCost: '単体完成品総合製造コスト：',
    }
  },
  legal: {
    privacyTitle: 'プライバシーポリシー',
    privacyDesc: 'すべての3Dデータ（.stl、.3mf、.gcode）はお使いのブラウザ内部でのみ完全ローカル解析され、サーバーへのファイル送信は一切行われません。',
    privacyBadge: '完全ローカル処理プライバシースタンダード',
    privacyGuarTitle: 'プライバシー基本誓約',
    privacyGuarDesc: '3DPrintingCostCalc.com は完全にステートレスなクライアントサイドWebツールです。3Dモデルファイルをドロップまたは選択した際、ブラウザのJavaScriptメモリ内でのみポリゴン計算が行われます。お客様の3Dモデル、CAD設計データ、G-codeパスが外部サーバーや第三者に送信・保管されることは一切ありません。',
    sec1Title: '1. サーバー非送信ファイル解析アーキテクチャ',
    sec1Desc: 'STL、OBJ、3MF、G-codeファイルの解析はローカルRAM上でのみ実行されます。ブラウザのタブを閉じるかリロードした瞬間に、展開されたメッシュ座標はメモリから完全に消去されます。',
    sec2Title: '2. 取得しない個人情報',
    sec2Desc: '当サイトの利用に会員登録やログインは一切不要です。氏名、メールアドレス、クレジットカード番号などの個人情報を収集・保存することはありません。',
    sec3Title: '3. ローカルストレージ設定',
    sec3Desc: 'ダーク/ライトテーマ設定やデフォルトの電気料金単価など、利便性の向上に必要な最小限の設定のみをお客様の端末のlocalStorageに保存しています。',

    termsTitle: '利用規約',
    termsDesc: '3DPrintingCostCalc.com のサービス利用規約、計算値の免責事項およびライセンス方針。',
    termsBadge: '利用規約および計算免責事項',
    termsSummaryTitle: '規約要約',
    termsSummaryDesc: '3DPrintingCostCalc.com は3Dプリンターユーザー、プリントファーム、受託造形事業者向けに無料の工学試算ツールを提供しています。本ツールの計算結果は理論上の目安であり、実際の量産前には実機測定を行ってください。',
    termsSec1Title: '1. 規約への同意',
    termsSec1Desc: '当サイトおよび提供される計算機を利用することにより、本利用規約およびプライバシーポリシーに同意したものとみなされます。',
    termsSec2Title: '2. 工学的公差および計算免責',
    termsSec2Desc: '材料密度の公差（±3〜5%）、スライサーの加速度制御、インフィル構造、室温環境により実測値は変動します。大量生産や商用納品の前には、校正された精密電子スケールでの実測検証を推奨します。',
    termsSec3Title: '3. 商用利用および見積もりへの活用',
    termsSec3Desc: '当ツールの計算結果、コスト内訳データ、見積もり出力機能は、商用見積書や自社サービスの価格設定に自由にご活用いただけます。',

    contactTitle: 'お問い合わせ・フィードバック',
    contactSubtitle: 'コミュニティからの空スプール風袋重量データ、新機種リクエスト、改善提案を歓迎します。',
    contactCardTitle: '開発チームへのお問い合わせ',
    contactCardDesc: '計算ロジックに関するご質問、新しい3Dプリンター機種の追加要望、ご自身で測定した空スプールの風袋重量データのご提供など、お気軽にご連絡ください。',
    contactEmailLabel: '公式サポート窓口メール：',
    contactTurnaround: '返信目安：通常、営業日ベースで24〜48時間以内に返信いたします。',
    contactSuggestTitle: '新機種または空スプール風袋をご提供いただく場合',
    contactSuggestDesc: 'ハードウェアデータを送信される際は、メーカー名、正確な型番、デジタルスケール実測値（g単位）、スプール材質（段ボール、プラスチック等）を明記してください。'
  },
  printerProfile: {
    title: (b, m) => `${b} ${m} 3Dプリントコスト計算機＆電気代ガイド | 3DPrintingCostCalc.com`,
    description: (b, m, w) => `${b} ${m} の平均消費電力 (${w}W)、ハードウェア減価償却費、フィラメント代を正確に計算。完全ローカル無料ツール。`,
    badge: '機種プロファイル＆経済性シミュレーター',
    heroH1: (b, m) => `${b} ${m} 3Dプリントコスト＆電気代試算`,
    subtitle: (b, m, v, msrp) => `${b} ${m}（最大造形体積 ${v} mm、参考本体価格 約¥${msrp}）専用のフィラメント消費、消費電力、時間あたり減価償却計算。`,
    smallPart: '小型ミニチュアパーツ (50g)',
    medPart: '中型機能性パーツ (150g)',
    largePart: '大型プロトタイプ・ヘルメット (500g)',
    specsTitle: 'ハードウェア主要スペック',
    hardwareMsrp: '本体参考価格：',
    avgPower: 'PLA造形時平均電力：',
    lifespan: '設計稼働耐用年数：',
    buildVolume: '最大造形サイズ：',
    benchmarksTitle: '代表的な造形シナリオ試算',
    colJob: '造形ジョブ種別',
    colFilament: '重量 (g)',
    colTime: '時間 (h)',
    colMatCost: '原料費',
    colElecCost: '電気代',
    colMachCost: '本体償却費',
    colTotalCost: '合計コスト',
    faqs: (p) => [
      {
        question: `${p.brand} ${p.model} の稼働時消費電力はどれくらいですか？`,
        answer: `${p.brand} ${p.model} でベッド温度55℃の標準PLAを印刷する際の平均消費電力は約 ${p.avgWattsPla}W です。一般的な電気料金単価で1時間あたりわずか約2〜3円です。`
      },
      {
        question: `${p.brand} ${p.model} の1時間あたりの本体減価償却費は？`,
        answer: `本体価格約 ¥${p.msrpUsd}、想定耐用寿命 ${p.defaultLifespanHours.toLocaleString()} 時間で計算した場合、1稼働時間あたりの機械減価償却費は約 ¥${(p.msrpUsd / p.defaultLifespanHours).toFixed(2)} となります。`
      }
    ]
  },
  materialProfile: {
    title: (n) => `${n} 3Dプリント材料コスト・物理密度・スライス設定ガイド | 3DPrintingCostCalc.com`,
    description: (n, d) => `${n} フィラメントの物性・コスト詳細ハンドブック。物理密度 ${d} g/cm³、1kgあたりメーター数換算および推奨ノズル温度。`,
    badge: 'ポリマー材料工学ハンドブック',
    heroH1: (n) => `${n} フィラメント コスト＆物性ガイド`,
    subtitle: (n, d) => `物理密度 ${d} g/cm³ に基づく ${n} 3Dプリンター材料の技術仕様およびコスト経済性データ。`,
    specsTitle: '物理特性および推奨印刷パラメータ',
    density: '樹脂物理密度：',
    nozzleTemp: '推奨ノズル温度：',
    bedTemp: '推奨ヒートベッド温度：',
    chamberReq: '密閉エンクロージャー必要性：',
    costPerKg: '市場平均購入単価 / kg：',
    metersPerKg: '1kgあたり長さ (1.75mm)：',
    shrinkage: '冷却体積収縮率：',
    faqs: (m) => [
      {
        question: `1kgの ${m.name} フィラメントはいくらくらいですか？`,
        answer: `市販されている一般的な ${m.name} フィラメントの相場は1kgあたり約 ¥${m.defaultPricePerKgUsd.toFixed(0)} 前後（1グラムあたり約 ¥${(m.defaultPricePerKgUsd / 1000).toFixed(2)}）です。`
      },
      {
        question: `${m.name} の密度はどれくらいですか？1巻で何メートルありますか？`,
        answer: `${m.name} の物理密度は ${m.densityGcm3} g/cm³ です。標準的な1.75mm径の場合、1kgあたり約 ${(1000 / (m.densityGcm3 * 0.02405) / 100).toFixed(1)} メートルとなります。`
      }
    ]
  }
};
