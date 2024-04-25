import Image from "next/image";
import { PageContainer } from "./styles";
import ProductCard from "@/components/ProductCard";
import { ProductTitle } from "@/components/ProductCard/styles";
import { fetchData } from "@/services/fetch";

export default async function Home() {
  const {products} = await fetchData<{products: productType[]}>("movies", {
    method: "GET",
  });
  return (
    <PageContainer>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </PageContainer>
  );
}
