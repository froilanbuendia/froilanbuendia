import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Contacts from "./components/Contacts/Contacts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Froilan Buendia",
  description: "Portolio Website",
  robots: {
    noimageindex: true,
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
        <Navbar />
        {children}
        <Contacts />
      </body>
    </html>
  );
}
