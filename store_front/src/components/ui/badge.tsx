import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Props cho thành phần Badge
 * @interface BadgeProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 * @property {string} [variant] - Biến thể của badge (default, outline, success, error, warning)
 */
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "success" | "error" | "warning";
}

/**
 * Thành phần Badge để hiển thị trạng thái, nhãn hoặc thông tin nhỏ
 * @param {BadgeProps} props - Props cho Badge
 * @returns {JSX.Element} - Thành phần Badge được render
 */
function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "border-transparent bg-indigo-500 text-white hover:bg-indigo-600":
            variant === "default",
          "border-zinc-200 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800":
            variant === "outline",
          "border-transparent bg-emerald-500 text-white hover:bg-emerald-600":
            variant === "success",
          "border-transparent bg-red-500 text-white hover:bg-red-600":
            variant === "error",
          "border-transparent bg-amber-500 text-white hover:bg-amber-600":
            variant === "warning",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge, type BadgeProps };
