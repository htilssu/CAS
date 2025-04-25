import Link from "next/link";
import { Category } from "@/lib/types";

/**
 * Props cho component ProductFilter
 * @interface ProductFilterProps
 * @property {Category[]} categories - Danh sách danh mục
 * @property {string} [selectedCategory] - ID danh mục đang được chọn
 * @property {string} [className] - Các lớp CSS tùy chỉnh
 */
interface ProductFilterProps {
  categories: Category[];
  selectedCategory?: string;
  className?: string;
}

/**
 * Component bộ lọc sản phẩm theo danh mục
 * @param {ProductFilterProps} props - Props cho component
 * @returns {React.ReactElement} - Bộ lọc sản phẩm
 */
export default function ProductFilter({
  categories,
  selectedCategory,
  className = "",
}: ProductFilterProps) {
  // Kiểm tra nếu danh mục được chọn
  const isSelected = (id: string) => id === selectedCategory;

  // Tạo URL tìm kiếm với danh mục
  const getCategoryUrl = (id: string) => {
    return `/products?category=${id}`;
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Bộ lọc theo danh mục */}
      <div>
        <h3 className="mb-3 text-sm font-medium ">Danh mục</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Link
              href="/products"
              className={`text-sm hover:text-primary ${
                !selectedCategory ? "font-medium text-primary" : "text-gray-600"
              }`}
            >
              Tất cả sản phẩm
            </Link>
          </div>

          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <Link
                href={getCategoryUrl(category.id)}
                className={`text-sm hover:text-primary ${
                  isSelected(category.id)
                    ? "font-medium text-primary"
                    : "opacity-50"
                }`}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Bộ lọc theo giá */}
      <div>
        <h3 className="mb-3 text-sm font-medium">Giá</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Link
              href="/products?price=under-300"
              className="text-sm text-gray-600 hover:text-primary"
            >
              Dưới 300.000₫
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/products?price=300-500"
              className="text-sm text-gray-600 hover:text-primary"
            >
              300.000₫ - 500.000₫
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/products?price=over-500"
              className="text-sm text-gray-600 hover:text-primary"
            >
              Trên 500.000₫
            </Link>
          </div>
        </div>
      </div>

      {/* Bộ lọc theo trạng thái */}
      <div>
        <h3 className="mb-3 text-sm font-medium ">Trạng thái</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Link
              href="/products?status=sale"
              className="text-sm text-gray-600 hover:text-primary"
            >
              Đang giảm giá
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/products?status=new"
              className="text-sm text-gray-600 hover:text-primary"
            >
              Sản phẩm mới
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/products?status=featured"
              className="text-sm text-gray-600 hover:text-primary"
            >
              Sản phẩm nổi bật
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
