import { cookies } from "next/headers";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Section } from "./styles";

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

  return (
    <html lang="pt">
          <body className={openSans.className}>
            <Section>{children}</Section>
          </body>
    </html>
  );
}
