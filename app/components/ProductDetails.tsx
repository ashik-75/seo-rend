"use client";

import { addToCart } from "@/lib/swell/cart";
import { formatCurrency } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";

function ProductDetails({
  product: { images, name, description, price, currency, id },
}: any) {
  const [activeImage, setActiveImage] = useState<string>(
    images?.[0]?.file?.url
  );
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (item: { product_id: string; quantity: number }) =>
      addToCart(item!),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
  const handleCart = async () => {
    toast.promise(
      mutateAsync({
        product_id: id,
        quantity: 1,
      }),
      {
        loading: <b>Loading ...</b>,
        error: <p>Something went wrong</p>,
        success: <p>Item Added to cart</p>,
      }
    );
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <m.div
            layout
            className="aspect-w-3 aspect-h-2 rounded-xl overflow-hidden"
          >
            <Image
              src={activeImage!}
              fill
              alt={name}
              className="object-cover"
            />
          </m.div>
          <div className="mt-5 flex space-x-3 flex-wrap">
            {images?.map((image: any) => (
              <div
                key={image?.id}
                className={`rounded-lg overflow-hidden h-[100px] w-[100px] cursor-pointer ${
                  activeImage === image?.file?.url
                    ? "opacity-100 border p-1 border-zinc-300"
                    : "opacity-75"
                }`}
                onClick={() => setActiveImage(image?.file?.url)}
              >
                <div className="aspect-w-1 aspect-h-1">
                  <Image
                    src={image?.file?.url!}
                    alt={`${image?.id}`}
                    fill
                    className="object-cover bg-zinc-300 rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="font-extrabold text-3xl">{name}</h1>
          <p className="text-xl font-bold">
            {formatCurrency({ amount: price, currency })}
          </p>
          <div dangerouslySetInnerHTML={{ __html: description! }} />

          <button
            onClick={handleCart}
            disabled={isLoading}
            type="submit"
            className="mt-6 flex gap-x-3 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
