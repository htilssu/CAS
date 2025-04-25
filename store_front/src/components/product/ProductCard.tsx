import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/Card";
import { ProductVariant } from "@/lib/types";

/**
 * Giao diện cho dữ liệu sản phẩm
 * @interface ProductProps
 * @property {string} id - ID của sản phẩm
 * @property {string} name - Tên sản phẩm
 * @property {string} slug - Slug URL của sản phẩm
 * @property {string} category - Danh mục sản phẩm
 * @property {string} image - Đường dẫn hình ảnh sản phẩm
 * @property {number} price - Giá cơ bản của sản phẩm
 * @property {number} [originalPrice] - Giá gốc trước khi giảm giá (nếu có)
 * @property {boolean} [isFeatured] - Có phải là sản phẩm nổi bật
 * @property {boolean} [isNew] - Có phải là sản phẩm mới
 * @property {boolean} [isOutOfStock] - Sản phẩm hết hàng
 * @property {string} [productType] - Loại sản phẩm
 * @property {ProductVariant[]} [variants] - Các biến thể của sản phẩm
 */
interface ProductProps {
  id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  originalPrice?: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isOutOfStock?: boolean;
  productType?: string;
  variants?: ProductVariant[];
}

/**
 * Thành phần hiển thị thẻ sản phẩm
 * @param {ProductProps} props - Dữ liệu sản phẩm
 * @returns {JSX.Element} - Thành phần ProductCard được render
 */
export function ProductCard({
  id,
  name,
  slug,
  category,
  image,
  price,
  originalPrice,
  isFeatured,
  isNew,
  isOutOfStock,
  productType,
  variants,
}: ProductProps) {
  // Tính phần trăm giảm giá nếu có
  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  // Kiểm tra nếu sản phẩm có nhiều biến thể giá khác nhau
  const hasPriceVariation =
    variants && variants.length > 0 && variants.some((v) => v.price !== price);

  // Tìm giá thấp nhất và cao nhất trong các biến thể
  let minPrice = price;
  let maxPrice = price;

  if (variants && variants.length > 0) {
    const prices = variants.map((v) => v.price);
    minPrice = Math.min(...prices);
    maxPrice = Math.max(...prices);
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-md">
      <Link
        href={`/products/${slug}`}
        className="relative block aspect-square overflow-hidden"
      >
        {(isFeatured || isNew || discountPercentage > 0 || isOutOfStock) && (
          <div className="absolute left-2 top-2 z-10 flex flex-col gap-1">
            {isNew && <Badge variant="default">Mới</Badge>}
            {isFeatured && <Badge variant="success">Nổi bật</Badge>}
            {discountPercentage > 0 && (
              <Badge variant="error">-{discountPercentage}%</Badge>
            )}
            {isOutOfStock && <Badge variant="outline">Hết hàng</Badge>}
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label="Thêm vào danh sách yêu thích"
        >
          <Heart className="h-5 w-5" />
        </Button>

        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            isOutOfStock ? "opacity-70" : ""
          }`}
        />
      </Link>

      <CardContent className="p-4">
        <div className="flex justify-between">
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            {category}
          </div>
          {productType && (
            <Badge variant="outline" className="text-xs">
              {productType}
            </Badge>
          )}
        </div>
        <Link href={`/products/${slug}`}>
          <CardTitle className="mt-1 line-clamp-1 text-base hover:underline">
            {name}
          </CardTitle>
        </Link>

        {variants && variants.length > 1 && (
          <div className="mt-2 text-xs text-zinc-500">
            {variants.length} phiên bản
          </div>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-center gap-2">
          {hasPriceVariation ? (
            <div className="font-medium">
              {minPrice === maxPrice
                ? `${minPrice.toLocaleString()}₫`
                : `${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}₫`}
            </div>
          ) : (
            <>
              <div className="font-medium">{price.toLocaleString()}₫</div>
              {originalPrice && (
                <div className="text-sm text-zinc-500 line-through dark:text-zinc-400">
                  {originalPrice.toLocaleString()}₫
                </div>
              )}
            </>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          disabled={isOutOfStock}
          aria-label="Thêm vào giỏ hàng"
        >
          {isOutOfStock ? "Hết hàng" : "Xem chi tiết"}
        </Button>
      </CardFooter>
    </Card>
  );
}
