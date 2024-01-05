import { Receipt } from '../../charge';

export type CreateReceiptParams = {
  isCoupon: boolean;
  total: number;
  deposit: number;
};

export type CreateReceiptResponse = Receipt;
