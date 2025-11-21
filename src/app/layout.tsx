import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio de Projetos - Wellerson Mota",
  description: "Portfólio de Ciência de Dados de Wellerson Mota. Projetos de análise de dados, Business Intelligence e visualização de dados.",
  keywords: "Ciência de Dados, Data Science, Business Intelligence, Python, SQL, Power BI, Portfólio",
  authors: [{ name: "Wellerson Mota" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${openSans.variable} antialiased font-sans bg-white text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
