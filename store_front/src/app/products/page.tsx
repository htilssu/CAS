import { Suspense } from "react";
import ProductsContent from "@/components/product/ProductsContent";

/**
 * Trang hiển thị danh sách sản phẩm
 * @returns {React.ReactElement} - Trang sản phẩm
 */
export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Suspense fallback={<div>Đang tải dữ liệu sản phẩm...</div>}>
      <ProductsContent searchParams={searchParams} />
    </Suspense>
  );
}
