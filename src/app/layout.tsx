import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kauan Mizael de Oliveira",
  description: "Portfólio profissional — Administração, Comercial, Vendas, Assistente TI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
