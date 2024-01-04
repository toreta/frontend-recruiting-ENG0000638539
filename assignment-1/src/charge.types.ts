import { PAYMENT_TYPE } from './charge.const';

export type PaymentType = (typeof PAYMENT_TYPE)[keyof typeof PAYMENT_TYPE];

export type Invoice = {
  total: number;
};

export type Receipt = {
  total: number;
  deposit: number;
  change: number;
};

export type Payment = {
  type: PaymentType;
  percentage?: number;
  amount?: number;
};

export type CheckDeposit = {
  total: number;
  deposit: number;
};
