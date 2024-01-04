import { Payment } from '../../charge';

export type CheckIsCouponParams = {
  payments: Payment[];
};

export type CheckIsCouponResponse = {
  isCoupon: boolean;
};
