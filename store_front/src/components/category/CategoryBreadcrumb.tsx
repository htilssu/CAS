import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Category } from "@/lib/types";

/**
 * Props cho component CategoryBreadcrumb
 * @interface CategoryBreadcrumbProps
 * @property {Category} category - Thông tin danh mục hiện tại
 * @property {Category[]} [parentCategories] - Danh sách các danh mục cha (nếu có)
 * @property {string} [className] - Các lớp CSS tùy chỉnh
 */
interface CategoryBreadcrumbProps {
  category: Category;
  parentCategories?: Category[];
  className?: string;
}

/**
 * Component hiển thị breadcrumb cho danh mục sản phẩm
 * @param {CategoryBreadcrumbProps} props - Props cho component
 * @returns {React.ReactElement} - Breadcrumb hiển thị đường dẫn danh mục
 */
export default function CategoryBreadcrumb({
  category,
  parentCategories = [],
  className = "",
}: CategoryBreadcrumbProps) {
  const allCategories = [...parentCategories, category];

  return (
    <nav
      className={`flex items-center text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Trang chủ
          </Link>
        </li>

        {parentCategories.length > 0 && (
          <>
            <li>
              <ChevronRight className="h-4 w-4 text-gray-500" />
            </li>
            <li>
              <Link
                href="/categories"
                className="text-gray-500 hover:text-gray-700"
              >
                Danh mục
              </Link>
            </li>
          </>
        )}

        {allCategories.map((cat, index) => {
          const isLast = index === allCategories.length - 1;
          return (
            <li key={cat.id} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-500" />
              {isLast ? (
                <span className="ml-1 font-medium text-gray-900">
                  {cat.name}
                </span>
              ) : (
                <Link
                  href={`/category/${cat.slug}`}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  {cat.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
