"use client";
import { ThemeProvider } from "styled-components";
import {theme} from "@/styles/theme";

const Providers = ({
  children,
  cookieCart,
}: {
  children: React.ReactNode;
  cookieCart: any;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
