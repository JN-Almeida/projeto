import Image from "next/image";
import { cookies } from "next/headers";
import QuantOnCart from "./_components/QuantOnCart";
import RemoveCart from "./_components/RemoveCart";
import FinishBuy from "./_components/FinishBuy";
import { priceNumber } from "@/utils/numberFormat";
import {
  CheckoutContainer,
  CheckoutFooter,
  HeaderLabel,
  Price,
  PriceLabel,
  ProductImg,
  ProductPrice,
  ProductTitle,
  TableGrid,
  TableGridHeader,
  TotalLabel,
  TotalPrice,
} from "./styles";
import { productType } from "@/types/product";

export default async function Checkout() {
  const cookieCart = cookies().get("product")?.value;
  const cart: productType[] = cookieCart ? JSON.parse(cookieCart) : null;
  const total = cart.reduce((acc, product) => {
    const quantity = product.qtd || 1;
    return acc + product.price * quantity;
  }, 0);

  return (
    <CheckoutContainer>
      <TableGridHeader>
        <HeaderLabel>PRODUTO</HeaderLabel>
        <HeaderLabel>QTD</HeaderLabel>
        <HeaderLabel>SUBTOTAL</HeaderLabel>
      </TableGridHeader>
      {cart?.map((product: productType) => (
        <TableGrid key={product.id}>
          <ProductImg>
            <Image src={product.image} fill alt="img" />
          </ProductImg>
          <div>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{priceNumber(product.price)}</ProductPrice>
          </div>
          <QuantOnCart id={product.id} qtd={product.qtd || 1} />
          <Price>
            <HeaderLabel>SUBTOTAL</HeaderLabel>
            <p>{priceNumber(product.price * (product.qtd || 1))}</p>
            <RemoveCart id={product.id} />
          </Price>
        </TableGrid>
      ))}

      <CheckoutFooter>
        <FinishBuy />
        <TotalPrice>
          <TotalLabel>TOTAL:</TotalLabel>
          <PriceLabel>{priceNumber(total)}</PriceLabel>
        </TotalPrice>
      </CheckoutFooter>
    </CheckoutContainer>
  );
}
