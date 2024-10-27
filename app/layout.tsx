import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import classes from "../app/layout.module.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Karan Sharma",
  description: "Digital Portfolio shared with the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${classes.root}`}>
        {children}
      </body>

    </html>
  );
}
