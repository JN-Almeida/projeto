"use client";

import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { setCookieCart } from "@/utils/cookies";
import Cookies from "js-cookie";

import { productType } from "@/types/product";
type CartProviderProps = {
  children: ReactNode;
  cookieCart: productType[];
};
export const CartContext = createContext({} as any);

function CartProvider({ children, cookieCart }: CartProviderProps) {
  const [cart, setCart] = useState<productType[]>(cookieCart || []);

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
      const updatedCart = [...cart];
      const existingItem = updatedCart[existingItemInCart];

      if (existingItem.qtd !== undefined) {
        existingItem.qtd += 1;
        setCart(updatedCart);
      }
    } else {
      setCart((prevCart) => [...prevCart, { ...product, qtd: 1 }]);
    }
  }
  useEffect(() => {
    Cookies.set("product", JSON.stringify(cart));
    //setCookieCart(cart);
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
function useCart() {
  const context = useContext(CartContext);
  return context;
}
export { CartProvider, useCart };
