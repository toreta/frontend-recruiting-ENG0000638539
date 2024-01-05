import { Invoice, Payment, Receipt } from './charge.types';
import { aggregateDeposit } from './logics/aggregateDeposit';
import { checkDepositShortageError } from './logics/checkDepositShortageError';
import { checkIsCoupon } from './logics/checkIsCoupon';
import { createReceipt } from './logics/createReceipt';
import { sortPayments } from './logics/sortPayments';

/**
 * `請求書` と `支払い` を受け取り `レシート` を返却
 */
export function charge(invoice: Invoice, payments: Payment[]): Receipt {
  // 合計金額
  const total = invoice.total;

  // 支払い情報をソート
  const { sortedPayments } = sortPayments({ payments });
  // 支払い金額を集計
  const { deposit } = aggregateDeposit({ sortedPayments, total });

  // 入金額が不足していないか確認
  checkDepositShortageError({ total, deposit });
  // クーポンが使用されているか確認
  const { isCoupon } = checkIsCoupon({ payments });

  // レシート情報を作成
  return createReceipt({ isCoupon, total, deposit });
}

export * from './charge.const';
export * from './charge.types';
