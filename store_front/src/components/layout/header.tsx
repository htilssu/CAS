import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Thành phần Header hiển thị thanh điều hướng chính của trang web
 * @returns {JSX.Element} - Thành phần Header được render
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gradient-to-r from-slate-200/50 to-blue-200/50 bg-white/95 backdrop-blur-md shadow-sm dark:border-slate-800/50 dark:bg-slate-950/95">
      <div className="container mx-auto flex h-18 items-center justify-between px-6">
        {/* Logo và Menu Mobile */}
        <div className="flex items-center gap-3 md:gap-6">
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200">
            <Menu className="h-5 w-5 text-slate-700" />
            <span className="sr-only">Menu</span>
          </Button>

          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">SF</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-200">
              StoreFront
            </span>
          </Link>
        </div>

        {/* Điều hướng - Ẩn trên mobile */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/category/all"
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 hover:after:w-full after:transition-all after:duration-200"
          >
            Tất cả sản phẩm
          </Link>
          <Link
            href="/category/featured"
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 hover:after:w-full after:transition-all after:duration-200"
          >
            Nổi bật
          </Link>
          <Link
            href="/category/new"
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 hover:after:w-full after:transition-all after:duration-200"
          >
            Mới
          </Link>
          <Link
            href="/category/sale"
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 hover:after:w-full after:transition-all after:duration-200"
          >
            Khuyến mãi
          </Link>
        </nav>

        {/* Tìm kiếm, Giỏ hàng, Tài khoản */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 rounded-xl">
            <Search className="h-5 w-5 text-slate-700" />
            <span className="sr-only">Tìm kiếm</span>
          </Button>

          <Button variant="ghost" size="icon" asChild className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 rounded-xl">
            <Link href="/account">
              <User className="h-5 w-5 text-slate-700" />
              <span className="sr-only">Tài khoản</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="relative hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 rounded-xl">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5 text-slate-700" />
              <span className="sr-only">Giỏ hàng</span>
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-[10px] font-bold text-white shadow-lg animate-pulse">
                0
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
