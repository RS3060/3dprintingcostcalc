import type { PagesTranslationBundle } from './types';

export const koPages: PagesTranslationBundle = {
  printerTco: {
    metaTitle: '3D 프린터 비용 계산기 및 총소유비용 (TCO) 견적기 | 3DPrintingCostCalc.com',
    metaDescription: '3D 프린터 구매 기기 가격, 월간 전기세, 소모품 필라멘트 및 노즐 감가상각비를 정밀 계산. 상업용 3D 프린팅 출력 대행 서비스 대비 손익분기점을 즉시 시뮬레이션합니다.',
    metaKeywords: '3D 프린터 전기세, 3D 프린터 비용 계산, 3D 프린터 TCO, 3D 프린팅 원가, 3D 프린터 감가상각',
    badge: '하드웨어 TCO 및 전력 분석 엔진',
    heroTitle: '3D 프린터 구매 및 운용에',
    heroGradient: '실제로 얼마나 들까요?',
    heroSubtitle: '초기 하드웨어 구매 비용, 지속적인 전기 소비 전력, 필라멘트 소모량, 마모 부품 감가상각비를 종합 산출합니다. 상업용 외주 출력 대행 대비 투자금 회수 기간을 확인하세요.',
    faqs: [
      {
        question: "2026년 기준 3D 프린터 구매 가격대는 어떻게 되나요?",
        answer: "소비자용 3D 프린터는 주로 세 가지 등급으로 나뉩니다: 가성비 입문용 (뱀부랩 A1 Mini, 엔더-3 V3 등) 25만~45만 원대. 중급 고속 밀폐형 CoreXY (뱀부랩 P1S, K1C 등) 65만~120만 원대. 전문가용 엔지니어링 머신 (뱀부 X1-Carbon, 프루사 XL 등) 160만~500만 원 이상입니다."
      },
      {
        question: "3D 프린터 한 달 가동 시 전기 요금은 얼마나 나오나요?",
        answer: "월 120~150시간(하루 약 4~5시간) 가동 시 전력 소비량은 약 15~35kWh입니다. 한국 가정용 누진제 평균 전기요금(약 200원/kWh) 적용 시, 일반 PLA 출력 기준 월 전기세는 약 3,000~7,000원 수준입니다. 베드를 100°C로 유지하는 ABS 고온 출력 시 월 10,000~20,000원 정도가 소요됩니다."
      },
      {
        question: "3D 프린터의 총소유비용 (TCO)이란 무엇인가요?",
        answer: "TCO는 기기 본체 가격 외에 필라멘트 소모비, 전기 요금, 정기 교체가 필요한 노즐(경화강 또는 황동), PEI 빌드 플레이트, 벨트 및 윤활유 유지보수 비용을 모두 포함합니다. 70만 원 프린터로 연간 12롤을 사용하는 경우, 첫해 총소유비용은 약 110만~120만 원 선입니다."
      },
      {
        question: "출력 대행 서비스와 비교했을 때 몇 개를 출력해야 본전을 찾을 수 있나요?",
        answer: "전문 3D 프린팅 대행 서비스에서 100g 크기의 부품을 주문하면 배송비 포함 25,000~50,000원이 청구됩니다. 직접 출력 시 원재료비와 전기는 약 2,500~3,500원에 불과합니다. 50만 원 상당의 3D 프린터를 구매할 경우 중간 크기 부품 12~16개만 출력해도 기기 구매 비용 전액을 회수할 수 있습니다."
      }
    ],
    labels: {
      inputsTitle: '하드웨어 스펙 및 운용 변수',
      selectPrinter: '프리셋 3D 프린터 모델 선택:',
      customPrinter: '➕ 사용자 지정 프린터 (직접 입력)',
      upfrontPrice: '프린터 본체 구매 가격 (원):',
      powerDraw: '프린터 소비 전력 (W / 와트):',
      monthlyHours: '월간 예상 출력 시간 (시간):',
      spoolsMonth: '월간 필라멘트 소모량 (1kg 스풀 수):',
      spoolCost: '스풀 평균 구매 단가 (원):',
      elecRate: '지역 전기 요금 단가 (원/kWh):',
      lifespan: '기기 예상 내구연한 (년):',
      maintenance: '연간 소모품 및 유지보수 적립금 (원):',
      outsourcedCost: '상업용 외주 출력 등가 비용 (원/kg):',
      resultsTitle: 'TCO 총소유비용 종합 산출 결과',
      firstYearCost: '첫해 종합 지출 원가:',
      monthlyRunCost: '월간 지속 운용비용:',
      annualCost: '연간 고정 운영비:',
      breakevenTitle: '외주 대행 대비 투자금 회수 분기점',
      breakevenDesc: '1kg당 약 250,000~500,000원의 상업용 대행 서비스 대비:',
      breakevenMonths: '예상 투자금 회수 기간:',
    }
  },
  filamentCalc: {
    metaTitle: '3D 프린터 필라멘트 무게 길이 변환 계산기 | 3DPrintingCostCalc.com',
    metaDescription: '필라멘트 무게(g)를 길이(m)로 정밀 환산. 1.75mm 및 2.85mm 규격 PLA, PETG, ABS, TPU, 나일론의 1g당 및 1미터당 원가를 즉시 계산합니다.',
    metaKeywords: '필라멘트 길이 계산기, 필라멘트 무게 미터 변환, 1kg PLA 몇미터, 3D 프린터 필라멘트 단가',
    badge: '체적 물리학 변환 엔진',
    heroTitle: '3D 프린팅 필라멘트',
    heroGradient: '원가 및 길이 변환기',
    heroSubtitle: '스풀 가격, 무게(그램), 길이(미터), 부피(cm³)를 자유롭게 상호 환산합니다. 1.75mm와 2.85mm 직경 PLA, PETG, ABS, TPU 등의 g당·미터당 단가를 산출하세요.',
    faqs: [
      {
        question: "1kg PLA 필라멘트는 몇 미터인가요?",
        answer: "필라멘트 길이는 질량, 밀도, 단면적으로 계산됩니다: 길이 = 질량 ÷ (밀도 × π × 반지름²). 밀도 1.24 g/cm³의 표준 1.75mm PLA 기준, 1,000g 스풀의 총 길이는 약 332~335미터입니다."
      },
      {
        question: "왜 2.85mm 필라멘트는 1.75mm보다 미터 수가 적은가요?",
        answer: "단면적이 직경의 제곱에 비례하기 때문입니다. 2.85mm 선재의 단면적(6.38 mm²)은 1.75mm(2.41 mm²)보다 약 2.65배 두껍습니다. 따라서 1kg 기준 길이는 약 125미터에 불과하지만, 1그램당 실제 출력 가능한 체적은 동일합니다."
      }
    ],
    labels: {
      configTitle: '스풀 규격 및 재료 설정',
      selectPolymer: '소재 폴리머 종류:',
      customMat: '➕ 사용자 지정 소재 (직접 입력)',
      density: '소재 물리 밀도 (g/cm³):',
      diameter: '필라멘트 직경 규격:',
      spoolWeight: '스풀 순 중량 (그램):',
      spoolPrice: '스풀 구매 가격 (원):',
      resultsTitle: '길이 및 단위 원가 계산 결과',
      totalLengthMeters: '총 출력 가능 선재 길이:',
      costPerGram: '1그램당 원가:',
      costPerMeter: '1미터당 원가:',
      costPerFoot: '1피트당 원가:',
      volumeCm3: '스풀 총 가용 체적:',
    }
  },
  spoolCalc: {
    metaTitle: '빈 스풀 무게 데이터베이스 및 잔여 필라멘트 계산기 | 3DPrintingCostCalc.com',
    metaDescription: '주방 저울로 달아 잔여 필라멘트 무게를 즉시 확인하세요. Bambu Lab, Polymaker, eSUN, Sunlu, Prusament 등 40여 종 빈 스풀 무게 조회.',
    metaKeywords: '빈 스풀 무게, 필라멘트 잔량 측정, 뱀부랩 빈스풀 무게, 스풀 영점 조절, 3D 프린터 잔량 확인',
    badge: '스풀 공병 무게 인덱스',
    heroTitle: '빈 스풀 무게 조회',
    heroGradient: '& 잔여 필라멘트 계량 계산기',
    heroSubtitle: '사용 중인 스풀을 디지털 주방 저울에 올리세요. 제조사별 빈 스풀 무게를 차감하여 남은 필라멘트 순 중량을 정확히 계산하고 밤샘 출력 중 원료 부족 사고를 방지합니다.',
    faqs: [
      {
        question: "뱀부랩(Bambu Lab) 순정 빈 스풀의 무게는 얼마인가요?",
        answer: "뱀부랩 순정 재사용 가능 PC 플라스틱 스풀(RFID 칩 포함 2분할 구조)의 빈 무게는 약 212그램(고온용 폴리카보네이트 버전은 248g)입니다. 종이 보빈 리필형의 경우 내부 종이 심지 단독 무게는 약 37~45그램입니다."
      },
      {
        question: "출력 중간에 필라멘트가 끊기거나 모자라는 사고를 막으려면?",
        answer: "장시간 출력을 시작하기 전 스풀 통째로 저울에 올려 총 무게를 잽니다. 본 데이터베이스에서 해당 브랜드의 빈 스풀 무게를 뺀 뒤, 슬라이서에서 요구하는 무게보다 15~20g 이상 여유가 있다면 안심하고 출력을 시작할 수 있습니다."
      }
    ],
    labels: {
      searchSpool: '필라멘트 브랜드 및 스풀 모델 선택:',
      customTare: '➕ 사용자 지정 무게 (직접 입력)',
      currentWeight: '저울 총 측정 중량 (그램):',
      tareWeight: '빈 스풀 차감 중량 (그램):',
      resultsTitle: '실제 잔여 가용 필라멘트',
      remainingGrams: '남은 필라멘트 순 중량:',
      remainingMeters: '예상 잔여 사용 가능 미터:',
      percentLeft: '스풀 잔여 비율 백분율:',
    }
  },
  amsCalc: {
    metaTitle: 'Bambu AMS 멀티컬러 폐기물 똥 및 원가 계산기 | 3DPrintingCostCalc.com',
    metaDescription: '뱀부랩 P1S, X1C, A1 멀티컬러 출력 시 발생하는 퍼지 똥(Waste) 무게, 프라임 타워 소모량, 배치 다량 동시 출력 절약 효과를 시뮬레이션합니다.',
    metaKeywords: '뱀부 AMS 폐기물 계산기, 뱀부랩 똥 계산기, 멀티컬러 3D프린터 낭비, 프라임 타워 비용',
    badge: '멀티 소재 폐기물 최적화 엔진',
    heroTitle: 'Bambu AMS & 멀티컬러',
    heroGradient: '퍼지 폐기물 및 원가 계산기',
    heroSubtitle: '단일 노즐 색상 변경 중 퍼지 슈트로 버려지는 플라스틱 똥과 프라임 타워의 실제 무게와 금전적 손실을 정밀 산출합니다. 판 단위 대량 동시 출력을 통한 단가 절감 효과를 확인하세요.',
    faqs: [
      {
        question: "왜 단일 노즐 멀티컬러 3D 프린터는 이렇게 많은 똥(퍼지 폐기물)을 배출하나요?",
        answer: "뱀부 AMS와 같은 단일 노즐 시스템은 노즐 하나로 여러 색을 밀어냅니다. 색상을 바꿀 때 노즐 챔버 내부에 남아있는 이전 색상 잔여물을 완전히 밀어내지 않으면 색이 번지기 때문에 매 교체마다 퍼지 슈트로 밀어내게 됩니다."
      },
      {
        question: "빌드 플레이트에 동일 모델 여러 개를 한 번에 출력하면 왜 폐기물이 줄어드나요?",
        answer: "색상 변경은 '개수별'이 아니라 '레이어(층)별'로 발생합니다. 1개를 출력할 때 200번 교체가 일어난다면, 10개를 한 번에 출력해도 똑같이 200번만 교체됩니다. 총 퍼지 쓰레기는 같지만 10개로 분산되므로 개당 폐기량은 90% 급감합니다."
      }
    ],
    labels: {
      configTitle: '멀티컬러 작업 변수 설정',
      totalSwaps: '슬라이서 상의 색상 교체 총 횟수:',
      flushVolume: '교체당 평균 퍼지 중량 (g):',
      modelGrams: '제품 단품 순 무게 (g):',
      spoolPriceKg: '필라멘트 평균 구매가 (원/kg):',
      resultsTitle: '폐기물 및 손실 비용 분석',
      wasteWeight: '퍼지 똥 및 타워 총 폐기 무게:',
      wasteCost: '슈트로 버려진 필라멘트 손실 금액:',
      ratio: '완제품 대비 폐기물 중량 비율:',
    }
  },
  resinCalc: {
    metaTitle: '광경화 SLA / LCD 레진 3D 프린팅 원가 계산기 | 3DPrintingCostCalc.com',
    metaDescription: 'UV 광경화 레진의 mL당 단가, 모델 중공(비우기) 레진 절감 효과, IPA 세척액 소모, FEP/ACF 이형필름 마모, 모노 LCD 액정 감가상각비를 정밀 산출합니다.',
    metaKeywords: '광경화 원가 계산기, 레진 3D프린터 출력 비용, SLA 원가 산출, IPA 세척비, FEP필름 교체비용',
    badge: '광경화 레진 경제성 해석 엔진',
    heroTitle: '광경화 SLA / LCD 레진',
    heroGradient: '종합 제조 원가 및 소모품 계산기',
    heroSubtitle: 'UV 광경화 액상 레진의 mL당 단가, IPA 알코올 세척액 손모, FEP 이형 필름 마모, 노광 LCD 스크린 감가상각비를 포괄 계산합니다. 정밀 피규어 및 덴탈 시제품 제작 견적에 최적화되어 있습니다.',
    faqs: [
      {
        question: "광경화 레진 1mL당 원가는 얼마인가요?",
        answer: "일반 405nm 표준 소비자용 레진(1kg 병 약 25,000~35,000원, 약 900mL)의 경우 1mL당 약 28~40원입니다. 고강도 터프 레진은 50~80원, 덴탈 및 고온 특수 레진은 150~300원 수준입니다."
      },
      {
        question: "모델 내부 비우기(Hollowing)를 하면 레진을 얼마나 아낄 수 있나요?",
        answer: "중대형 피규어의 경우 벽 두께 1.5mm~2.0mm로 내부를 비우면 레진 소비량을 50%~75% 절감할 수 있습니다. 밀폐로 인한 진공 흡착 파손을 방지하기 위해 바닥면에 레진 배출 구멍을 꼭 만들어야 합니다."
      }
    ],
    labels: {
      configTitle: '레진 소재 및 기기 감가상각 설정',
      bottlePrice: '레진 1병 구매가 (원/1000ml):',
      printMl: '슬라이서 측정 모델 체적 (mL):',
      ipaCost: 'IPA 알코올 세척액 및 장갑 소모비 (원):',
      screenDeprec: 'FEP 필름 및 LCD 액정 감가상각 (원):',
      resultsTitle: '광경화 부품 단가 세부 내역',
      rawResinCost: '순수 광경화 액상 레진 원가:',
      consumablesCost: '세척제 및 필름/화면 소모 감가상각:',
      totalJobCost: '단품 완제품 종합 제조 원가:',
    }
  },
  legal: {
    privacyTitle: '개인정보 처리방침',
    privacyDesc: '모든 3D 파일(.stl, .3mf, .gcode)은 사용자의 웹 브라우저 내부에서 100% 로컬 연산되며 서버로 절대 업로드되지 않습니다.',
    privacyBadge: '무업로드 완전 로컬 보안 표준',
    privacyGuarTitle: '핵심 개인정보 및 데이터 보호 서약',
    privacyGuarDesc: '3DPrintingCostCalc.com 은 무상태(stateless) 클라이언트 사이드 웹 도구입니다. 3D 모델 파일을 드롭하거나 선택할 때 모든 삼각망 및 슬라이싱 데이터는 최신 자바스크립트 엔진을 통해 브라우저 임시 메모리에서만 연산됩니다. 어떠한 3D 파일, CAD 형상 데이터, 지적 재산권, G-code 툴패스도 서버나 제3자에게 전송되지 않습니다.',
    sec1Title: '1. 제로서버 파일 검사 아키텍처',
    sec1Desc: 'STL, OBJ, 3MF 패키지 해석은 사용자의 로컬 RAM 내에서만 수행됩니다. 브라우저 탭을 새로고침하거나 닫는 즉시 분석된 메쉬 데이터는 메모리에서 영구히 소멸됩니다.',
    sec2Title: '2. 수집하지 않는 개인 데이터',
    sec2Desc: '회원가입이나 로그인이 일절 필요하지 않습니다. 성함, 이메일, 전화번호, 결제 카드 정보 등 개인식별정보를 절대 수집하거나 저장하지 않습니다.',
    sec3Title: '3. 로컬 스토리지 브라우저 설정',
    sec3Desc: '사용자 편의를 위해 다크 모드 테마 및 기본 전기 요금 단가 설정값만을 사용자의 브라우저 localStorage에 안전하게 저장합니다.',

    termsTitle: '서비스 이용약관',
    termsDesc: '3DPrintingCostCalc.com 서비스 이용약관, 공학적 계산 면책 조항 및 메이커 준수 사항.',
    termsBadge: '공학 계산 규약 및 면책 공고',
    termsSummaryTitle: '약관 요약',
    termsSummaryDesc: '3DPrintingCostCalc.com 은 전 세계 메이커, 3D 프린팅 팜, 상업 시제품 제작팀을 위해 무료 공학 견적 도구를 제공합니다. 본 도구의 결과는 이론적 공학 예측치이므로 실제 양산 전 실측 확인을 권장합니다.',
    termsSec1Title: '1. 약관의 효력 및 동의',
    termsSec1Desc: '본 웹사이트 및 포함된 계산 도구를 이용함으로써 본 이용약관 및 개인정보 처리방침에 전적으로 동의하는 것으로 간주됩니다.',
    termsSec2Title: '2. 공학적 계산 오차 면책',
    termsSec2Desc: '원자재 밀도 편차(±3~5%), 슬라이서 가속도 프로파일, 인필 패턴, 작업장 온도에 따라 실제 출력 결과에는 미세한 차이가 발생할 수 있습니다. 상업용 양산 납품 전에는 정밀 전자저울을 통한 샘플 실측 검증을 권장합니다.',
    termsSec3Title: '3. 상업적 견적 산출 및 활용',
    termsSec3Desc: '본 사이트에서 산출된 원가 데이터, 견적 명세서, TCO 분석표는 귀사의 비즈니스 견적서 작성 및 판매 단가 책정에 자유롭게 사용하실 수 있습니다.',

    contactTitle: '문의 및 의견 제안',
    contactSubtitle: '커뮤니티의 빈 스풀 무게 제보, 신규 프린터 모델 추가 요청을 언제나 환영합니다.',
    contactCardTitle: '기술팀 문의처',
    contactCardDesc: '계산 공식에 관한 질문이 있으시거나, 새로 출시된 3D 프린터의 제원 추가를 요청하시거나, 직접 저울로 측정한 빈 스풀 무게 데이터를 기여하고 싶으시다면 언제든 연락해 주시기 바랍니다.',
    contactEmailLabel: '공식 고객지원 이메일:',
    contactTurnaround: '답변 소요 시간: 영업일 기준 통상 24~48시간 이내 회신.',
    contactSuggestTitle: '신규 기기 또는 빈 스풀 데이터 제보 안내',
    contactSuggestDesc: '데이터를 제보해주실 때는 제조사 브랜드, 정확한 모델명, 정밀 전자저울 실측 중량(그램 단위), 스풀 소재(종이, 플라스틱 등)를 기재해 주시기 바랍니다.'
  },
  printerProfile: {
    title: (b, m) => `${b} ${m} 3D 프린팅 출력 비용 계산기 및 전기세 안내 | 3DPrintingCostCalc.com`,
    description: (b, m, w) => `${b} ${m} 의 평균 소비전력 (${w}W), 하드웨어 감가상각비, 필라멘트 원가를 정밀 계산. 완전 무료 로컬 분석 도구.`,
    badge: '기종 프로필 및 경제성 분석',
    heroH1: (b, m) => `${b} ${m} 3D 프린트 원가 및 전기세 계산`,
    subtitle: (b, m, v, msrp) => `${b} ${m} (최대 빌드 볼륨 ${v} mm, 권장소비자가 약 ₩${msrp}) 전용 필라멘트 소모량, 소비 전력 및 시간당 감가상각비 산출.`,
    smallPart: '소형 미니어처 부품 (50g)',
    medPart: '중형 기능성 구조물 (150g)',
    largePart: '대형 시제품 / 헬멧 (500g)',
    specsTitle: '하드웨어 주요 기술 규격',
    hardwareMsrp: '공식 권장소비자가:',
    avgPower: 'PLA 출력 시 평균 소비전력:',
    lifespan: '설계 운용 기대수명:',
    buildVolume: '최대 빌드 볼륨:',
    benchmarksTitle: '대표 출력 시나리오 원가 기준',
    colJob: '출력 작업 종류',
    colFilament: '필라멘트 (g)',
    colTime: '시간 (h)',
    colMatCost: '원재료비',
    colElecCost: '전기요금',
    colMachCost: '기기감가상각',
    colTotalCost: '종합 원가',
    faqs: (p) => [
      {
        question: `${p.brand} ${p.model} 출력 시 전력 소모량은 얼마나 되나요?`,
        answer: `${p.brand} ${p.model} 기종으로 55°C 히팅 베드에서 일반 PLA를 출력할 때 평균 소비 전력은 약 ${p.avgWattsPla}W 입니다. 한국 일반 전기요금 기준 1시간 출력 시 전기세는 약 20~30원에 불과합니다.`
      },
      {
        question: `${p.brand} ${p.model} 의 1시간당 기기 감가상각비는 얼마인가요?`,
        answer: `소비자가 약 ₩${p.msrpUsd} 및 설계 기대수명 ${p.defaultLifespanHours.toLocaleString()} 시간으로 계산할 때, 순수 기기 감가상각비는 출력 1시간당 약 ₩${(p.msrpUsd / p.defaultLifespanHours).toFixed(2)} 수준입니다.`
      }
    ]
  },
  materialProfile: {
    title: (n) => `${n} 3D 프린터 필라멘트 원가, 물리 밀도 및 슬라이싱 가이드 | 3DPrintingCostCalc.com`,
    description: (n, d) => `${n} 필라멘트 물성 및 비용 핸드북. 물리 밀도 ${d} g/cm³, 1kg당 선재 미터 환산 및 최적 노즐 압출 온도.`,
    badge: '소재 폴리머 공학 핸드북',
    heroH1: (n) => `${n} 필라멘트 원가 및 물성 안내`,
    subtitle: (n, d) => `물리 밀도 ${d} g/cm³ 기반 ${n} 3D 프린팅 소재의 종합 기술 및 경제성 분석 데이터.`,
    specsTitle: '물리적 특성 및 권장 출력 파라미터',
    density: '폴리머 물리 밀도:',
    nozzleTemp: '권장 노즐 온도:',
    bedTemp: '권장 베드 온도:',
    chamberReq: '밀폐 챔버 필요 여부:',
    costPerKg: '시장 평균 구매가 / kg:',
    metersPerKg: '1kg당 선재 길이 (1.75mm):',
    shrinkage: '냉각 체적 수축률:',
    faqs: (m) => [
      {
        question: `1kg ${m.name} 필라멘트 가격은 대략 얼마인가요?`,
        answer: `시중에서 판매되는 일반적인 ${m.name} 필라멘트의 평균 가격은 1kg당 약 ₩${m.defaultPricePerKgUsd.toFixed(0)} (1그램당 약 ₩${(m.defaultPricePerKgUsd / 1000).toFixed(2)}) 수준입니다.`
      },
      {
        question: `${m.name} 의 밀도는 얼마인가요? 1롤에 몇 미터인가요?`,
        answer: `${m.name} 의 물리적 밀도는 ${m.densityGcm3} g/cm³ 입니다. 표준 1.75mm 직경 기준으로 1kg 1롤의 길이는 약 ${(1000 / (m.densityGcm3 * 0.02405) / 100).toFixed(1)} 미터입니다.`
      }
    ]
  }
};
