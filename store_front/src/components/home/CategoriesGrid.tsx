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
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Danh mục nổi bật
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Khám phá các danh mục sản phẩm đa dạng của chúng tôi
            </p>
          </div>
          <Link
            href="/products"
            className="mt-6 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group transition-all"
          >
            Xem tất cả danh mục 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group flex flex-col items-center"
            >
              <div className="relative mb-4 aspect-square w-full max-w-[140px] overflow-hidden rounded-3xl bg-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-slate-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-300"></div>
                <Image
                  src={category.image || "/images/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-center text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors px-2 leading-tight">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
