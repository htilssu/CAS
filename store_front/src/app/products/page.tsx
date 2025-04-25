"use client";

import { Suspense } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import {
  getFeaturedProducts,
  getNewProducts,
  getMainCategories,
  getProductsByCategory,
} from "@/lib/data";
import ProductFilter from "@/components/product/ProductFilter";
import ProductSort from "@/components/product/ProductSort";
import RecommendedProducts from "@/components/product/RecommendedProducts";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

/**
 * Trang hiển thị danh sách sản phẩm
 * @returns {React.ReactElement} - Trang sản phẩm
 */
export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Lấy dữ liệu sản phẩm và danh mục
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();
  const categories = getMainCategories();

  // Kiểm tra bộ lọc từ query params
  const categoryId =
    typeof searchParams.category === "string"
      ? searchParams.category
      : undefined;
  const sortBy =
    typeof searchParams.sort === "string" ? searchParams.sort : undefined;

  // Lấy sản phẩm theo danh mục nếu có
  const categoryProducts = categoryId ? getProductsByCategory(categoryId) : [];

  // Xác định sản phẩm hiển thị: nếu có danh mục thì hiển thị theo danh mục, không thì hiển thị tất cả
  const productsToDisplay = categoryId
    ? categoryProducts
    : [...featuredProducts, ...newProducts];

  // Sắp xếp sản phẩm nếu có yêu cầu
  if (sortBy) {
    if (sortBy === "price-asc") {
      productsToDisplay.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      productsToDisplay.sort((a, b) => b.price - a.price);
    } else if (sortBy === "new") {
      productsToDisplay.sort((a, b) =>
        a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
      );
    }
  }

  // Chuyển đổi sản phẩm để phù hợp với interface của ProductGrid
  const adaptedProducts = productsToDisplay.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.categoryIds[0] || "", // Sử dụng danh mục đầu tiên
    image: product.images[0] || "", // Sử dụng hình ảnh đầu tiên
    price: product.price,
    originalPrice: product.originalPrice,
    isFeatured: product.isFeatured,
    isNew: product.isNew,
    isOutOfStock: product.isOutOfStock,
  }));

  // Xác định breadcrumb dựa trên bộ lọc danh mục
  const breadcrumbItems = [];

  // Thêm mục "Sản phẩm" luôn luôn hiển thị
  breadcrumbItems.push({
    label: "Sản phẩm",
    active: !categoryId, // Active khi không có bộ lọc danh mục
  });

  // Nếu có bộ lọc danh mục, thêm danh mục vào breadcrumb
  if (categoryId) {
    const category = categories.find((cat) => cat.id === categoryId);
    if (category) {
      breadcrumbItems.push({
        label: category.name,
        active: true,
      });
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={breadcrumbItems}
        className="mb-4 border-b border-zinc-200 pb-2 dark:border-zinc-800"
      />

      {/* Tiêu đề trang */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Sản phẩm</h1>
        <p className="mt-2 text-gray-600">
          Khám phá bộ sưu tập đa dạng các sản phẩm chất lượng cao
        </p>
      </div>

      {/* Phần hiển thị sản phẩm gợi ý */}
      <section className="mb-10">
        <Suspense fallback={<div>Đang tải sản phẩm gợi ý...</div>}>
          <RecommendedProducts />
        </Suspense>
      </section>

      {/* Phần bộ lọc và sản phẩm */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Bộ lọc - hiển thị trên desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            <div className="flex items-center mb-4">
              <Filter className="mr-2 h-5 w-5" />
              <h2 className="text-xl font-semibold">Bộ lọc</h2>
            </div>

            <ProductFilter
              categories={categories}
              selectedCategory={categoryId}
            />
          </div>
        </aside>

        {/* Phần nội dung chính */}
        <div className="flex-1">
          {/* Bộ lọc mobile và sắp xếp */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            {/* Nút hiển thị bộ lọc trên mobile */}
            <button
              type="button"
              className="lg:hidden flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Bộ lọc
            </button>

            {/* Sắp xếp */}
            <ProductSort currentSort={sortBy} />
          </div>

          {/* Kết quả lọc */}
          {categoryId && (
            <div className="mb-4 flex flex-wrap gap-2">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                <span className="mr-1 font-medium">Danh mục:</span>
                {categories.find((cat) => cat.id === categoryId)?.name ||
                  categoryId}
                <a
                  href="/products"
                  className="ml-2 font-medium hover:underline"
                >
                  ✕
                </a>
              </div>
            </div>
          )}

          {/* Danh sách sản phẩm */}
          <ProductGrid
            products={adaptedProducts}
            emptyMessage="Không tìm thấy sản phẩm phù hợp với bộ lọc của bạn."
          />
        </div>
      </div>
    </div>
  );
}
