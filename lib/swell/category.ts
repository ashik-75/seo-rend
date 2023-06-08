import swell from "./client";

export const getCategories = async () => {
  return await swell.categories.list();
};
