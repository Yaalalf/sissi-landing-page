import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import FooterSection from "@/sections/FooterSection/FooterSection";

import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sissi Cliníca de Medicina Estética",
  description:
    "La Clínica de Medicina Estética ofrece tratamientos médicos faciales y corporales para el cuidado de su piel , consultas médicas para orientación dermocosmética y nutricosmética",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
    </html>
  );
}
