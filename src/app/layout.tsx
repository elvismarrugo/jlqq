import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - AdrianShop | Justo lo que quieres',
    default: "AdrianShop | Justo lo que quieres",
  },
  description: 'Tu centro comercial virtual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${inter.className} antialiased`}
      >
         <Providers>{children}</Providers>
      </body>
    </html>
  );
}
