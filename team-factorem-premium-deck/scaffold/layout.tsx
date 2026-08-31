import type { Metadata } from "next";
import "./globals.css";

// The three-font system IS the brand. Space Grotesk (display) + Playfair Display
// (serif italic accents) + Inter (body). Don't substitute fonts — it breaks the look.
export const metadata: Metadata = {
  title: "Factorem — Powering the Future of Hardware",
  description: "Premium deck",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
