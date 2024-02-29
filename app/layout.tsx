import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nextjs14-supabase-bbs-challenge",
  description: "nextjs14-supabase-bbs-challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}

//　どのページにも表示させたいコンポーネントを{children}の前後へ
