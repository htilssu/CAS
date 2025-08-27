import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductById } from "@/lib/data";

/**
 * Thành phần hiển thị các sản phẩm đã xem gần đây
 * @returns {JSX.Element} - Thành phần RecentlyViewedSection được render
 */
export function RecentlyViewedSection() {
  const [recentlyViewed, setRecentlyViewed] = useState<any[]>([]);

  // Giả lập việc lấy dữ liệu sản phẩm đã xem
  useEffect(() => {
    // Thông thường, chúng ta sẽ lấy danh sách id từ localStorage hoặc cookies
    // Nhưng ở đây chúng ta sẽ sử dụng dữ liệu mẫu
    const mockViewedIds = [
      "ao-thun-basic-cotton",
      "smartphone-galaxy-s22",
      "kem-danh-rang-fresh-mint",
      "quan-jean-slim-fit",
    ];

    // Lấy thông tin chi tiết của từng sản phẩm
    const products = mockViewedIds
      .map((id) => getProductById(id))
      .filter((product) => product !== undefined);

    // @ts-ignore - We know the products are not undefined
    setRecentlyViewed(products);
  }, []);

  // Kiểm tra nếu không có sản phẩm nào
  if (recentlyViewed.length === 0) {
    return null;
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-zinc-600" />
            <h2 className="text-2xl font-bold md:text-3xl">Đã xem gần đây</h2>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/products" className="flex items-center gap-1">
              Xem tất cả sản phẩm
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {recentlyViewed.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={product.images[0] || "/images/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>

              <CardContent className="p-4">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {product.productType}
                </div>
                <Link href={`/products/${product.slug}`}>
                  <h3 className="line-clamp-2 text-sm font-medium hover:text-primary">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-2 flex items-center gap-1">
                  <span className="font-bold">
                    {product.price.toLocaleString()}₫
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-zinc-500 line-through">
                      {product.originalPrice.toLocaleString()}₫
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
