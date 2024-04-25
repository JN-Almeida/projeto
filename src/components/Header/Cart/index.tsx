import { cookies } from "next/headers";
import Bag from "@/components/svg/bag.svg";
import { Container, Quantity, Texts, Title } from "./styles";

import { productType } from "@/types/product";
const Cart = () => {
  const cookieCart = cookies().get("product")?.value;
  const cart: productType[] = cookieCart ? JSON.parse(cookieCart) : null;
  const totalItems = cart.reduce((acc, item) => acc + (item.qtd || 1), 0);

  return (
    <Container href="/checkout">
      <Texts>
        <Title>Meu Carrinho</Title>
        <Quantity>{totalItems} itens</Quantity>
      </Texts>
      <Bag />
    </Container>
  );
};

export default Cart;
