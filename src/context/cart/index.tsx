"use client";
import { createContext, ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { setCookieCart } from "@/utils/cookies";
import { productType } from "@/types/product";

type CartProviderProps = {
  children: ReactNode;
  cookieCart: productType[];
};
type CartContextType = {
  cart: productType[];
  removeItemOnCart: (id: number) => void;
  changeQuantItem: (id: number, qtd: number) => void;
  addItemOnCart: (product: productType) => void;
  clearCart: () => void;
};

export const CartContext = createContext({} as CartContextType);

function CartProvider({ children, cookieCart }: CartProviderProps) {
  const [cart, setCart] = useState<productType[]>(cookieCart || []);
  const router = useRouter();

  function removeItemOnCart(id: number) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }
  async function clearCart() {
    await setCart([]);

    router.push("/checkout/success");
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
    setCookieCart(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        removeItemOnCart,
        changeQuantItem,
        addItemOnCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
