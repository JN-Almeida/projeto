"use client";
import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/context/cart";
import { CheckoutBotton } from "../../styles";
import { useRouter } from "next/navigation";

const FinishBuy = () => {
  const { clearCart } = useContext(CartContext);
  const router = useRouter();
  const handleBuy = () => {
    console.log("22");
    console.log("33");
    clearCart();
    router.push("/checkout/success");
    console.log("44");
  };

  return (
    <CheckoutBotton
      onClick={() => clearCart()}
    >
      FINALIZAR PEDIDO
    </CheckoutBotton>
  );
};

export default FinishBuy;
