import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Thành phần Header hiển thị thanh điều hướng chính của trang web
 * @returns {JSX.Element} - Thành phần Header được render
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo và Menu Mobile */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>

          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">StoreFront</span>
          </Link>
        </div>

        {/* Điều hướng - Ẩn trên mobile */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/collections/all"
            className="text-sm font-medium hover:text-indigo-600 transition-colors"
          >
            Tất cả sản phẩm
          </Link>
          <Link
            href="/collections/featured"
            className="text-sm font-medium hover:text-indigo-600 transition-colors"
          >
            Nổi bật
          </Link>
          <Link
            href="/collections/new"
            className="text-sm font-medium hover:text-indigo-600 transition-colors"
          >
            Mới
          </Link>
          <Link
            href="/collections/sale"
            className="text-sm font-medium hover:text-indigo-600 transition-colors"
          >
            Khuyến mãi
          </Link>
        </nav>

        {/* Tìm kiếm, Giỏ hàng, Tài khoản */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Tìm kiếm</span>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Tài khoản</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Giỏ hàng</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-medium text-white">
                0
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
