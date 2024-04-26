"use client";
import { useContext } from "react";
import { CartContext } from "@/context/cart";
import { CheckoutBotton } from "../../styles";

const FinishBuy = () => {
  const { clearCart } = useContext(CartContext);

  return (
    <CheckoutBotton onClick={() => clearCart()}>
      FINALIZAR PEDIDO
    </CheckoutBotton>
  );
};

export default FinishBuy;
