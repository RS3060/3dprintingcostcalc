export interface CostCalculationInputs {
  spoolPriceUsd: number;
  spoolWeightGrams: number;
  printWeightGrams: number;
  purgeWasteGrams: number;
  printTimeHours: number;
  printerPowerWatts: number;
  electricityRateKwh: number;
  printerPriceUsd: number;
  expectedLifespanHours: number;
  hourlyMaintenanceUsd: number;
  failureRatePercent: number;
  postProcessingMinutes: number;
  hourlyLaborRateUsd: number;
  hardwareCostUsd: number;
  packagingCostUsd: number;
  markupMultiplier: number;
  etsyOffsiteAds: boolean;
}

export interface PlatformFeeBreakdown {
  platformName: string;
  recommendedPrice: number;
  platformFees: number;
  netProfit: number;
  netMarginPercent: number;
  feeDetails: string;
}

export interface CostCalculationResults {
  totalFilamentGrams: number;
  costPerGram: number;
  materialCost: number;
  electricityKwh: number;
  electricityCost: number;
  machineDepreciationCost: number;
  maintenanceReserveCost: number;
  machineWearCost: number;
  failureBufferCost: number;
  laborCost: number;
  hardwareCost: number;
  packagingCost: number;
  baseProductionCost: number;
  totalLandedCost: number;
  directPrice: number;
  directProfit: number;
  directMarginPercent: number;
  platforms: {
    direct: PlatformFeeBreakdown;
    etsy: PlatformFeeBreakdown;
    ebay: PlatformFeeBreakdown;
    shopify: PlatformFeeBreakdown;
  };
  percentages: {
    material: number;
    electricity: number;
    machine: number;
    failure: number;
    labor: number;
    other: number;
  };
}

export const DEFAULT_COST_INPUTS: CostCalculationInputs = {
  spoolPriceUsd: 19.99,
  spoolWeightGrams: 1000,
  printWeightGrams: 85,
  purgeWasteGrams: 0,
  printTimeHours: 3.5,
  printerPowerWatts: 130,
  electricityRateKwh: 0.16,
  printerPriceUsd: 849,
  expectedLifespanHours: 4500,
  hourlyMaintenanceUsd: 0.08,
  failureRatePercent: 5,
  postProcessingMinutes: 10,
  hourlyLaborRateUsd: 20,
  hardwareCostUsd: 0.5,
  packagingCostUsd: 1.25,
  markupMultiplier: 2.5,
  etsyOffsiteAds: false,
};

export function calculate3DPrintCost(inputs: CostCalculationInputs): CostCalculationResults {
  const spoolWeight = Math.max(1, inputs.spoolWeightGrams);
  const costPerGram = inputs.spoolPriceUsd / spoolWeight;
  const totalFilamentGrams = Math.max(0, inputs.printWeightGrams + inputs.purgeWasteGrams);
  const materialCost = totalFilamentGrams * costPerGram;

  const hours = Math.max(0, inputs.printTimeHours);
  const electricityKwh = (inputs.printerPowerWatts / 1000) * hours;
  const electricityCost = electricityKwh * inputs.electricityRateKwh;

  const lifespan = Math.max(1, inputs.expectedLifespanHours);
  const hourlyDepreciation = inputs.printerPriceUsd / lifespan;
  const machineDepreciationCost = hourlyDepreciation * hours;
  const maintenanceReserveCost = inputs.hourlyMaintenanceUsd * hours;
  const machineWearCost = machineDepreciationCost + maintenanceReserveCost;

  const rawProductionCost = materialCost + electricityCost + machineWearCost;
  const failureBufferCost = rawProductionCost * (Math.max(0, inputs.failureRatePercent) / 100);
  const baseProductionCost = rawProductionCost + failureBufferCost;

  const laborCost = (Math.max(0, inputs.postProcessingMinutes) / 60) * inputs.hourlyLaborRateUsd;
  const hardwareCost = Math.max(0, inputs.hardwareCostUsd);
  const packagingCost = Math.max(0, inputs.packagingCostUsd);

  const totalLandedCost = baseProductionCost + laborCost + hardwareCost + packagingCost;

  const multiplier = Math.max(1, inputs.markupMultiplier);
  const directPrice = totalLandedCost * multiplier;
  const directProfit = Math.max(0, directPrice - totalLandedCost);
  const directMargin = directPrice > 0 ? (directProfit / directPrice) * 100 : 0;

  // Platform calculations to achieve the target net profit after platform cuts
  // 1. Direct (Cash / In-Person / Zero-fee invoice)
  const directPlatform: PlatformFeeBreakdown = {
    platformName: "Direct / Local Invoice",
    recommendedPrice: Number(directPrice.toFixed(2)),
    platformFees: 0,
    netProfit: Number(directProfit.toFixed(2)),
    netMarginPercent: Number(directMargin.toFixed(1)),
    feeDetails: "0% processing fee. 100% margin retained.",
  };

  // 2. Etsy: Listing ($0.20) + 6.5% transaction + 3% + $0.25 payment processing (+ 15% optional offsite ads)
  // Total fee percentage = 6.5% + 3% = 9.5% (or 24.5% with offsite ads)
  // Total fixed fee = $0.45 ($0.20 + $0.25)
  // Net = Price * (1 - feePct) - 0.45 - LandedCost
  // To achieve target netProfit = directProfit:
  // Price = (directProfit + totalLandedCost + 0.45) / (1 - feePct)
  const etsyFeePct = inputs.etsyOffsiteAds ? 0.245 : 0.095;
  const etsyFixedFee = 0.45;
  const etsyTargetPrice = (directProfit + totalLandedCost + etsyFixedFee) / (1 - etsyFeePct);
  const etsyFees = etsyTargetPrice * etsyFeePct + etsyFixedFee;
  const etsyNetProfit = Math.max(0, etsyTargetPrice - etsyFees - totalLandedCost);
  const etsyMargin = etsyTargetPrice > 0 ? (etsyNetProfit / etsyTargetPrice) * 100 : 0;

  const etsyPlatform: PlatformFeeBreakdown = {
    platformName: "Etsy",
    recommendedPrice: Number(etsyTargetPrice.toFixed(2)),
    platformFees: Number(etsyFees.toFixed(2)),
    netProfit: Number(etsyNetProfit.toFixed(2)),
    netMarginPercent: Number(etsyMargin.toFixed(1)),
    feeDetails: inputs.etsyOffsiteAds
      ? "6.5% transaction + 3%+$0.25 processing + 15% offsite ads + $0.20 listing"
      : "6.5% transaction + 3%+$0.25 processing + $0.20 listing",
  };

  // 3. eBay: 13.25% + $0.40 final value fee
  const ebayFeePct = 0.1325;
  const ebayFixedFee = 0.4;
  const ebayTargetPrice = (directProfit + totalLandedCost + ebayFixedFee) / (1 - ebayFeePct);
  const ebayFees = ebayTargetPrice * ebayFeePct + ebayFixedFee;
  const ebayNetProfit = Math.max(0, ebayTargetPrice - ebayFees - totalLandedCost);
  const ebayMargin = ebayTargetPrice > 0 ? (ebayNetProfit / ebayTargetPrice) * 100 : 0;

  const ebayPlatform: PlatformFeeBreakdown = {
    platformName: "eBay",
    recommendedPrice: Number(ebayTargetPrice.toFixed(2)),
    platformFees: Number(ebayFees.toFixed(2)),
    netProfit: Number(ebayNetProfit.toFixed(2)),
    netMarginPercent: Number(ebayMargin.toFixed(1)),
    feeDetails: "13.25% Final Value fee + $0.40 per order fee",
  };

  // 4. Shopify / Online Store (Stripe): 2.9% + $0.30 payment processing
  const shopifyFeePct = 0.029;
  const shopifyFixedFee = 0.3;
  const shopifyTargetPrice = (directProfit + totalLandedCost + shopifyFixedFee) / (1 - shopifyFeePct);
  const shopifyFees = shopifyTargetPrice * shopifyFeePct + shopifyFixedFee;
  const shopifyNetProfit = Math.max(0, shopifyTargetPrice - shopifyFees - totalLandedCost);
  const shopifyMargin = shopifyTargetPrice > 0 ? (shopifyNetProfit / shopifyTargetPrice) * 100 : 0;

  const shopifyPlatform: PlatformFeeBreakdown = {
    platformName: "Shopify / Custom Store",
    recommendedPrice: Number(shopifyTargetPrice.toFixed(2)),
    platformFees: Number(shopifyFees.toFixed(2)),
    netProfit: Number(shopifyNetProfit.toFixed(2)),
    netMarginPercent: Number(shopifyMargin.toFixed(1)),
    feeDetails: "2.9% credit card processing + $0.30 per transaction",
  };

  // Cost component percentages
  const safeTotal = totalLandedCost > 0 ? totalLandedCost : 1;
  const percentages = {
    material: Number(((materialCost / safeTotal) * 100).toFixed(1)),
    electricity: Number(((electricityCost / safeTotal) * 100).toFixed(1)),
    machine: Number(((machineWearCost / safeTotal) * 100).toFixed(1)),
    failure: Number(((failureBufferCost / safeTotal) * 100).toFixed(1)),
    labor: Number(((laborCost / safeTotal) * 100).toFixed(1)),
    other: Number((((hardwareCost + packagingCost) / safeTotal) * 100).toFixed(1)),
  };

  return {
    totalFilamentGrams: Number(totalFilamentGrams.toFixed(2)),
    costPerGram: Number(costPerGram.toFixed(4)),
    materialCost: Number(materialCost.toFixed(2)),
    electricityKwh: Number(electricityKwh.toFixed(3)),
    electricityCost: Number(electricityCost.toFixed(2)),
    machineDepreciationCost: Number(machineDepreciationCost.toFixed(2)),
    maintenanceReserveCost: Number(maintenanceReserveCost.toFixed(2)),
    machineWearCost: Number(machineWearCost.toFixed(2)),
    failureBufferCost: Number(failureBufferCost.toFixed(2)),
    laborCost: Number(laborCost.toFixed(2)),
    hardwareCost: Number(hardwareCost.toFixed(2)),
    packagingCost: Number(packagingCost.toFixed(2)),
    baseProductionCost: Number(baseProductionCost.toFixed(2)),
    totalLandedCost: Number(totalLandedCost.toFixed(2)),
    directPrice: Number(directPrice.toFixed(2)),
    directProfit: Number(directProfit.toFixed(2)),
    directMarginPercent: Number(directMargin.toFixed(1)),
    platforms: {
      direct: directPlatform,
      etsy: etsyPlatform,
      ebay: ebayPlatform,
      shopify: shopifyPlatform,
    },
    percentages,
  };
}
