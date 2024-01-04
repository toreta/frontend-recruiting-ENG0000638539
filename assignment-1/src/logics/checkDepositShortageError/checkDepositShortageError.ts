import { CheckDeposit, ERROR_MESSAGE } from '../../charge';

/**
 * 入金額が不足していないか確認し、不足している場合はエラーを返す
 */
export function checkDepositShortageError({ total, deposit }: CheckDeposit): void {
  if (total > deposit) throw new Error(ERROR_MESSAGE.SHORTAGE);
}
