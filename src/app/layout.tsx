import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pryme - Concierge Primary Care",
  description: "Experience healthcare designed around you—comprehensive, accessible, and deeply personal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}