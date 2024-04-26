import ProductCard from "@/components/ProductCard";
import { fetchData } from "@/services/fetch";
import { productType } from "@/types/product";
import { PageContainer } from "./styles";

export default async function Home() {
  const { products } = await fetchData<{ products: productType[] }>("movies", {
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
