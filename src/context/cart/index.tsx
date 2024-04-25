/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";
import { useRouter } from "next/navigation";
import { setCookieCart } from "@/utils/cookies";

type CartProviderProps = {
  children: ReactNode;
  cookieCart: productType[];
};
export const CartContext = createContext({} as any);

function CartProvider({ children, cookieCart }: CartProviderProps) {
  const [cart, setCart] = useState<productType[]>(cookieCart || []);
  const router = useRouter();

  function removeItemOnCart(id: number) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  function changeQuantItem(id: number, qtd: number) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, qtd };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  }

  function addItemOnCart(product: productType) {
    const existingItemInCart: number = cart.findIndex(
      (item: productType) => item.id === product.id
    );

    if (existingItemInCart !== -1) {
      // Se o item já estiver no carrinho, incrementar a quantidade
      const updatedCart = [...cart];
      const existingItem = updatedCart[existingItemInCart];

      if (existingItem.qtd !== undefined) {
        existingItem.qtd += 1;
        setCart(updatedCart);
      }
    } else {
      // Se o item não estiver no carrinho, adicionar novo item com quantidade 1
      setCart((prevCart) => [...prevCart, { ...product, qtd: 1 }]);
    }
  }
  useMemo(() => {
    setCookieCart(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        removeItemOnCart,
        changeQuantItem,
        addItemOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
