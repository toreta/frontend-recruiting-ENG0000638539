import { CheckDeposit, ERROR_MESSAGE } from '../../charge';

/**
 * 入金額が過剰になっていないか確認し、過剰の場合はエラーを返す
 */
export function checkDepositOverChargeError({ total, deposit }: CheckDeposit): void {
  if (deposit >= total) throw new Error(ERROR_MESSAGE.OVER_CHARGE);
}
