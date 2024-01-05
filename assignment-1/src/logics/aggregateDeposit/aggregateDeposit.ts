import { AggregateDepositParams, AggregateDepositResponse } from './aggregateDeposit.types';
import { checkDepositOverChargeError } from '../checkDepositOverChargeError';
import { PAYMENT_TYPE } from '../../charge';

/**
 * 支払い金額を集計
 */
export function aggregateDeposit({
  sortedPayments,
  total,
}: AggregateDepositParams): AggregateDepositResponse {
  const deposit = sortedPayments.reduce((acc, payment) => {
    if (payment.type === PAYMENT_TYPE.COUPON) {
      return payment.percentage != null
        ? acc + Math.floor(total * (payment.percentage / 100))
        : acc + (payment.amount || 0);
    }

    checkDepositOverChargeError({ total, deposit: acc });
    return acc + (payment.amount || 0);
  }, 0);

  return { deposit };
}
