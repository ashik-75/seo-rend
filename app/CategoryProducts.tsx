"use client";

import { useEffect, useState } from "react";
import Products from "./components/Prodcucts";

function CategoryProducts({ products, categories }: any) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState(products || []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setSelectedProducts(products);
    } else {
      const prods = products.filter((prod: any) =>
        prod.categories.find((c: any) => c.slug === selectedCategory)
      );
      setSelectedProducts(prods);
    }
  }, [selectedCategory, products]);

  return (
    <div className="space-y-5">
      {/* categories section */}
      <section className="space-y-3 flex flex-col items-center">
        {categories?.length > 0 && (
          <>
            <div className="text-3xl font-roboto font-medium">New Arrivals</div>
            <div className="flex gap-x-3">
              <button
                className={`px-4 font-medium py-2 rounded-full ${
                  selectedCategory === "All" ? "bg-zinc-100" : ""
                } hover:bg-zinc-200`}
                key={"All"}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </button>
              {categories.map((category: any) => (
                <button
                  className={`px-4 font-medium py-2 rounded-full ${
                    category?.slug === selectedCategory ? "bg-zinc-100" : ""
                  } hover:bg-zinc-200`}
                  key={category.id}
                  onClick={() => setSelectedCategory(category?.slug)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Products sections */}
      <section>
        {selectedProducts.length > 0 ? (
          <Products products={selectedProducts} />
        ) : (
          <div>Empty Products.</div>
        )}
      </section>
    </div>
  );
}

export default CategoryProducts;
