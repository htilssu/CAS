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
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm",
        {
          "border-transparent bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg":
            variant === "default",
          "border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm":
            variant === "outline",
          "border-transparent bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg":
            variant === "success",
          "border-transparent bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg":
            variant === "error",
          "border-transparent bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg":
            variant === "warning",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge, type BadgeProps };
