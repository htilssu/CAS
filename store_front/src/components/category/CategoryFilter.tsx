import { useState } from "react";
import { CheckIcon, PlusIcon, MinusIcon } from "lucide-react";
import { Category } from "@/lib/types";

/**
 * Props cho component CategoryFilter
 * @interface CategoryFilterProps
 * @property {Category[]} categories - Danh sách các danh mục
 * @property {string[]} selectedCategories - Danh sách ID các danh mục đã chọn
 * @property {(categoryId: string) => void} onCategoryChange - Hàm xử lý khi thay đổi lựa chọn danh mục
 * @property {string} [className] - Các lớp CSS tùy chỉnh
 * @property {string} [title="Danh mục"] - Tiêu đề của bộ lọc
 */
interface CategoryFilterProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryChange: (categoryId: string) => void;
  className?: string;
  title?: string;
}

/**
 * Component hiển thị bộ lọc sản phẩm theo danh mục
 * @param {CategoryFilterProps} props - Props cho component
 * @returns {React.ReactElement} - Bộ lọc danh mục sản phẩm
 */
export default function CategoryFilter({
  categories,
  selectedCategories,
  onCategoryChange,
  className = "",
  title = "Danh mục",
}: CategoryFilterProps) {
  // State lưu trữ danh sách các danh mục đang được mở rộng
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Hàm xử lý mở/đóng danh mục
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Kiểm tra danh mục có danh mục con hay không
  const hasSubcategories = (category: Category) => {
    return !!category.subcategories && category.subcategories.length > 0;
  };

  // Kiểm tra danh mục đang được mở rộng hay không
  const isExpanded = (categoryId: string) => {
    return expandedCategories.includes(categoryId);
  };

  // Render một danh mục
  const renderCategory = (category: Category, depth = 0) => {
    const hasChildren = hasSubcategories(category);
    const isSelected = selectedCategories.includes(category.id);

    return (
      <div key={category.id} className="mb-1">
        <div
          className={`flex items-center px-2 py-1.5 rounded hover:bg-gray-100 ${
            depth > 0 ? "ml-" + depth * 3 : ""
          }`}
        >
          <div
            className="flex h-5 w-5 items-center justify-center rounded-sm border border-gray-300 mr-2 cursor-pointer"
            onClick={() => onCategoryChange(category.id)}
          >
            {isSelected && <CheckIcon className="h-3.5 w-3.5 text-primary" />}
          </div>

          <span
            className="flex-1 text-sm cursor-pointer"
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </span>

          {hasChildren && (
            <button
              type="button"
              onClick={() => toggleCategory(category.id)}
              className="ml-auto flex h-6 w-6 items-center justify-center rounded-full hover:bg-gray-200"
              aria-expanded={isExpanded(category.id)}
            >
              {isExpanded(category.id) ? (
                <MinusIcon className="h-3.5 w-3.5" />
              ) : (
                <PlusIcon className="h-3.5 w-3.5" />
              )}
            </button>
          )}
        </div>

        {/* Render subcategories if expanded */}
        {hasChildren &&
          isExpanded(category.id) &&
          categories
            .filter((cat) => category.subcategories?.includes(cat.id))
            .map((subcategory) => renderCategory(subcategory, depth + 1))}
      </div>
    );
  };

  // Lọc ra các danh mục chính (không phải danh mục con của bất kỳ danh mục nào)
  const mainCategories = categories.filter((category) => {
    return !categories.some((cat) => cat.subcategories?.includes(category.id));
  });

  return (
    <div className={`${className}`}>
      <h3 className="mb-3 text-lg font-medium">{title}</h3>
      <div className="space-y-1">
        {mainCategories.map((category) => renderCategory(category))}
      </div>
    </div>
  );
}
