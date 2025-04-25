import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Category } from "@/lib/types";
import { truncateDescription } from "@/lib/utils/format";

/**
 * Props cho component FeaturedCategories
 * @interface FeaturedCategoriesProps
 * @property {Category[]} categories - Danh sách danh mục nổi bật cần hiển thị
 * @property {string} [className] - Các lớp CSS tùy chỉnh
 * @property {string} [title="Danh mục nổi bật"] - Tiêu đề của phần danh mục
 * @property {string} [viewAllText="Xem tất cả danh mục"] - Văn bản nút xem tất cả
 * @property {string} [viewAllLink="/categories"] - Đường dẫn nút xem tất cả
 * @property {number} [maxCategories=3] - Số lượng danh mục tối đa hiển thị
 */
interface FeaturedCategoriesProps {
  categories: Category[];
  className?: string;
  title?: string;
  viewAllText?: string;
  viewAllLink?: string;
  maxCategories?: number;
}

/**
 * Component hiển thị danh sách danh mục nổi bật ở trang chủ
 * @param {FeaturedCategoriesProps} props - Props cho component
 * @returns {React.ReactElement} - Phần hiển thị danh mục nổi bật
 */
export default function FeaturedCategories({
  categories,
  className = "",
  title = "Danh mục nổi bật",
  viewAllText = "Xem tất cả danh mục",
  viewAllLink = "/categories",
  maxCategories = 3,
}: FeaturedCategoriesProps) {
  // Lọc và giới hạn số lượng danh mục hiển thị
  const displayCategories = categories
    .filter((category) => category.featured)
    .slice(0, maxCategories);

  if (displayCategories.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          <Link
            href={viewAllLink}
            className="mt-2 flex items-center text-sm font-medium text-primary hover:underline md:mt-0"
          >
            {viewAllText} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group relative overflow-hidden rounded-xl shadow-md transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] w-full bg-gray-200">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-gray-400">Không có hình ảnh</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="mb-1 text-xl font-semibold">{category.name}</h3>
                {category.description && (
                  <p className="mb-3 text-sm text-gray-100 line-clamp-2">
                    {truncateDescription(category.description, 120)}
                  </p>
                )}
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm">
                  Khám phá ngay <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
