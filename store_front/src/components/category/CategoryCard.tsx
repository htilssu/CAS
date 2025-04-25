import Image from "next/image";
import Link from "next/link";
import { Category } from "@/lib/types";

/**
 * Props cho component CategoryCard
 * @interface CategoryCardProps
 * @property {Category} category - Thông tin danh mục cần hiển thị
 * @property {string} [className] - Các lớp CSS tùy chỉnh
 */
interface CategoryCardProps {
  category: Category;
  className?: string;
}

/**
 * Component hiển thị card cho một danh mục sản phẩm
 * @param {CategoryCardProps} props - Props cho component
 * @returns {React.ReactElement} - Card hiển thị thông tin danh mục
 */
export default function CategoryCard({
  category,
  className = "",
}: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className={`group block overflow-hidden rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-400">Không có hình ảnh</span>
          </div>
        )}

        {category.featured && (
          <span className="absolute right-2 top-2 bg-primary/90 px-2 py-1 text-xs font-medium text-white rounded">
            Nổi bật
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{category.name}</h3>
        {category.description && (
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            {category.description}
          </p>
        )}

        {category.subcategories && category.subcategories.length > 0 && (
          <div className="mt-3">
            <span className="text-xs font-medium text-gray-500">
              Danh mục con:
            </span>
            <div className="mt-1 flex flex-wrap gap-1">
              {category.subcategories.slice(0, 3).map((subcatId) => (
                <span
                  key={subcatId}
                  className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs"
                >
                  {subcatId
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </span>
              ))}
              {category.subcategories.length > 3 && (
                <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs">
                  +{category.subcategories.length - 3}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
