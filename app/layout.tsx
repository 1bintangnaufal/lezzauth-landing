import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./templates/header";
import Footer from "./templates/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LezzAuth",
  description: "A platform to create authentication & user management",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "lezzform-mark.png",
        href: "lezzform-mark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "lezzform-mark.png",
        href: "lezzform-mark.png",
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
        <Footer />
      </body>
    </html>
  );
}
