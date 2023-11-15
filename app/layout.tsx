import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import AuthProvider from "./components/auth/provider";
import Navbar from "./components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className="flex flex-col">
      <AuthProvider>
        <body className={inter.className}>
          <div className="flex p-4 w-full justify-center border-b">
            <Navbar />
          </div>
          <div className="mt-6">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
