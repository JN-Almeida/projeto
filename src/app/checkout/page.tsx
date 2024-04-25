import Image from "next/image";
import {
  CheckoutBotton,
  CheckoutContainer,
  CheckoutFooter,
  HeaderLabel,
  Price,
  PriceLabel,
  ProductDesc,
  ProductPrice,
  ProductTitle,
  TableGrid,
  TotalLabel,
  TotalPrice,
} from "./styles";
import ProductCard from "@/components/ProductCard";
import QuantOnCart from "./_components/QuantOnCart";
import RemoveCart from "./_components/RemoveCart";
import Link from "next/link";

export default function Home() {
  return (
    <CheckoutContainer>
      <TableGrid>
        <HeaderLabel>PRODUTO</HeaderLabel>
        <HeaderLabel>QTD</HeaderLabel>
        <HeaderLabel>SUBTOTAL</HeaderLabel>
      </TableGrid>
      <TableGrid>
        <ProductDesc>
          <Image
            src="https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
            width={91}
            height={114}
            alt="img"
          />
          <div>
            <ProductTitle>Viúva Negra</ProductTitle>
            <ProductPrice>R$ 29,99</ProductPrice>
          </div>
        </ProductDesc>
        <QuantOnCart />
        <Price>
          <p>R$ 29,99</p>
          <RemoveCart />
        </Price>
      </TableGrid>

      <CheckoutFooter>
        <Link href="/checkout/success">
          <CheckoutBotton> FINALIZAR PEDIDO</CheckoutBotton>
        </Link>
        <TotalPrice>
          <TotalLabel>TOTAL:</TotalLabel>
          <PriceLabel>R$ 29,99</PriceLabel>
        </TotalPrice>
      </CheckoutFooter>
    </CheckoutContainer>
  );
}
