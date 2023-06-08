import { getProduct } from "@/lib/swell/products";
import { Metadata } from "next";
import ProductDetails from "../components/ProductDetails";

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const response = await await getProduct(slug);

  return {
    title: response?.meta_title,
    description: response?.metaDescription,
  };
};

async function product({ params: { slug } }: { params: { slug: string } }) {
  const product = await getProduct(slug);
  return (
    <div>
      {/* @ts-expect-error */}
      <ProductDetails product={product} />
    </div>
  );
}

export default product;
