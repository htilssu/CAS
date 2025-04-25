import { Suspense } from "react";
import CartContent from "@/components/cart/CartContent";

/**
 * Trang giỏ hàng
 * @returns {JSX.Element} - Trang giỏ hàng
 */
export default function CartPage() {
  return (
    <Suspense fallback={<div>Đang tải thông tin giỏ hàng...</div>}>
      <CartContent />
    </Suspense>
  );
}
