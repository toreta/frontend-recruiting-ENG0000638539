import { Payment } from '../../charge';

export type SortPaymentsParams = {
  payments: Payment[];
};

export type SortPaymentsResponse = {
  sortedPayments: Payment[];
};
