import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Interface cho mặt hàng trong giỏ hàng
 * @interface CartItem
 * @property {string} id - ID của sản phẩm
 * @property {string} name - Tên sản phẩm
 * @property {string} slug - Slug URL của sản phẩm
 * @property {string} image - Đường dẫn hình ảnh sản phẩm
 * @property {number} price - Giá sản phẩm
 * @property {string} size - Kích thước đã chọn
 * @property {string} color - Màu sắc đã chọn
 * @property {number} quantity - Số lượng
 */
interface CartItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}

/**
 * Dữ liệu mẫu cho giỏ hàng
 */
const cartItems: CartItem[] = [
  {
    id: "product-1",
    name: "Áo Thun Basic Cotton",
    slug: "ao-thun-basic-cotton",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 250000,
    size: "M",
    color: "Đen",
    quantity: 2,
  },
  {
    id: "product-2",
    name: "Quần Jean Slim Fit",
    slug: "quan-jean-slim-fit",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 550000,
    size: "32",
    color: "Xanh đậm",
    quantity: 1,
  },
];

/**
 * Trang giỏ hàng
 * @returns {JSX.Element} - Thành phần trang giỏ hàng được render
 */
export default function CartPage() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-8 text-2xl font-bold md:text-3xl">Giỏ hàng của bạn</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-zinc-200 py-16 dark:border-zinc-800">
          <p className="mb-4 text-xl font-medium">
            Giỏ hàng của bạn đang trống
          </p>
          <p className="mb-8 text-zinc-500 dark:text-zinc-400">
            Thêm một vài sản phẩm và quay lại đây nhé!
          </p>
          <Button variant="primary" asChild>
            <Link href="/category/all">Tiếp tục mua sắm</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Danh sách sản phẩm */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 sm:flex-row"
                >
                  <div className="relative h-24 w-full sm:h-36 sm:w-36">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex justify-between">
                      <Link
                        href={`/products/${item.slug}`}
                        className="font-medium hover:underline"
                      >
                        {item.name}
                      </Link>
                      <div className="font-medium">
                        {(item.price * item.quantity).toLocaleString()}₫
                      </div>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                      <span>Size: {item.size}</span>
                      <span>•</span>
                      <span>Màu: {item.color}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-zinc-200 dark:border-zinc-800">
                        <button
                          className="flex h-8 w-8 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                          aria-label="Giảm số lượng"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          className="h-8 w-12 border-x border-zinc-200 bg-transparent text-center text-sm dark:border-zinc-800"
                          readOnly
                        />
                        <button
                          className="flex h-8 w-8 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                          aria-label="Tăng số lượng"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        className="flex items-center text-sm text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
                        aria-label="Xóa sản phẩm"
                      >
                        <Trash2 className="mr-1 h-4 w-4" />
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex flex-col space-y-2">
                <Button asChild>
                  <Link href="/checkout">Thanh toán</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/category/all">Tiếp tục mua sắm</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Tóm tắt đơn hàng */}
          <div>
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="mb-4 text-lg font-bold">Tóm tắt đơn hàng</h2>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">
                    Tạm tính ({cartItems.length} sản phẩm)
                  </span>
                  <span>{subtotal.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">
                    Phí vận chuyển
                  </span>
                  <span>
                    {shipping === 0
                      ? "Miễn phí"
                      : `${shipping.toLocaleString()}₫`}
                  </span>
                </div>
                <div className="my-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                  <div className="flex justify-between font-bold">
                    <span>Tổng cộng</span>
                    <span>{total.toLocaleString()}₫</span>
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Đã bao gồm VAT
                  </div>
                </div>
              </div>

              <Button variant="primary" className="mt-4 w-full">
                Tiến hành thanh toán
              </Button>

              <div className="mt-4 text-center text-xs text-zinc-500 dark:text-zinc-400">
                Chúng tôi chấp nhận thanh toán qua thẻ tín dụng, chuyển khoản
                ngân hàng, và thanh toán khi nhận hàng.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
