import swell from "./client";

export const applyCoupon = async (code: string) => {
  return await swell.cart.applyCoupon(code);
};
