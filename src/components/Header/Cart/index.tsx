"use client";
import { cookies } from "next/headers";
import Bag from "@/components/svg/bag.svg";
import { Container, Quantity, Texts, Title } from "./styles";

const Cart = () => {
  const cookieCart = cookies().get("product")?.value;
  const cart: productType[] = cookieCart ? JSON.parse(cookieCart) : null;
  const totalItems = cart.reduce((acc, product) => {
    const quantity = product.qtd || 1;
    return acc + product.price * quantity;
  }, 0);

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
