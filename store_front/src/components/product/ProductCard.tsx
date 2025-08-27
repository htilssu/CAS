import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
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
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 rounded-2xl">
      <Link
        href={`/products/${slug}`}
        className="relative block aspect-square overflow-hidden rounded-t-2xl"
      >
        {(isFeatured || isNew || discountPercentage > 0 || isOutOfStock) && (
          <div className="absolute left-3 top-3 z-10 flex flex-col gap-2">
            {isNew && <Badge variant="default" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-lg">Mới</Badge>}
            {isFeatured && <Badge variant="success" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 shadow-lg">Nổi bật</Badge>}
            {discountPercentage > 0 && (
              <Badge variant="error" className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg animate-pulse">-{discountPercentage}%</Badge>
            )}
            {isOutOfStock && <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">Hết hàng</Badge>}
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 z-10 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full"
          aria-label="Thêm vào danh sách yêu thích"
        >
          <Heart className="h-4 w-4 text-slate-600 hover:text-red-500 transition-colors" />
        </Button>

        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-110 ${
            isOutOfStock ? "opacity-70 grayscale" : ""
          }`}
        />
        
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
            {category}
          </div>
          {productType && (
            <Badge variant="outline" className="text-xs bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border-violet-200">
              {productType}
            </Badge>
          )}
        </div>
        
        <Link href={`/products/${slug}`} className="group/title">
          <CardTitle className="text-lg font-bold text-slate-900 group-hover/title:text-blue-600 transition-colors duration-200 line-clamp-2 leading-tight">
            {name}
          </CardTitle>
        </Link>

        {variants && variants.length > 1 && (
          <div className="mt-2 text-sm text-slate-500 font-medium">
            {variants.length} phiên bản
          </div>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between p-5 pt-0">
        <div className="flex flex-col gap-1">
          {hasPriceVariation ? (
            <div className="font-bold text-lg text-slate-900">
              {minPrice === maxPrice
                ? `${minPrice.toLocaleString()}₫`
                : `${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}₫`}
            </div>
          ) : (
            <>
              <div className="font-bold text-lg text-slate-900">{price.toLocaleString()}₫</div>
              {originalPrice && (
                <div className="text-sm text-slate-400 line-through">
                  {originalPrice.toLocaleString()}₫
                </div>
              )}
            </>
          )}
        </div>
        
        <Button
          variant={isOutOfStock ? "outline" : "primary"}
          size="sm"
          disabled={isOutOfStock}
          aria-label="Thêm vào giỏ hàng"
          className="font-semibold"
        >
          {isOutOfStock ? "Hết hàng" : "Xem chi tiết"}
        </Button>
      </CardFooter>
    </Card>
  );
}
