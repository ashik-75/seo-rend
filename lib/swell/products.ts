import swell from "./client";

interface ProductProps {
  page: number;
  filters: object;
  sort: string;
}
type ParitalType = Partial<ProductProps>;

export const getProducts = async ({ page = 1, filters }: ParitalType) => {
  return await swell.products.list({
    page,
    $filters: filters,
    expand: ["variants", "categories"],
  });
};

export const getProduct = async (slugOrId: string) => {
  return swell.products.get(slugOrId);
};
