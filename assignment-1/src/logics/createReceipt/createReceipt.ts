import { CreateReceiptParams, CreateReceiptResponse } from './createReceipt.types';

/**
 * レシート情報を作成
 */
export function createReceipt({
  isCoupon,
  total,
  deposit,
}: CreateReceiptParams): CreateReceiptResponse {
  const change = isCoupon ? 0 : deposit - total;

  return {
    total,
    deposit,
    change,
  };
}
