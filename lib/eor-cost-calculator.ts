import { tcoVendors } from './tco-configs';

export interface EorCostVendorConfig {
  id: 'deel' | 'remote' | 'oyster';
  name: string;
  eorMonthlyFee: number;
  contractorMonthlyFee: number;
  depositModel: 'salary-plus-fee' | 'salary-only';
  depositLabel: string;
}

export interface EorCostCalculatorConfig {
  sourceCheckedAt: string;
  defaultInputs: {
    eorEmployees: number;
    contractors: number;
    averageMonthlySalary: number;
    fxSpreadPercent: number;
  };
  vendors: readonly EorCostVendorConfig[];
}

export const eorCostCalculatorConfig: EorCostCalculatorConfig = {
  sourceCheckedAt: '2026-11-15',
  defaultInputs: {
    eorEmployees: 5,
    contractors: 5,
    averageMonthlySalary: 5000,
    fxSpreadPercent: 1.5,
  },
  vendors: [
    {
      id: 'deel',
      name: tcoVendors.deel.name,
      eorMonthlyFee: tcoVendors.deel.rates.eorPerEmployee,
      contractorMonthlyFee: tcoVendors.deel.rates.contractorPerWorker,
      depositModel: 'salary-plus-fee',
      depositLabel: 'Lower-bound proxy: one month of salary plus the EOR fee. Deel states its standard deposit is 1–1.5× all monthly charges and may be higher.',
    },
    {
      id: 'remote',
      name: tcoVendors.remote.name,
      eorMonthlyFee: tcoVendors.remote.rates.eorPerEmployee,
      contractorMonthlyFee: tcoVendors.remote.rates.contractorPerWorker,
      depositModel: 'salary-only',
      depositLabel: 'Lower-bound proxy: one month of salary. Remote normally uses one month of total employment cost, including employer costs but excluding its management fee.',
    },
    {
      id: 'oyster',
      name: tcoVendors.oyster.name,
      eorMonthlyFee: tcoVendors.oyster.rates.eorPerEmployee,
      contractorMonthlyFee: tcoVendors.oyster.rates.contractorPerWorker,
      depositModel: 'salary-plus-fee',
      depositLabel: 'Lower-bound proxy: one month of salary plus the EOR fee. Oyster normally uses approximately one month of total cost of services and may require more.',
    },
  ],
};
