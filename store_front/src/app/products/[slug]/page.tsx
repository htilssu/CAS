import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, TruckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductGrid } from "@/components/product/product-grid";

/**
 * Interface cho các sản phẩm trong dữ liệu mẫu
 */
interface ProductData {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  features: string[];
  images: string[];
  price: number;
  originalPrice?: number;
  isFeatured: boolean;
  isNew?: boolean;
  availableSizes: string[];
  availableColors: string[];
  relatedProducts: {
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
  }[];
}

/**
 * Dữ liệu mẫu cho các sản phẩm
 */
const products: Record<string, ProductData> = {
  "ao-thun-basic-cotton": {
    id: "product-1",
    name: "Áo Thun Basic Cotton",
    slug: "ao-thun-basic-cotton",
    category: "Áo thun",
    description:
      "Áo thun cơ bản được làm từ chất liệu cotton cao cấp, mềm mại và thoáng khí. Thiết kế đơn giản với dáng regular fit giúp bạn thoải mái trong mọi hoạt động. Sản phẩm có thể dễ dàng kết hợp với nhiều trang phục khác nhau.",
    features: [
      "Chất liệu: 100% cotton combed",
      "Dáng: Regular fit",
      "Công nghệ: Chống tia UV",
      "Màu sắc: Nhiều màu lựa chọn",
    ],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    price: 250000,
    originalPrice: 300000,
    isFeatured: true,
    isNew: true,
    availableSizes: ["S", "M", "L", "XL"],
    availableColors: ["Đen", "Trắng", "Xám", "Xanh navy"],
    relatedProducts: [
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
        id: "product-5",
        name: "Áo Sơ Mi Linen",
        slug: "ao-so-mi-linen",
        category: "Áo sơ mi",
        image:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 450000,
        isNew: true,
      },
    ],
  },
  "quan-jean-slim-fit": {
    id: "product-2",
    name: "Quần Jean Slim Fit",
    slug: "quan-jean-slim-fit",
    category: "Quần jean",
    description:
      "Quần jean slim fit với thiết kế ôm vừa phải, tôn dáng người mặc. Làm từ chất liệu denim bền bỉ, co giãn nhẹ mang lại sự thoải mái trong mọi hoạt động. Thiết kế 5 túi cổ điển với đường may tỉ mỉ, màu sắc hiện đại dễ dàng phối đồ.",
    features: [
      "Chất liệu: 98% cotton, 2% spandex",
      "Dáng: Slim fit",
      "Phom dáng: Ôm vừa phải, dễ mặc",
      "Nhiều màu sắc lựa chọn",
    ],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1608246315346-2e2f0c82ee6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    price: 550000,
    isFeatured: true,
    availableSizes: ["29", "30", "31", "32", "33", "34"],
    availableColors: ["Xanh đậm", "Xanh nhạt", "Đen"],
    relatedProducts: [
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
        id: "product-6",
        name: "Quần Short Kaki",
        slug: "quan-short-kaki",
        category: "Quần short",
        image:
          "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 350000,
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
    ],
  },
};

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
 * @returns {JSX.Element} - Thành phần trang chi tiết sản phẩm được render
 */
export default function ProductPage({ params }: ProductPageProps) {
  const slug = params.slug;
  // Sản phẩm mặc định nếu không tìm thấy sản phẩm theo slug
  const defaultProduct = products["ao-thun-basic-cotton"];
  const product = products[slug] || defaultProduct;

  // Tính phần trăm giảm giá nếu có
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Hình ảnh sản phẩm */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {(product.isNew || discountPercentage > 0) && (
                <div className="absolute left-2 top-2 z-10 flex flex-col gap-1">
                  {product.isNew && <Badge variant="default">Mới</Badge>}
                  {discountPercentage > 0 && (
                    <Badge variant="error">-{discountPercentage}%</Badge>
                  )}
                </div>
              )}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {product.images.slice(0, 3).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Ảnh ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Thông tin sản phẩm */}
          <div className="w-full md:w-1/2">
            <div className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
              <Link href={`/collections/${product.category.toLowerCase()}`}>
                {product.category}
              </Link>
            </div>
            <h1 className="mb-4 text-2xl font-bold md:text-3xl">
              {product.name}
            </h1>

            <div className="mb-6 flex items-center gap-3">
              <div className="text-xl font-semibold">
                {product.price.toLocaleString()}₫
              </div>
              {product.originalPrice && (
                <div className="text-sm text-zinc-500 line-through dark:text-zinc-400">
                  {product.originalPrice.toLocaleString()}₫
                </div>
              )}
              {discountPercentage > 0 && (
                <div className="text-sm text-red-600 dark:text-red-400">
                  (-{discountPercentage}%)
                </div>
              )}
            </div>

            <div className="mb-6 border-b border-zinc-200 pb-6 dark:border-zinc-800">
              <p className="text-zinc-700 dark:text-zinc-300">
                {product.description}
              </p>
            </div>

            {/* Kích thước */}
            <div className="mb-6">
              <div className="mb-2 font-medium">Kích thước</div>
              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    className="h-10 min-w-[2.5rem] rounded-md px-3"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Màu sắc */}
            <div className="mb-6">
              <div className="mb-2 font-medium">Màu sắc</div>
              <div className="flex flex-wrap gap-2">
                {product.availableColors.map((color) => (
                  <Button
                    key={color}
                    variant="outline"
                    className="h-10 rounded-md px-3"
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Đặc điểm sản phẩm */}
            <div className="mb-6">
              <div className="mb-2 font-medium">Đặc điểm sản phẩm</div>
              <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
                {product.features.map((feature, index) => (
                  <li key={index} className="mb-1">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nút mua hàng */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Thêm vào giỏ hàng
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Thêm vào yêu thích
              </Button>
            </div>

            {/* Thông tin vận chuyển */}
            <div className="mt-6 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <TruckIcon className="h-5 w-5 text-indigo-600" />
                <span>
                  Giao hàng miễn phí cho đơn hàng từ 500.000₫. Nhận hàng trong
                  2-5 ngày làm việc.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sản phẩm liên quan */}
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Sản phẩm liên quan</h2>
        <ProductGrid products={product.relatedProducts} />
      </div>
    </div>
  );
}
