import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Living Terrarium | Botanical Atelier",
  description: "Bespoke handcrafted living terrariums, paludariums, and aquascapes in Jamshedpur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-circle.png?v=3" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}