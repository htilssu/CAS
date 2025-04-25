import { ArrowDownAZ, ArrowUpAZ } from "lucide-react";

/**
 * Props cho component ProductSort
 * @interface ProductSortProps
 * @property {string} [currentSort] - Tùy chọn sắp xếp hiện tại
 * @property {string} [className] - Các lớp CSS tùy chỉnh
 */
interface ProductSortProps {
  currentSort?: string;
  className?: string;
}

/**
 * Component cho phép sắp xếp sản phẩm theo các tiêu chí
 * @param {ProductSortProps} props - Props cho component
 * @returns {React.ReactElement} - Dropdown sắp xếp sản phẩm
 */
export default function ProductSort({
  currentSort,
  className = "",
}: ProductSortProps) {
  // Danh sách tùy chọn sắp xếp
  const sortOptions = [
    { value: "", label: "Mặc định" },
    { value: "price-asc", label: "Giá: Thấp đến cao" },
    { value: "price-desc", label: "Giá: Cao đến thấp" },
    { value: "new", label: "Mới nhất" },
  ];

  // Xác định nhãn hiển thị hiện tại
  const currentLabel =
    sortOptions.find((option) => option.value === currentSort)?.label ||
    "Sắp xếp";

  // Hàm xây dựng URL sắp xếp
  const getSortUrl = (sortValue: string) => {
    // Lấy URL hiện tại
    const url = new URL(window.location.href);

    // Nếu sắp xếp là rỗng, xóa tham số sort
    if (sortValue === "") {
      url.searchParams.delete("sort");
    } else {
      // Ngược lại, đặt tham số sort
      url.searchParams.set("sort", sortValue);
    }

    return url.toString();
  };

  return (
    <div className={`relative ${className}`}>
      <select
        className="appearance-none rounded-md border border-gray-300 px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
        onChange={(e) => {
          window.location.href = getSortUrl(e.target.value);
        }}
        value={currentSort || ""}
        aria-label="Sắp xếp sản phẩm"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Icon sắp xếp */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        {currentSort === "price-asc" ? (
          <ArrowUpAZ className="h-4 w-4 text-gray-500" />
        ) : currentSort === "price-desc" ? (
          <ArrowDownAZ className="h-4 w-4 text-gray-500" />
        ) : (
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
