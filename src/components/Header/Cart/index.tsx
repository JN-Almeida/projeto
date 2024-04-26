"use client";
import { useContext } from "react";
import Bag from "@/components/svg/bag.svg";
import { CartContext } from "@/context/cart";
import { productType } from "@/types/product";
import { Container, Quantity, Texts, Title } from "./styles";

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
