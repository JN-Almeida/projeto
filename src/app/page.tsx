import ProductCard from "@/components/ProductCard";
import { fetchData } from "@/services/fetch";
import { productType } from "@/types/product";
import { PageContainer } from "./styles";
import Empty from "@/components/Empty";

export default async function Home() {
  const { products } = await fetchData<{ products: productType[] }>("movies", {
    method: "GET",
  });
  if (!products || products.length === 0) {
    return <Empty />;
  }
  return (
    <PageContainer>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </PageContainer>
  );
}
