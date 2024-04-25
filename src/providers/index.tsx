"use client";
import { ThemeProvider } from "styled-components";
import themeDefault from "@/styles/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={themeDefault}>{children}</ThemeProvider>;
};

export default Providers;
