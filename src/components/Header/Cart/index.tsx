"use client";
import Bag from "@/components/svg/bag.svg";
import { Container, Quantity, Texts, Title } from "./styles";
import { CartContext } from "@/context/cart";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce(
    (acc: any, product: productType) => acc + (product.qtd || 1),
    0
  );

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
