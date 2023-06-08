"use client";

import { addToCart } from "@/lib/swell/cart";
import { formatCurrency } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { ProductDetailsType } from "../../types/ProdDetails.types";

function ProductDetails({
  product: { images, name, description, price, currency, id },
}: {
  product: ProductDetailsType;
}) {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isLoading } = useMutation({
    mutationFn: (item: { product_id: string; quantity: number }) =>
      addToCart(item!),
    onSuccess: (data) => {
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
          <div className="relative h-[500px] border ">
            <Image
              src={images?.[0]?.file?.url!}
              fill
              alt={name}
              className="absolute h-full w-full object-cover object-center rounded-xl"
            />
          </div>
          <div className="mt-5">
            {images?.map((image) => (
              <div key={image?.id}>
                <Image
                  src={image.file?.url!}
                  alt={`${image?.id}`}
                  width={100}
                  height={100}
                  className=" aspect-square object-cover border"
                />
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
