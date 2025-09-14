import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Inter } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "My Resto",
  description: "Experience culinary excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={geistSans.className}
      >
        {children}
      </body>
    </html>
  );
}
