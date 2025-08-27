import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "StoreFront - Cửa hàng trực tuyến hàng đầu",
  description:
    "Khám phá bộ sưu tập đa dạng với những thiết kế độc đáo, phong cách và thoải mái",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className="antialiased min-h-screen flex flex-col font-sans"
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
