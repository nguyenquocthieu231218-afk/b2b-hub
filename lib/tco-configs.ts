export type TcoComparisonSlug =
  | 'deel-vs-rippling'
  | 'deel-vs-remote'
  | 'rippling-vs-gusto'
  | 'deel-vs-oyster';

export type TcoHeadcountKey = 'usEmployees' | 'eorEmployees' | 'contractors';

export interface TcoVendorConfig {
  id: string;
  name: string;
  rates: {
    usPayrollPerEmployee: number;
    eorPerEmployee: number;
    contractorPerWorker: number;
    corePlatformPerEmployee: number;
    corePlatformScopes: readonly TcoHeadcountKey[];
    itManagementPerEmployee: number;
    itManagementScopes: readonly TcoHeadcountKey[];
    basePlatformFee: number;
    implementationFee: number;
    implementationWaivableWithAnnualCommitment: boolean;
    fxSpreadPercent: number;
    renewalUpliftPercent: number;
  };
  cashFlowDeposit: {
    monthsOfEorGrossSalary: number;
    refundable: boolean;
  };
  pricingBasis: string;
  assumptions: readonly string[];
}

export interface TcoComparisonConfig {
  slug: TcoComparisonSlug;
  title: string;
  sourceCheckedAt: string;
  defaultWorkforce: {
    usEmployees: number;
    eorEmployees: number;
    contractors: number;
    eorMonthlyGrossSalary: number;
    contractorAverageMonthlyInvoice: number;
  };
  vendors: readonly [TcoVendorConfig, TcoVendorConfig];
  sources: readonly { label: string; url: string }[];
}

const deel: TcoVendorConfig = {
  id: 'deel',
  name: 'Deel',
  rates: {
    usPayrollPerEmployee: 19,
    eorPerEmployee: 599,
    contractorPerWorker: 49,
    corePlatformPerEmployee: 0,
    corePlatformScopes: [],
    itManagementPerEmployee: 0,
    itManagementScopes: [],
    basePlatformFee: 0,
    implementationFee: 0,
    implementationWaivableWithAnnualCommitment: false,
    fxSpreadPercent: 1.5,
    renewalUpliftPercent: 5,
  },
  cashFlowDeposit: {
    monthsOfEorGrossSalary: 1,
    refundable: true,
  },
  pricingBasis: 'Public starting rates plus contract-model assumptions checked 14 Nov 2026.',
  assumptions: [
    'Public starts: US Payroll $19, EOR $599, and Contractor $49 per worker per month.',
    'The cash-flow line models one month of EOR gross salary. Deel states its standard deposit can be 1–1.5 times all monthly charges, so the signed quote controls.',
    'The 1.5% FX spread and 5% year-two uplift are editable contract-model assumptions, not universal published guarantees.',
  ],
};

const rippling: TcoVendorConfig = {
  id: 'rippling',
  name: 'Rippling',
  rates: {
    usPayrollPerEmployee: 8,
    eorPerEmployee: 599,
    contractorPerWorker: 0,
    corePlatformPerEmployee: 8,
    corePlatformScopes: ['usEmployees', 'eorEmployees'],
    itManagementPerEmployee: 8,
    itManagementScopes: ['usEmployees', 'eorEmployees'],
    basePlatformFee: 35,
    implementationFee: 1000,
    implementationWaivableWithAnnualCommitment: true,
    fxSpreadPercent: 1.5,
    renewalUpliftPercent: 7,
  },
  cashFlowDeposit: {
    monthsOfEorGrossSalary: 0,
    refundable: false,
  },
  pricingBasis: 'Public $8 starting point plus an editable normalized quote baseline checked 14 Nov 2026.',
  assumptions: [
    'Rippling publicly states plans start at $8 per employee per month plus a monthly base fee; the $35 base fee is the normalized audit baseline.',
    'US Payroll $8, Global EOR $599, IT Management $8, $1,000 implementation, 1.5% FX, and 7% renewal uplift are editable quote baselines, not universal public rate-card promises.',
    'Contractor pricing is excluded from this baseline because Rippling does not publish a universal contractor rate; a non-zero contractor population therefore needs a signed quote adjustment.',
  ],
};

const remote: TcoVendorConfig = {
  id: 'remote',
  name: 'Remote',
  rates: {
    usPayrollPerEmployee: 19,
    eorPerEmployee: 599,
    contractorPerWorker: 29,
    corePlatformPerEmployee: 0,
    corePlatformScopes: [],
    itManagementPerEmployee: 0,
    itManagementScopes: [],
    basePlatformFee: 0,
    implementationFee: 0,
    implementationWaivableWithAnnualCommitment: false,
    fxSpreadPercent: 1.5,
    renewalUpliftPercent: 5,
  },
  cashFlowDeposit: {
    monthsOfEorGrossSalary: 0,
    refundable: true,
  },
  pricingBasis: 'Public annual-contract starting rates checked 14 Nov 2026.',
  assumptions: [
    'Public starts: Global Payroll $19, annual-contract EOR $599, and Contractor Management $29 per worker per month, with no platform base fee.',
    'Remote says no standard deposit applies, although a refundable reserve may be required in specific cases.',
    'The 1.5% FX spread and 5% year-two uplift are editable scenario assumptions because Remote does not publish one universal percentage for either item.',
  ],
};

const gusto: TcoVendorConfig = {
  id: 'gusto',
  name: 'Gusto',
  rates: {
    usPayrollPerEmployee: 6,
    eorPerEmployee: 0,
    contractorPerWorker: 6,
    corePlatformPerEmployee: 0,
    corePlatformScopes: [],
    itManagementPerEmployee: 0,
    itManagementScopes: [],
    basePlatformFee: 49,
    implementationFee: 0,
    implementationWaivableWithAnnualCommitment: false,
    fxSpreadPercent: 0,
    renewalUpliftPercent: 0,
  },
  cashFlowDeposit: {
    monthsOfEorGrossSalary: 0,
    refundable: false,
  },
  pricingBasis: 'Gusto Simple public monthly pricing checked 14 Nov 2026.',
  assumptions: [
    'Gusto Simple is modeled at $49 per month plus $6 per paid US employee or contractor.',
    'Gusto bills US contractors in months when they are paid; the model assumes every entered contractor is paid every month.',
    'EOR, IT management, FX, implementation, and renewal uplift are excluded from this US-payroll baseline.',
  ],
};

const oyster: TcoVendorConfig = {
  id: 'oyster',
  name: 'Oyster',
  rates: {
    usPayrollPerEmployee: 0,
    eorPerEmployee: 699,
    contractorPerWorker: 29,
    corePlatformPerEmployee: 0,
    corePlatformScopes: [],
    itManagementPerEmployee: 0,
    itManagementScopes: [],
    basePlatformFee: 0,
    implementationFee: 0,
    implementationWaivableWithAnnualCommitment: false,
    fxSpreadPercent: 1.5,
    renewalUpliftPercent: 5,
  },
  cashFlowDeposit: {
    monthsOfEorGrossSalary: 1,
    refundable: true,
  },
  pricingBasis: 'Public monthly EOR and contractor rates checked 14 Nov 2026.',
  assumptions: [
    'Public starts: EOR $699 per employee per month and Global Contractors $29 per contractor per month, with no standard setup fee.',
    'The calculator models a refundable deposit equal to one month of EOR gross salary; Oyster discloses a refundable EOR deposit but the proposal sets the actual amount.',
    'The 1.5% FX spread is an editable scenario assumption. Oyster states that annual EOR renewal increases are capped at 5%.',
  ],
};

const defaultWorkforce = {
  usEmployees: 20,
  eorEmployees: 5,
  contractors: 5,
  eorMonthlyGrossSalary: 5000,
  contractorAverageMonthlyInvoice: 3000,
};

export const tcoConfigs: Record<TcoComparisonSlug, TcoComparisonConfig> = {
  'deel-vs-rippling': {
    slug: 'deel-vs-rippling',
    title: 'Deel vs Rippling',
    sourceCheckedAt: '2026-11-14',
    defaultWorkforce,
    vendors: [deel, rippling],
    sources: [
      { label: 'Deel pricing', url: 'https://www.deel.com/pricing/' },
      { label: 'Deel EOR deposit calculation', url: 'https://help.letsdeel.com/hc/en-gb/articles/15574494993297-About-EOR-Deposit-Calculations' },
      { label: 'Rippling pricing', url: 'https://www.rippling.com/pricing' },
    ],
  },
  'deel-vs-remote': {
    slug: 'deel-vs-remote',
    title: 'Deel vs Remote',
    sourceCheckedAt: '2026-11-14',
    defaultWorkforce,
    vendors: [deel, remote],
    sources: [
      { label: 'Deel pricing', url: 'https://www.deel.com/pricing/' },
      { label: 'Remote pricing', url: 'https://remote.com/pricing' },
    ],
  },
  'rippling-vs-gusto': {
    slug: 'rippling-vs-gusto',
    title: 'Rippling vs Gusto',
    sourceCheckedAt: '2026-11-14',
    defaultWorkforce: { ...defaultWorkforce, eorEmployees: 0, contractors: 3 },
    vendors: [rippling, gusto],
    sources: [
      { label: 'Rippling pricing', url: 'https://www.rippling.com/pricing' },
      { label: 'Gusto pricing', url: 'https://gusto.com/product/pricing' },
    ],
  },
  'deel-vs-oyster': {
    slug: 'deel-vs-oyster',
    title: 'Deel vs Oyster',
    sourceCheckedAt: '2026-11-14',
    defaultWorkforce: { ...defaultWorkforce, usEmployees: 0 },
    vendors: [deel, oyster],
    sources: [
      { label: 'Deel pricing', url: 'https://www.deel.com/pricing/' },
      { label: 'Oyster pricing', url: 'https://www.oysterhr.com/pricing' },
      { label: 'Oyster annual EOR terms', url: 'https://support.oysterhr.com/hc/en-us/articles/13566621374353-How-Does-EOR-Annual-Work' },
    ],
  },
};
