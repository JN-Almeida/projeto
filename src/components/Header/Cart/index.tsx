"use client";
import { cookies } from "next/headers";
import Bag from "@/components/svg/bag.svg";
import { Container, Quantity, Texts, Title } from "./styles";
import { CartContext } from "@/context/cart";
import { useContext } from "react";

const Cart = () => {
  const { addItemOnCart, cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc: any, product: any) => {
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
