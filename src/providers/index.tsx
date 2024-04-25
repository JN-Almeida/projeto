"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import CartProvider from "@/context/cart";

const Providers = ({
  children,
  cookieCart,
}: {
  children: React.ReactNode;
  cookieCart: any;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider cookieCart={cookieCart}>{children}</CartProvider>
    </ThemeProvider>
  );
};

export default Providers;
