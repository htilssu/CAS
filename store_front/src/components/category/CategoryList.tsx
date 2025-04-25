import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Category } from "@/lib/types";
import { truncateDescription } from "@/lib/utils/format";

/**
 * Props cho component CategoryList
 * @interface CategoryListProps
 * @property {Category[]} categories - Danh sách danh mục cần hiển thị
 * @property {string} [className] - Các lớp CSS tùy chỉnh
 * @property {string} [emptyMessage="Không có danh mục nào"] - Thông báo khi không có danh mục
 * @property {number} [descriptionLength=100] - Độ dài tối đa của phần mô tả
 */
interface CategoryListProps {
  categories: Category[];
  className?: string;
  emptyMessage?: string;
  descriptionLength?: number;
}

/**
 * Component hiển thị danh sách danh mục dạng list
 * @param {CategoryListProps} props - Props cho component
 * @returns {React.ReactElement} - Danh sách danh mục dạng list
 */
export default function CategoryList({
  categories,
  className = "",
  emptyMessage = "Không có danh mục nào",
  descriptionLength = 100,
}: CategoryListProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="my-8 flex justify-center">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {categories.map((category) => (
        <div
          key={category.id}
          className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
        >
          <Link
            href={`/category/${category.slug}`}
            className="flex flex-col sm:flex-row"
          >
            {/* Phần hình ảnh */}
            <div className="relative aspect-video w-full sm:h-auto sm:w-40 md:w-48">
              {category.image ? (
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 192px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200">
                  <span className="text-sm text-gray-400">
                    Không có hình ảnh
                  </span>
                </div>
              )}
              {category.featured && (
                <span className="absolute right-2 top-2 rounded-full bg-primary/90 px-2 py-0.5 text-xs font-medium text-white">
                  Nổi bật
                </span>
              )}
            </div>

            {/* Phần thông tin */}
            <div className="flex flex-1 flex-col p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-medium">{category.name}</h3>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              {category.description && (
                <p className="mb-4 text-sm text-gray-600">
                  {truncateDescription(category.description, descriptionLength)}
                </p>
              )}

              {/* Subcategories */}
              {category.subcategories && category.subcategories.length > 0 && (
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((subcatId) => (
                      <span
                        key={subcatId}
                        className="inline-block rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800"
                      >
                        {subcatId
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
