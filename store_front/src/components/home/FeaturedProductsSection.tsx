import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getFeaturedProducts } from "@/lib/data";

/**
 * Thành phần hiển thị phần sản phẩm nổi bật trên trang chủ
 * @returns {JSX.Element} - Thành phần FeaturedProductsSection được render
 */
export function FeaturedProductsSection() {
  // Lấy danh sách sản phẩm nổi bật
  const featuredProducts = getFeaturedProducts().slice(0, 8);

  // Chuyển đổi sản phẩm để phù hợp với interface của ProductGrid
  const adaptedProducts = featuredProducts.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.productType || "Sản phẩm", // Sử dụng loại sản phẩm làm danh mục
    image: product.images[0] || "",
    price: product.price,
    originalPrice: product.originalPrice,
    isFeatured: product.isFeatured,
    isNew: product.isNew,
    isOutOfStock: product.isOutOfStock,
    productType: product.productType,
    variants: product.variants,
  }));

  return (
    <section className="bg-zinc-50 py-12 dark:bg-zinc-900 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Sản phẩm nổi bật</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Khám phá những sản phẩm được ưa chuộng nhất trên hệ thống
            </p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link
              href="/products?sort=featured"
              className="flex items-center gap-1"
            >
              Xem tất cả
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <ProductGrid products={adaptedProducts} />
      </div>
    </section>
  );
}
