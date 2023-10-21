import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

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
      <body className={inter.className}>
        <div className="flex p-4 m-4 justify-center space-x-4">
          <h3>
            <Link href="/">Home</Link>
          </h3>
          <h3>
            <Link href="/users">Users</Link>
          </h3>
          <h3>
            <Link href="/admin">Admin</Link>
          </h3>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
