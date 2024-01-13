import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./templates/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LezzAuth",
  description: "A platform to create authentication & user management",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "favicon-alt.ico",
        href: "favicon-alt.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "favicon.ico",
        href: "favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
