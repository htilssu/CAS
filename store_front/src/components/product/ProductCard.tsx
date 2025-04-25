import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/Card";

/**
 * Giao diện cho dữ liệu sản phẩm
 * @interface ProductProps
 * @property {string} id - ID của sản phẩm
 * @property {string} name - Tên sản phẩm
 * @property {string} slug - Slug URL của sản phẩm
 * @property {string} category - Danh mục sản phẩm
 * @property {string} image - Đường dẫn hình ảnh sản phẩm
 * @property {number} price - Giá sản phẩm
 * @property {number} [originalPrice] - Giá gốc trước khi giảm giá (nếu có)
 * @property {boolean} isFeatured - Có phải là sản phẩm nổi bật
 * @property {boolean} isNew - Có phải là sản phẩm mới
 * @property {boolean} [isOutOfStock] - Sản phẩm hết hàng
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
}: ProductProps) {
  // Tính phần trăm giảm giá nếu có
  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

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
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          {category}
        </div>
        <Link href={`/products/${slug}`}>
          <CardTitle className="mt-1 line-clamp-1 text-base hover:underline">
            {name}
          </CardTitle>
        </Link>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-center gap-2">
          <div className="font-medium">{price.toLocaleString()}₫</div>
          {originalPrice && (
            <div className="text-sm text-zinc-500 line-through dark:text-zinc-400">
              {originalPrice.toLocaleString()}₫
            </div>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          disabled={isOutOfStock}
          aria-label="Thêm vào giỏ hàng"
        >
          {isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}
        </Button>
      </CardFooter>
    </Card>
  );
}
