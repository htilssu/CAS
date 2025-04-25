import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getMainCategories } from "@/lib/data";

/**
 * Thành phần hiển thị lưới danh mục sản phẩm trên trang chủ
 * @returns {JSX.Element} - Thành phần CategoriesGrid được render
 */
export function CategoriesGrid() {
  // Lấy tất cả danh mục chính từ data
  const categories = getMainCategories();

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex flex-col justify-between md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Danh mục nổi bật</h2>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              Khám phá các danh mục sản phẩm đa dạng của chúng tôi
            </p>
          </div>
          <Link
            href="/products"
            className="mt-4 flex items-center text-primary hover:underline md:mt-0"
          >
            Xem tất cả danh mục <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group flex flex-col items-center rounded-lg border border-gray-200 p-4 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="relative mb-3 aspect-square w-full max-w-[120px] overflow-hidden rounded-full bg-zinc-100">
                <Image
                  src={category.image || "/images/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-center text-sm font-medium group-hover:text-primary">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
