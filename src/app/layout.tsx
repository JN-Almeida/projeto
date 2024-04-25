import Header from "@/components/Header";
import Providers from "@/providers";
import GlobalStyle from "@/styles/global";
import StyledComponentsRegistry from "@/styles/registry";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Section } from "./styles";

import { cookies } from "next/headers";

const openSans = Open_Sans({
  weight: ["500", "700"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teste Front React WeFit",
  description: "Teste de avaliação para vaga desenvolvedor Front-end WeFit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieCart = cookies().get('product')?.value
  const cart: productType[] = cookieCart ? JSON.parse(cookieCart) : null;

  return (
    <html lang="pt">
      <StyledComponentsRegistry>
        <Providers>
          <GlobalStyle />
          <body className={openSans.className}>
            <Header />
            <Section>{children}</Section>
          </body>
        </Providers>
      </StyledComponentsRegistry>
    </html>
  );
}
