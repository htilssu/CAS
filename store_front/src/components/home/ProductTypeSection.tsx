import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getProductsByType } from "@/lib/data";

/**
 * Props cho thành phần ProductTypeSection
 * @interface ProductTypeSectionProps
 * @property {string} productType - Loại sản phẩm
 * @property {"default" | "alternate"} [variant="default"] - Biến thể hiển thị
 */
interface ProductTypeSectionProps {
  productType: string;
  variant?: "default" | "alternate";
}

/**
 * Thành phần hiển thị các sản phẩm theo từng loại
 * @param {ProductTypeSectionProps} props - Props của thành phần
 * @returns {JSX.Element} - Thành phần ProductTypeSection được render
 */
export function ProductTypeSection({
  productType,
  variant = "default",
}: ProductTypeSectionProps) {
  // Lấy danh sách sản phẩm theo loại
  const products = getProductsByType(productType).slice(0, 5);

  // Kiểm tra nếu không có sản phẩm nào để hiển thị
  if (products.length === 0) {
    return null;
  }

  // Tạo tên hiển thị cho loại sản phẩm
  const displayName =
    productType.charAt(0).toUpperCase() + productType.slice(1);

  // Xác định màu nền và văn bản dựa trên variant
  const bgColor =
    variant === "default" ? "bg-white" : "bg-zinc-50 dark:bg-zinc-900";

  return (
    <section className={`py-10 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{displayName}</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Khám phá những sản phẩm {productType} chất lượng của chúng tôi
            </p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link
              href={`/products?type=${productType}`}
              className="flex items-center gap-1"
            >
              Xem tất cả
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Sản phẩm nổi bật - chiếm 5/12 columns */}
          <div className="md:col-span-5">
            <FeaturedProductCard product={products[0]} />
          </div>

          {/* Các sản phẩm khác - chiếm 7/12 columns */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-7 lg:grid-cols-4">
            {products.slice(1).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Hiển thị thẻ sản phẩm nổi bật
 * @param {Object} props - Props của component
 * @param {any} props.product - Sản phẩm hiển thị
 * @returns {JSX.Element} - Thành phần được render
 */
function FeaturedProductCard({ product }: { product: any }) {
  if (!product) return null;

  return (
    <Card className="group h-full overflow-hidden">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.images[0] || "/images/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {product.isNew && (
          <Badge className="absolute left-4 top-4 bg-blue-600">Mới</Badge>
        )}

        {product.isFeatured && (
          <Badge className="absolute left-4 top-12 bg-purple-600">
            Nổi bật
          </Badge>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-sm text-white/80">{product.productType}</div>
          <h3 className="mt-1 line-clamp-2 text-xl font-semibold text-white">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              {product.price.toLocaleString()}₫
            </span>
            {product.originalPrice && (
              <span className="text-sm text-white/70 line-through">
                {product.originalPrice.toLocaleString()}₫
              </span>
            )}
          </div>
          <Button variant="primary" className="mt-4 w-full" asChild>
            <Link href={`/products/${product.slug}`}>Xem chi tiết</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

/**
 * Hiển thị thẻ sản phẩm thông thường
 * @param {Object} props - Props của component
 * @param {any} props.product - Sản phẩm hiển thị
 * @returns {JSX.Element} - Thành phần được render
 */
function ProductCard({ product }: { product: any }) {
  if (!product) return null;

  return (
    <Card className="group overflow-hidden">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={product.images[0] || "/images/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {product.isNew && (
            <Badge className="absolute right-2 top-2 bg-blue-600">Mới</Badge>
          )}
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="line-clamp-2 font-medium hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="font-bold">{product.price.toLocaleString()}₫</span>
            {product.originalPrice && (
              <span className="text-xs text-zinc-500 line-through">
                {product.originalPrice.toLocaleString()}₫
              </span>
            )}
          </div>

          {product.variants && product.variants.length > 0 && (
            <span className="text-xs text-zinc-500">
              {product.variants.length} phiên bản
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
