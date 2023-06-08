import { getProduct, getProducts } from "@/lib/swell/products";
import { Metadata } from "next";
import ProductDetails from "../components/ProductDetails";

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const response = await await getProduct(slug);

  return {
    title: response?.name,
    description: response?.metaDescription,
  };
};

async function product({ params: { slug } }: { params: { slug: string } }) {
  const product = await getProduct(slug);
  console.log("PAGE DETAILS");
  return <div>{product && <ProductDetails product={product!} />}</div>;
}

export default product;

export async function generateStaticParams() {
  const response = await getProducts({});

  return response.results.map((product) => ({
    slug: product.slug,
  }));
}
