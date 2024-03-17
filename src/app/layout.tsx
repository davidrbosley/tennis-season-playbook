import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Providers from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tennis Season Playbook",
  description: "Playbook for planning your tennis season.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className="container mx-auto px-4 max-w-6xl">
            <main>{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
