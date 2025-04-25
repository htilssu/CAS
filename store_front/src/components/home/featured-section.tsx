import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/product/product-grid";

/**
 * Dữ liệu mẫu cho các sản phẩm nổi bật
 */
const featuredProducts = [
  {
    id: "product-1",
    name: "Áo Thun Basic Cotton",
    slug: "ao-thun-basic-cotton",
    category: "Áo thun",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 250000,
    originalPrice: 300000,
    isFeatured: true,
    isNew: true,
  },
  {
    id: "product-2",
    name: "Quần Jean Slim Fit",
    slug: "quan-jean-slim-fit",
    category: "Quần jean",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 550000,
    isFeatured: true,
  },
  {
    id: "product-3",
    name: "Áo Khoác Denim Oversized",
    slug: "ao-khoac-denim-oversized",
    category: "Áo khoác",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 850000,
    originalPrice: 950000,
    isFeatured: true,
  },
  {
    id: "product-4",
    name: "Giày Sneaker Canvas",
    slug: "giay-sneaker-canvas",
    category: "Giày",
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 650000,
    isFeatured: true,
    isOutOfStock: true,
  },
];

/**
 * Thành phần hiển thị phần sản phẩm nổi bật trên trang chủ
 * @returns {JSX.Element} - Thành phần FeaturedSection được render
 */
export function FeaturedSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Sản phẩm nổi bật</h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Khám phá những sản phẩm được ưa chuộng nhất của chúng tôi
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link
            href="/collections/featured"
            className="flex items-center gap-1"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <ProductGrid products={featuredProducts} />
    </section>
  );
}
