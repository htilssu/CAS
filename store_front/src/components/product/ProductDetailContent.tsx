"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, TruckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

/**
 * Interface cho các sản phẩm trong dữ liệu mẫu
 * @interface ProductData
 * @property {string} id - ID của sản phẩm
 * @property {string} name - Tên sản phẩm
 * @property {string} slug - Slug URL của sản phẩm
 * @property {string} category - Danh mục sản phẩm
 * @property {string} description - Mô tả sản phẩm
 * @property {string[]} features - Danh sách tính năng/đặc điểm của sản phẩm
 * @property {string[]} images - Danh sách hình ảnh sản phẩm
 * @property {number} price - Giá hiện tại của sản phẩm
 * @property {number} [originalPrice] - Giá gốc của sản phẩm (nếu có giảm giá)
 * @property {boolean} isFeatured - Sản phẩm nổi bật
 * @property {boolean} [isNew] - Sản phẩm mới
 * @property {string[]} availableSizes - Danh sách kích thước có sẵn
 * @property {string[]} availableColors - Danh sách màu sắc có sẵn
 * @property {object[]} relatedProducts - Danh sách sản phẩm liên quan
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
 * @type {Record<string, ProductData>}
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
 * Props cho component ProductDetailContent
 * @interface ProductDetailContentProps
 * @property {string} slug - Slug của sản phẩm
 */
interface ProductDetailContentProps {
  slug: string;
}

/**
 * Component hiển thị chi tiết sản phẩm
 * @param {ProductDetailContentProps} props - Props của component
 * @returns {React.ReactElement} - Nội dung chi tiết sản phẩm
 */
export default function ProductDetailContent({
  slug,
}: ProductDetailContentProps) {
  // Sản phẩm mặc định nếu không tìm thấy sản phẩm theo slug
  const defaultProduct = products["ao-thun-basic-cotton"];
  const product = products[slug] || defaultProduct;

  // Tính phần trăm giảm giá nếu có
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  // Cấu hình breadcrumb
  const breadcrumbItems = [
    {
      label: "Sản phẩm",
      href: "/products",
    },
    {
      label: product.category,
      href: `/category/${product.category.toLowerCase()}`,
    },
    {
      label: product.name,
      active: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <Breadcrumb
        items={breadcrumbItems}
        className="mb-6 border-b border-zinc-200 pb-2 dark:border-zinc-800"
      />

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

            {/* Hình ảnh nhỏ khác */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {product.images.slice(0, 3).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800"
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Hình ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Thông tin sản phẩm */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold md:text-3xl">{product.name}</h1>

            <div className="mt-4 flex items-center">
              <div className="text-xl font-bold">
                {product.price.toLocaleString()}₫
              </div>
              {product.originalPrice && (
                <div className="ml-2 text-zinc-500 line-through dark:text-zinc-400">
                  {product.originalPrice.toLocaleString()}₫
                </div>
              )}
              {discountPercentage > 0 && (
                <div className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-sm font-medium text-red-800 dark:bg-red-900/20 dark:text-red-300">
                  -{discountPercentage}%
                </div>
              )}
            </div>

            <div className="mt-6">
              <h2 className="font-medium">Mô tả</h2>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                {product.description}
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-medium">Kích thước</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    className="min-w-[3rem] rounded-md border border-zinc-300 px-3 py-2 text-center text-sm hover:border-primary hover:bg-primary/5 peer-checked:border-primary peer-checked:bg-primary/10 dark:border-zinc-700 dark:hover:bg-primary/10"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="font-medium">Màu sắc</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.availableColors.map((color) => (
                  <button
                    key={color}
                    className="min-w-[4rem] rounded-md border border-zinc-300 px-3 py-2 text-center text-sm hover:border-primary hover:bg-primary/5 peer-checked:border-primary peer-checked:bg-primary/10 dark:border-zinc-700 dark:hover:bg-primary/10"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                variant="primary"
                className="flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Thêm vào giỏ hàng
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2"
              >
                <Heart className="h-5 w-5" />
                Thêm vào yêu thích
              </Button>
            </div>

            <div className="mt-6 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800">
              <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                <TruckIcon className="mr-2 h-5 w-5" />
                <span>
                  Miễn phí vận chuyển cho đơn hàng từ 500.000₫ trở lên
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="font-medium">Đặc điểm nổi bật</h2>
              <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-700 dark:text-zinc-300">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sản phẩm liên quan */}
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Sản phẩm liên quan</h2>
        <ProductGrid
          products={product.relatedProducts}
          emptyMessage="Không có sản phẩm liên quan."
        />
      </div>
    </div>
  );
}
