import { SortPaymentsParams, SortPaymentsResponse } from './sortPayments.types';
import { PAYMENT_TYPE } from '../../charge';

/**
 * 支払い情報をソート
 */
export function sortPayments({ payments }: SortPaymentsParams): SortPaymentsResponse {
  const sortedPayments = payments.sort((payment) => (payment.type !== PAYMENT_TYPE.CASH ? -1 : 1));
  return { sortedPayments };
}
