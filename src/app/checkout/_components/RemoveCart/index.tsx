"use client";
import { useContext } from "react";
//import { CartContext } from "@/context/cart";
import { IconTrash } from "@/components/svg";

const RemoveCart = ({ id }: { id: number }) => {
  //const { removeItemOnCart } = useContext(CartContext);

  return (
    <button>
      <IconTrash />
    </button>
  );
};

export default RemoveCart;
