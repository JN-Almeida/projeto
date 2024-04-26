"use client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/theme";
import CartProvider from "@/context/cart";

const Providers = ({
  children,
  cookieCart,
}: {
  children: React.ReactNode;
  cookieCart: any;
}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider cookieCart={cookieCart}>{children}</CartProvider>
    </ThemeProvider>
  );
};

export default Providers;
