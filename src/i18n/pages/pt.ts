import type { PagesTranslationBundle } from './types';

export const ptPages: PagesTranslationBundle = {
  printerTco: {
    metaTitle: 'Calculadora de Custo de Impressora 3D e TCO de Propriedade | 3DPrintingCostCalc.com',
    metaDescription: 'Calcule o custo real de compra e operação de uma impressora 3D. Compare preço do hardware, gasto de energia mensal, manutenção e ponto de equilíbrio frente a serviços terceirizados.',
    metaKeywords: 'custo impressora 3d, energia impressora 3d, tco impressora 3d, amortizacao impressora 3d, calcular custo impressao 3d',
    badge: 'Motor de TCO e Energia de Hardware',
    heroTitle: 'Quanto Custa Realmente',
    heroGradient: 'Comprar e Operar uma Impressora 3D?',
    heroSubtitle: 'Compare o preço de aquisição do equipamento, o consumo elétrico contínuo, as bobinas de filamento gastas e o desgaste de bicos. Descubra o prazo exato de retorno sobre o investimento frente a serviços terceirizados.',
    faqs: [
      {
        question: "Quanto custa uma impressora 3D em 2026?",
        answer: "As impressoras 3D dividem-se em 3 categorias principais: Entrada econômica (Bambu Lab A1 Mini, Ender-3 V3) entre R$ 1.800 e R$ 2.800. Intermediária fechada de alta velocidade CoreXY (Bambu Lab P1S, K1C) entre R$ 4.500 e R$ 7.500. Profissional multimaterial de engenharia (Bambu X1-Carbon, Prusa XL) entre R$ 10.000 e mais de R$ 30.000."
      },
      {
        question: "Quanto gasta de energia elétrica uma impressora 3D por mês?",
        answer: "Operando de 120 a 150 horas por mês (cerca de 4 a 5 horas por dia), o consumo fica entre 15 e 35 kWh. Na tarifa média residencial (aprox. R$ 0,85/kWh), o gasto mensal para imprimir PLA fica entre R$ 12,00 e R$ 30,00. Para ABS com mesa a 100 °C, o custo fica entre R$ 35,00 e R$ 70,00 mensais."
      },
      {
        question: "O que é o Custo Total de Propriedade (TCO) de uma impressora 3D?",
        answer: "O TCO engloba o preço da máquina somado aos filamentos consumidos, à energia elétrica, aos bicos de reposição (aço endurecido ou latão), às folhas PEI e à manutenção periódica (lubrificação, correias). Para uma máquina de R$ 5.000 que consome 12 bobinas no ano, o TCO de primeiro ano gira em torno de R$ 7.500."
      },
      {
        question: "Quantas peças preciso imprimir para pagar o investimento da impressora?",
        answer: "Birôs comerciais cobram de R$ 150 a R$ 300 por uma peça de 100g em PLA. Imprimir essa mesma peça em casa custa cerca de R$ 15 a R$ 22 em material e luz. Comprando uma impressora de R$ 2.500, o investimento se paga com a impressão de apenas 12 a 16 peças médias."
      }
    ],
    labels: {
      inputsTitle: 'Parâmetros de Hardware e Operação',
      selectPrinter: 'Selecionar Modelo de Impressora:',
      customPrinter: '➕ Impressora Personalizada (Entrada manual)',
      upfrontPrice: 'Preço de Compra da Máquina (R$):',
      powerDraw: 'Potência Média de Consumo (Watts):',
      monthlyHours: 'Horas de Impressão por Mês:',
      spoolsMonth: 'Bobinas Usadas por Mês (1 kg):',
      spoolCost: 'Preço Médio da Bobina (R$):',
      elecRate: 'Tarifa de Energia (R$/kWh):',
      lifespan: 'Vida Útil Estimada da Máquina (Anos):',
      maintenance: 'Reserva Anual para Peças e Manutenção (R$):',
      outsourcedCost: 'Preço Equivalente em Birô Comercial (R$/kg):',
      resultsTitle: 'Estrutura do Custo Total de Propriedade (TCO)',
      firstYearCost: 'Custo Total do Primeiro Ano:',
      monthlyRunCost: 'Custo Operacional Mensal:',
      annualCost: 'Custo de Operação Anual:',
      breakevenTitle: 'Ponto de Equilíbrio: Compra vs Terceirização',
      breakevenDesc: 'Frente a serviços comerciais cobrando ~R$ 1.500 a R$ 3.000/kg:',
      breakevenMonths: 'Prazo Estimado de Retorno:',
    }
  },
  filamentCalc: {
    metaTitle: 'Calculadora de Peso para Comprimento de Filamento 3D | 3DPrintingCostCalc.com',
    metaDescription: 'Converta gramas de filamento em metros. Calcule o custo por grama e por metro para filamentos de 1.75mm e 2.85mm de PLA, PETG, ABS, TPU e Nylon.',
    metaKeywords: 'calculadora comprimento filamento, peso para metros filamento 3d, quantos metros tem 1kg pla, preco metro filamento 3d',
    badge: 'Conversor de Física Volumétrica',
    heroTitle: 'Filamento de Impressão 3D',
    heroGradient: 'Calculadora de Custo e Comprimento',
    heroSubtitle: 'Converta com precisão entre preço do carretel, peso em gramas, metragem e volume em cm³. Calcule o custo exato por grama e por metro em diâmetros de 1.75 mm e 2.85 mm.',
    faqs: [
      {
        question: "Quantos metros tem um carretel de 1 kg de PLA?",
        answer: "O comprimento é calculado a partir da massa, densidade e área da seção: Comprimento = Massa ÷ (Densidade × π × Raio²). Para filamento padrão 1.75 mm com densidade de 1.24 g/cm³, uma bobina de 1.000 g tem aproximadamente 332 a 335 metros de extensão."
      },
      {
        question: "Por que o filamento de 2.85 mm tem menos metros que o de 1.75 mm?",
        answer: "A área da seção aumenta com o quadrado do diâmetro. O filamento de 2.85 mm é 2.65 vezes mais espesso que o de 1.75 mm. Portanto, 1 kg de PLA de 2.85 mm rende cerca de 125 metros, mas o volume impresso por grama é exatamente o mesmo."
      }
    ],
    labels: {
      configTitle: 'Configuração de Carretel e Polímero',
      selectPolymer: 'Tipo de Polímero / Filamento:',
      customMat: '➕ Material Personalizado (Entrada manual)',
      density: 'Densidade do Material (g/cm³):',
      diameter: 'Diâmetro do Filamento:',
      spoolWeight: 'Peso Líquido do Filamento (gramas):',
      spoolPrice: 'Preço de Compra do Carretel (R$):',
      resultsTitle: 'Resultados Volumétricos e Custos Unitários',
      totalLengthMeters: 'Comprimento Total Imprimível:',
      costPerGram: 'Custo por Grama:',
      costPerMeter: 'Custo por Metro:',
      costPerFoot: 'Custo por Pé:',
      volumeCm3: 'Volume Total Útil de Polímero:',
    }
  },
  spoolCalc: {
    metaTitle: 'Banco de Dados de Tara de Carretéis Vazios e Filamento Restante | 3DPrintingCostCalc.com',
    metaDescription: 'Pese seu carretel na balança de cozinha para saber quanto filamento resta. Mais de 40 taras cadastradas: Bambu Lab, Polymaker, eSUN, Sunlu, Creality e Prusa.',
    metaKeywords: 'peso carretel vazio bambu lab, tara carretel filamento, como saber quanto filamento resta, pesar filamento 3d',
    badge: 'Índice de Taras de Carretéis Vazios',
    heroTitle: 'Consulta de Tara de Carretéis',
    heroGradient: 'e Filamento Restante na Balança',
    heroSubtitle: 'Coloque seu carretel aberto em uma balança de cozinha. Subtraia a tara do fabricante para saber o peso líquido e a metragem restantes, prevenindo falhas por falta de material durante a noite.',
    faqs: [
      {
        question: "Quanto pesa um carretel vazio original da Bambu Lab?",
        answer: "O carretel reutilizável original da Bambu Lab em plástico PC (2 partes com chip RFID) pesa cerca de 212 gramas (a versão em policarbonato para alta temperatura pesa 248 g). Ao usar refil de papelão, o miolo de papelão sozinho pesa entre 37 e 45 gramas."
      },
      {
        question: "Como evitar que o filamento acabe durante uma impressão longa?",
        answer: "Antes de iniciar, pese o carretel inteiro em uma balança de precisão. Selecione o fabricante em nosso banco para descontar a tara. Se o peso líquido restante for ao menos 15 a 20 gramas superior ao estimado pelo fatiador, pode imprimir com segurança."
      }
    ],
    labels: {
      searchSpool: 'Selecionar Marca e Modelo do Carretel:',
      customTare: '➕ Tara Personalizada (Entrada manual)',
      currentWeight: 'Leitura Bruta da Balança (gramas):',
      tareWeight: 'Tara do Carretel Vazio (gramas):',
      resultsTitle: 'Filamento Realmente Disponível',
      remainingGrams: 'Peso Líquido de Filamento Restante:',
      remainingMeters: 'Metros Úteis Estimados:',
      percentLeft: 'Porcentagem Restante no Carretel:',
    }
  },
  amsCalc: {
    metaTitle: 'Calculadora de Purga Bambu AMS e Impressão Colorida | 3DPrintingCostCalc.com',
    metaDescription: 'Calcule o peso e o custo dos resíduos de purga (cocô Bambu) e torre de limpeza. Descubra como a produção em lote na mesma mesa reduz o desperdício em 90%.',
    metaKeywords: 'calculadora descarte bambu ams, coco bambu lab purga, custo impressao 3d colorida, torre de purga ams',
    badge: 'Economia de Lotes Multimaterial',
    heroTitle: 'Bambu AMS e Multicor',
    heroGradient: 'Calculadora de Desperdício e Purga',
    heroSubtitle: 'Calcule exatamente os gramas e reais perdidos pelo bocal de purga e pela torre de limpeza. Veja como imprimir várias peças em uma mesma mesa dilui o desperdício para proteger seu lucro.',
    faqs: [
      {
        question: "Por que a impressão 3D colorida com bico único gera tanto resíduo de purga?",
        answer: "Sistemas de bico único (como o Bambu Lab AMS) precisam purgar completamente o plástico fundido da cor anterior antes de iniciar a nova cor para evitar manchas. Uma peça com 500 trocas de cor pode facilmente purgar de 150g a 300g de material na calha de descarte."
      },
      {
        question: "Por que imprimir várias peças juntas reduz o desperdício?",
        answer: "A troca de cor ocorre por camada, não por objeto. Se uma peça precisa de 200 trocas, colocar 10 peças iguais na mesma mesa continuará exigindo exatamente as mesmas 200 trocas! A purga total permanece idêntica mas é dividida por 10 peças, cortando a perda individual em 90%."
      }
    ],
    labels: {
      configTitle: 'Parâmetros do Trabalho Multicor',
      totalSwaps: 'Total de Trocas de Cor no Fatiador:',
      flushVolume: 'Purga Média por Troca (g):',
      modelGrams: 'Peso Líquido de Uma Peça Única (g):',
      spoolPriceKg: 'Preço Médio do Filamento (R$/kg):',
      resultsTitle: 'Análise de Desperdício e Custos',
      wasteWeight: 'Peso Total Purgas + Torre de Limpeza:',
      wasteCost: 'Valor Desperdiçado no Descarte:',
      ratio: 'Razão Desperdício / Peça Pronta:',
    }
  },
  resinCalc: {
    metaTitle: 'Calculadora de Custo de Impressão em Resina SLA / LCD | 3DPrintingCostCalc.com',
    metaDescription: 'Calcule o custo de peças em resina líquida: valor por mL, economia por oquidão (hollowing), álcool isopropílico IPA, película FEP e vida útil da tela LCD.',
    metaKeywords: 'custo impressao resina 3d, preco por ml resina sla, calcular impressora 3d resina, desgaste fep lcd resina',
    badge: 'Motor de Fotopolímero SLA / MSLA',
    heroTitle: 'Resina SLA / LCD',
    heroGradient: 'Calculadora de Custo e Insumos',
    heroSubtitle: 'Precifique com precisão técnica peças em resina fotopolímero. Considere o custo por mL, a economia ao ocar modelos, o banho de álcool isopropílico de lavagem, o desgaste do filme FEP e a depreciação da tela LCD UV.',
    faqs: [
      {
        question: "Quanto custa um mililitro (mL) de resina para impressora 3D?",
        answer: "A resina padrão 405nm (cerca de R$ 130 a R$ 180 o frasco de 1.000g / ~900 mL) custa em torno de R$ 0,15 a R$ 0,20 por mL. Resinas de alta tenacidade tipo ABS custam de R$ 0,25 a R$ 0,40 por mL, e resinas odontológicas superam R$ 0,80 por mL."
      },
      {
        question: "Quanta resina economizo ao ocar (fazer hollow) uma peça?",
        answer: "Ocar uma peça com espessura de parede de 1.5mm a 2.0mm reduz o consumo de resina em 50% a 75% em modelos médios ou grandes. Lembre-se de sempre incluir orifícios de drenagem na base para permitir a saída da resina líquida interna e evitar o efeito de sucção."
      }
    ],
    labels: {
      configTitle: 'Parâmetros de Resina e Desgaste',
      bottlePrice: 'Preço do Frasco de Resina (R$):',
      printMl: 'Volume Fatiado da Peça (mL):',
      ipaCost: 'Álcool Isopropílico e Luvas (R$):',
      screenDeprec: 'Desgaste Filme FEP e Tela LCD (R$):',
      resultsTitle: 'Composição de Custos da Peça em Resina',
      rawResinCost: 'Custo Líquido da Resina Fotopolímero:',
      consumablesCost: 'Químicos de Lavagem e Desgaste Tela/FEP:',
      totalJobCost: 'Custo Total de Produção por Peça:',
    }
  },
  legal: {
    privacyTitle: 'Política de Privacidade',
    privacyDesc: 'Todos os arquivos 3D (.stl, .3mf, .gcode) são processados 100% localmente no seu navegador sem nenhum envio a servidores.',
    privacyBadge: 'Garantia de Privacidade Zero Upload',
    privacyGuarTitle: 'Compromisso Fundamental de Privacidade',
    privacyGuarDesc: 'O 3DPrintingCostCalc.com é uma aplicação web totalmente sem estado (stateless) operada no lado do cliente. Ao arrastar ou selecionar um arquivo 3D, todo o cálculo geométrico e a contagem de camadas ocorrem na memória do seu navegador via JavaScript. Nenhum arquivo 3D, modelo CAD, propriedade intelectual ou código G-code é enviado a servidores externos.',
    sec1Title: '1. Arquitetura Local Sem Servidor',
    sec1Desc: 'O processamento ocorre exclusivamente na memória RAM volátil local. Ao recarregar ou fechar a aba, todas as coordenadas são imediatamente eliminadas do seu sistema.',
    sec2Title: '2. Dados Pessoais Não Coletados',
    sec2Desc: 'Não exigimos login ou cadastro. Não solicitamos nem armazenamos nomes, e-mails, dados de pagamento ou desenhos proprietários.',
    sec3Title: '3. Preferências em Armazenamento Local',
    sec3Desc: 'Salvamos apenas sua preferência de tema (Modo Escuro / Claro) e sua tarifa de energia habitual no localStorage do seu navegador para sua conveniência.',

    termsTitle: 'Termos de Serviço',
    termsDesc: 'Termos de uso, avisos de tolerância técnica e diretrizes de utilização do 3DPrintingCostCalc.com.',
    termsBadge: 'Termos Técnicos e Acordo de Uso',
    termsSummaryTitle: 'Resumo do Acordo',
    termsSummaryDesc: 'O 3DPrintingCostCalc.com disponibiliza ferramentas de estimativa gratuitas para makers, fazendas de impressão e empresas. Os cálculos são estimativas teóricas e devem ser confirmados em balanças e equipamentos físicos calibrados.',
    termsSec1Title: '1. Aceitação dos Termos',
    termsSec1Desc: 'O acesso ou uso do site implica na aceitação plena destes termos e da nossa política de privacidade.',
    termsSec2Title: '2. Tolerâncias Físicas e Isenção de Responsabilidade',
    termsSec2Desc: 'Variações na densidade do filamento (±3-5%), curvas de aceleração do fatiador, tipos de preenchimento e temperatura ambiente causam pequenas diferenças no resultado final. Recomendamos pesar peças-teste em balanças digitais.',
    termsSec3Title: '3. Uso Comercial das Estimativas',
    termsSec3Desc: 'Você tem total liberdade para usar os cálculos e orçamentos gerados por nossas ferramentas na elaboração de propostas comerciais e definição de preços.',

    contactTitle: 'Contato e Suporte',
    contactSubtitle: 'Agradecemos retornos da comunidade, sugestões de novos modelos e dados de taras de carretéis.',
    contactCardTitle: 'Fale com a Equipe Técnica',
    contactCardDesc: 'Dúvidas sobre as fórmulas matemáticas? Quer solicitar o cadastro de uma nova impressora ou enviar o peso de um carretel vazio que você pesou na balança?',
    contactEmailLabel: 'E-mail Oficial de Suporte:',
    contactTurnaround: 'Prazo de resposta: Normalmente em 24 a 48 horas úteis.',
    contactSuggestTitle: 'Vai Enviar um Carretel ou Nova Máquina?',
    contactSuggestDesc: 'Ao enviar dados técnicos, informe o fabricante, o modelo exato, o peso em gramas na balança digital e o material do carretel (papelão, plástico rígido, etc.).'
  },
  printerProfile: {
    title: (b, m) => `Calculadora de Custo e Energia ${b} ${m} | 3DPrintingCostCalc.com`,
    description: (b, m, w) => `Calcule o custo exato de impressão na ${b} ${m}. Consumo médio de ${w}W, depreciação do hardware e filamento. Gratuito e 100% local.`,
    badge: 'Perfil de Máquina e Análise TCO',
    heroH1: (b, m) => `Custo de Impressão e Energia ${b} ${m}`,
    subtitle: (b, m, v, msrp) => `Cálculo personalizado para ${b} ${m} (Volume de impressão ${v} mm, valor de referência R$ ${msrp}). Calcule filamento, eletricidade e desgaste por hora.`,
    smallPart: 'Miniatura Pequena (50g)',
    medPart: 'Peça Funcional Média (150g)',
    largePart: 'Protótipo Grande / Capacete (500g)',
    specsTitle: 'Especificações Técnicas de Hardware',
    hardwareMsrp: 'Preço Estimado da Máquina:',
    avgPower: 'Consumo Médio (PLA):',
    lifespan: 'Vida Útil Operacional Estimada:',
    buildVolume: 'Volume Máximo de Construção:',
    benchmarksTitle: 'Cenários Típicos de Impressão',
    colJob: 'Tipo de Peça',
    colFilament: 'Filamento (g)',
    colTime: 'Tempo (h)',
    colMatCost: 'Material',
    colElecCost: 'Energia',
    colMachCost: 'Depreciação',
    colTotalCost: 'Custo Total',
    faqs: (p) => [
      {
        question: `Quanto de energia gasta a ${p.brand} ${p.model}?`,
        answer: `A ${p.brand} ${p.model} consome em média ${p.avgWattsPla} Watts imprimindo PLA padrão com mesa a 55 °C. Na tarifa residencial comum, 1 hora de impressão custa menos de R$ 0,15.`
      },
      {
        question: `Qual o custo por hora de depreciação da ${p.brand} ${p.model}?`,
        answer: `Com um valor de compra de cerca de R$ ${p.msrpUsd} e uma vida útil estimada em ${p.defaultLifespanHours.toLocaleString()} horas de operação, a depreciação do equipamento é de aproximadamente R$ ${(p.msrpUsd / p.defaultLifespanHours).toFixed(2)} por hora impressa.`
      }
    ]
  },
  materialProfile: {
    title: (n) => `Guia de Custo por Grama, Densidade e Parâmetros de ${n} | 3DPrintingCostCalc.com`,
    description: (n, d) => `Manual técnico e econômico do filamento ${n}. Densidade física ${d} g/cm³, metragem por bobina e temperaturas ideais de bico e mesa.`,
    badge: 'Ficha Técnica de Polímero e Custo',
    heroH1: (n) => `Guia de Custo e Densidade de ${n}`,
    subtitle: (n, d) => `Referência técnica e calculadora de custos para o material ${n} com densidade de ${d} g/cm³.`,
    specsTitle: 'Propriedades Físicas e Parâmetros Recomendados',
    density: 'Densidade do Polímero:',
    nozzleTemp: 'Temperatura Recomendada de Bico:',
    bedTemp: 'Temperatura Recomendada de Mesa:',
    chamberReq: 'Gabinete Fechado Obrigatório:',
    costPerKg: 'Preço Médio de Mercado / kg:',
    metersPerKg: 'Metros por Bobina de 1 kg (1.75 mm):',
    shrinkage: 'Contração Volumétrica:',
    faqs: (m) => [
      {
        question: `Quanto custa 1 kg de filamento ${m.name}?`,
        answer: `O preço médio de um carretel de 1 kg de filamento ${m.name} de boa qualidade gira em torno de R$ ${m.defaultPricePerKgUsd.toFixed(2)} (cerca de R$ ${(m.defaultPricePerKgUsd / 1000).toFixed(3)} por grama).`
      },
      {
        question: `Qual a densidade de ${m.name} e quantos metros rende uma bobina?`,
        answer: `O filamento ${m.name} possui densidade de ${m.densityGcm3} g/cm³. Em diâmetro padrão de 1.75 mm, 1 kg equivale a aproximadamente ${(1000 / (m.densityGcm3 * 0.02405) / 100).toFixed(1)} metros.`
      }
    ]
  }
};
