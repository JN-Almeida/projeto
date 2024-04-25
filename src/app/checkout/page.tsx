import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import QuantOnCart from "./_components/QuantOnCart";
import RemoveCart from "./_components/RemoveCart";
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

export default async function Checkout() {
  const cookieCart = cookies().get("product")?.value;
  const cart: productType[] = cookieCart ? JSON.parse(cookieCart) : null;
  const total = cart.reduce((acc, product) => {
    const quantity = product.qtd || 1;
    return acc + product.price * quantity;
  }, 0);

  return (
    <CheckoutContainer>
      <TableGrid>
        <HeaderLabel>PRODUTO</HeaderLabel>
        <HeaderLabel>QTD</HeaderLabel>
        <HeaderLabel>SUBTOTAL</HeaderLabel>
      </TableGrid>
      {cart?.map((product: productType) => (
        <TableGrid key={product.id}>
          <ProductDesc>
            <Image src={product.image} width={91} height={114} alt="img" />
            <div>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
            </div>
          </ProductDesc>
          <QuantOnCart id={product.id} qtd={product.qtd || 1} />
          <Price>
            <p>{product.price * (product.qtd || 1)}</p>
            <RemoveCart id={product.id} />
          </Price>
        </TableGrid>
      ))}

      <CheckoutFooter>
        <Link href="/checkout/success">
          <CheckoutBotton> FINALIZAR PEDIDO</CheckoutBotton>
        </Link>
        <TotalPrice>
          <TotalLabel>TOTAL:</TotalLabel>
          <PriceLabel>{total.toFixed(2)}</PriceLabel>
        </TotalPrice>
      </CheckoutFooter>
    </CheckoutContainer>
  );
}
