import { Suspense } from "react";
import ProductsContent from "@/components/product/ProductsContent";

/**
 * Trang hiển thị danh sách sản phẩm
 * @returns {React.ReactElement} - Trang sản phẩm
 */
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  
  return (
    <Suspense fallback={<div>Đang tải dữ liệu sản phẩm...</div>}>
      <ProductsContent searchParams={params} />
    </Suspense>
  );
}
