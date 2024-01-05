import { CheckIsCouponResponse, CheckIsCouponParams } from './checkIsCoupon.types';
import { PAYMENT_TYPE } from '../../charge';

/**
 * クーポンが使用されているか確認
 */
export function checkIsCoupon({ payments }: CheckIsCouponParams): CheckIsCouponResponse {
  const isCoupon = payments.every((payment) => payment.type === PAYMENT_TYPE.COUPON);
  return { isCoupon };
}
