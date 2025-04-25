import Link from "next/link";

/**
 * Thành phần Footer hiển thị phần cuối của trang web
 * @returns {JSX.Element} - Thành phần Footer được render
 */
export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Thông tin cửa hàng */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">StoreFront</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Địa chỉ cửa hàng tốt nhất cho mọi nhu cầu mua sắm của bạn.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-zinc-500 hover:text-indigo-600 dark:text-zinc-400"
              >
                Facebook
              </Link>
              <Link
                href="https://instagram.com"
                className="text-zinc-500 hover:text-indigo-600 dark:text-zinc-400"
              >
                Instagram
              </Link>
              <Link
                href="https://twitter.com"
                className="text-zinc-500 hover:text-indigo-600 dark:text-zinc-400"
              >
                Twitter
              </Link>
            </div>
          </div>

          {/* Sản phẩm */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Sản phẩm</h3>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/collections/all" className="hover:text-indigo-600">
                  Tất cả sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/featured"
                  className="hover:text-indigo-600"
                >
                  Nổi bật
                </Link>
              </li>
              <li>
                <Link href="/collections/new" className="hover:text-indigo-600">
                  Mới
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/sale"
                  className="hover:text-indigo-600"
                >
                  Khuyến mãi
                </Link>
              </li>
            </ul>
          </div>

          {/* Tài khoản */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Tài khoản</h3>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/account" className="hover:text-indigo-600">
                  Tài khoản của tôi
                </Link>
              </li>
              <li>
                <Link href="/account/orders" className="hover:text-indigo-600">
                  Đơn hàng
                </Link>
              </li>
              <li>
                <Link
                  href="/account/wishlist"
                  className="hover:text-indigo-600"
                >
                  Yêu thích
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-indigo-600">
                  Giỏ hàng
                </Link>
              </li>
            </ul>
          </div>

          {/* Trợ giúp */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Trợ giúp</h3>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/help" className="hover:text-indigo-600">
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-indigo-600">
                  Thông tin vận chuyển
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-indigo-600">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              &copy; {new Date().getFullYear()} StoreFront. Tất cả các quyền
              được bảo lưu.
            </p>
            <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <Link href="/privacy" className="hover:text-indigo-600">
                Chính sách bảo mật
              </Link>
              <Link href="/terms" className="hover:text-indigo-600">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
