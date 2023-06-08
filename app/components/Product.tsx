"use client";

import { formatCurrency } from "@/lib/utils";
import { EyeIcon } from "@heroicons/react/24/outline";
import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProductType } from "../../types/product.types";
import ProductQuickView from "./ProductQuickView";

function Product({ product }: { product: ProductType }) {
  const [open, setOpen] = useState(false);
  const { name, price, images, slug } = product || {};
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,

        transition: {
          duration: 0.2,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      }}
      layout
      className="space-y-3"
    >
      <div className="relative h-[200px] group cursor-pointer  rounded-xl overflow-hidden group ">
        <Image
          src={images[0]?.file?.url}
          fill
          className=" absolute group-hover:scale-110 transition-all duration-200 opacity-95 aspect-video hover:opacity-100 object-cover object-center"
          alt={name}
        />

        <m.div
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className=" absolute inset-0 bg-zinc-600/10 z-10 p-5 transition-all"
        >
          <div className="relative w-full h-full">
            <button
              onClick={() => setOpen(true)}
              className="h-10 w-10 absolute right-3 flex justify-center items-center rounded-full bg-white hover:bg-black hover:text-white text-black transition-all"
            >
              <EyeIcon className="h-5 w-5" />
            </button>
          </div>
        </m.div>
      </div>

      <div>
        <div>
          <Link href={`/${slug}`}>
            <h1 className="font-medium">{name}</h1>
          </Link>
          <p className="font-medium">{formatCurrency({ amount: price })}</p>
        </div>
      </div>
      <ProductQuickView product={product} open={open} setOpen={setOpen} />
    </m.div>
  );
}

export default Product;
