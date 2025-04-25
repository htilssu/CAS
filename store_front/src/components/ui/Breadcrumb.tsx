import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

/**
 * Interface cho một mục breadcrumb
 * @interface BreadcrumbItem
 * @property {string} label - Nhãn hiển thị
 * @property {string} [href] - Đường dẫn liên kết (không có nếu là mục cuối cùng)
 * @property {boolean} [active] - Có phải là mục đang hoạt động hay không
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

/**
 * Props cho component Breadcrumb
 * @interface BreadcrumbProps
 * @property {BreadcrumbItem[]} items - Danh sách các mục breadcrumb
 * @property {string} [className] - Classes CSS tùy chỉnh
 * @property {boolean} [homeLink] - Có hiển thị liên kết trang chủ không
 */
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  homeLink?: boolean;
}

/**
 * Component Breadcrumb hiển thị đường dẫn điều hướng
 * @param {BreadcrumbProps} props - Props cho component
 * @returns {JSX.Element} - Component Breadcrumb được render
 */
export function Breadcrumb({
  items,
  className = "",
  homeLink = true,
}: BreadcrumbProps) {
  return (
    <nav
      className={`flex items-center py-3 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap items-center space-x-1">
        {homeLink && (
          <li>
            <Link
              href="/"
              className="flex items-center text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <Home className="mr-1 h-4 w-4" />
              <span className="hidden sm:inline">Trang chủ</span>
            </Link>
          </li>
        )}

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-zinc-400" />
              {isLast || item.active ? (
                <span className="ml-1 font-medium text-zinc-900 dark:text-zinc-100">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="ml-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
