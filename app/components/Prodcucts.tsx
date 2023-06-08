"use client";
import { AnimatePresence, motion as m } from "framer-motion";
import { ProductType } from "../../types/product.types";
import Product from "./Product";

function Products({ products }: { products: ProductType[] }) {
  return (
    <m.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
    >
      <AnimatePresence initial={false}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </AnimatePresence>
    </m.div>
  );
}

export default Products;
