import { getCategories } from "@/lib/swell/category";
import { getProducts } from "@/lib/swell/products";
import CategoryProducts from "./CategoryProducts";
import FeaturedProducts from "./FeaturedProducts";

async function Homepage() {
  const response = await getProducts({});

  const categories = await getCategories();

  console.log("HOME PAGE");

  return (
    <div className="max-w-7xl mx-auto">
      <CategoryProducts
        categories={categories?.results}
        products={response?.results}
      />
      {/* @ts-expect-error */}
      <FeaturedProducts products={response?.results} />
    </div>
  );
}

export default Homepage;
