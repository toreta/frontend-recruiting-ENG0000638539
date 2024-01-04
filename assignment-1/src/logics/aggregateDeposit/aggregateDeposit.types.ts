import { Payment } from '../../charge';

export type AggregateDepositParams = {
  sortedPayments: Payment[];
  total: number;
};

export type AggregateDepositResponse = {
  deposit: number;
};
