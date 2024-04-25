
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Section } from "./styles";

import { cookies } from "next/headers";
import StyledComponentsRegistry from "@/styles/registry";
import GlobalStyle from "@/styles/global";

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
  const cookieCart = cookies().get("product")?.value;

  return (
    <html lang="pt">
      <StyledComponentsRegistry>
        <GlobalStyle />
        <body className={openSans.className}>
          <Section>{children}</Section>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
