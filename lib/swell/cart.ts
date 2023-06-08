import swell from "./client";

export const addToCart = async (item: {
  product_id: string;
  quantity: number;
}) => {
  return await swell.cart.addItem(item);
};

export const removeFromCart = async (productId: string) => {
  return await swell.cart.removeItem(productId);
};

export const emptyCart = async () => {
  return await swell.cart.setItems([]);
};

export const updateProductQuantity = async (
  productId: string,
  quantity: number
) => {
  return await swell.cart.updateItem(productId, {
    quantity,
  });
};

export const getCart = async () => {
  return await swell.cart.get();
};
