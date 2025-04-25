import Image from "next/image";
import Link from "next/link";
import { getMainCategories } from "@/lib/data";

/**
 * Thành phần hiển thị phần danh mục sản phẩm trên trang chủ
 * @returns {JSX.Element} - Thành phần CategoriesSection được render
 */
export function CategoriesSection() {
  // Lấy danh mục chính từ data
  const categories = getMainCategories();

  return (
    <section className="bg-zinc-50 py-12 dark:bg-zinc-900 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Danh mục sản phẩm</h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Khám phá sản phẩm theo danh mục
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square w-full overflow-hidden">
                <Image
                  src={category.image || "/images/placeholder.svg"}
                  alt={category.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-end justify-center p-6">
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
