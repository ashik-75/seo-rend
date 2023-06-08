import { formatCurrency } from "@/lib/utils";
import { ProductType } from "@/types/product.types";
import Image from "next/image";
import { useMemo } from "react";
import Product from "./components/Product";

function FeaturedProducts({ products }: { products: ProductType[] }) {
  const firstProduct = products?.[3];
  const slicedProducts = useMemo(() => {
    return products?.slice(1, 8);
  }, [products]);
  return (
    <div className="relative isolate py-28 px-5 bg-white mt-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start gap-10">
        <div className="lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="relative rounded-xl overflow-hidden h-[600px]">
            <Image
              src={firstProduct?.images?.[0]?.file?.url}
              alt={firstProduct?.name}
              fill
              className="absolute w-full h-full"
            />

            <div className="absolute inset-0 flex text-white flex-col items-center justify-center bg-gradient-to-b from-zinc-500/10 to-zinc-700">
              <h1 className="text-3xl font-medium">{firstProduct?.name}</h1>
              <p className="font-medium text-lg">
                {formatCurrency({ amount: firstProduct.price })}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {slicedProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
