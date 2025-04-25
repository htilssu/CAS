import { Category } from "@/lib/types";
import CategoryCard from "./CategoryCard";

/**
 * Props cho component CategoryGrid
 * @interface CategoryGridProps
 * @property {Category[]} categories - Danh sách các danh mục cần hiển thị
 * @property {string} [className] - Các lớp CSS tùy chỉnh
 * @property {string} [emptyMessage] - Thông báo khi không có danh mục nào
 */
interface CategoryGridProps {
  categories: Category[];
  className?: string;
  emptyMessage?: string;
}

/**
 * Component hiển thị lưới các danh mục sản phẩm
 * @param {CategoryGridProps} props - Props cho component
 * @returns {React.ReactElement} - Lưới hiển thị danh sách danh mục
 */
export default function CategoryGrid({
  categories,
  className = "",
  emptyMessage = "Không có danh mục nào để hiển thị",
}: CategoryGridProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="my-8 flex justify-center">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${className}`}
    >
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
