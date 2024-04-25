"use client";
import { useContext, useEffect, useState } from "react";
import Plus from "@/components/svg/plus.svg";
import Minus from "@/components/svg/minus.svg";
import { ActionButton, Container, InputQuant } from "./styles";
//import { CartContext } from "@/context/cart";

const QuantOnCart = ({ id, qtd }: { id: number; qtd: number }) => {
  //const { changeQuantItem } = useContext(CartContext);
  const [qtdOnCart, setQtdOnCart] = useState(1);

  // useEffect(() => {
  //   changeQuantItem(id, qtdOnCart);
  // }, [qtdOnCart]);
  return (
    <Container>
      <ActionButton onClick={() => setQtdOnCart(qtdOnCart - 1)}>
        <Minus />
      </ActionButton>
      <InputQuant
        type="number"
        value={qtdOnCart}
        onChange={(e) => setQtdOnCart(Number(e.target.value))}
      />
      <ActionButton onClick={() => setQtdOnCart(qtdOnCart + 1)}>
        <Plus />
      </ActionButton>
    </Container>
  );
};

export default QuantOnCart;
