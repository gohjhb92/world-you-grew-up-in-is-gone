import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The World You Grew Up In Is Gone",
  description: "An immersive interactive editorial experience about the end of the liberal world order."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
