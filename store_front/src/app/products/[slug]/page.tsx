import { Suspense } from "react";
import ProductDetailContent from "@/components/product/ProductDetailContent";

/**
 * Props cho trang chi tiết sản phẩm
 * @interface ProductPageProps
 * @property {Object} params - Tham số từ URL
 * @property {string} params.slug - Slug của sản phẩm
 */
interface ProductPageProps {
  params: {
    slug: string;
  };
}

/**
 * Trang chi tiết sản phẩm
 * @param {ProductPageProps} props - Props cho trang chi tiết sản phẩm
 * @returns {JSX.Element} - Trang chi tiết sản phẩm
 */
export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<div>Đang tải thông tin sản phẩm...</div>}>
      <ProductDetailContent slug={params.slug} />
    </Suspense>
  );
}
