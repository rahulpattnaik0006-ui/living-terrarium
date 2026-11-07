import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Living Terrarium | Botanical Atelier",
  description: "Bespoke handcrafted living terrariums, paludariums, and aquascapes in Jamshedpur.",
  icons: {
    icon: "/favicon.ico?v=5",
    shortcut: "/favicon.ico?v=5",
    apple: "/logo-circle.png?v=5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=5" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}