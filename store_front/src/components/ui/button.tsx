import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

/**
 * Props cho thành phần Button
 * @interface ButtonProps
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 * @property {boolean} [asChild] - Sử dụng phần tử con làm nút
 * @property {React.ReactNode} [children] - Nội dung bên trong nút
 * @property {string} [variant] - Biến thể của nút (default, primary, outline, ghost, link)
 * @property {string} [size] - Kích thước của nút (default, sm, lg, icon)
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "primary" | "outline" | "ghost" | "link" | "gradient";
  size?: "default" | "sm" | "lg" | "icon";
}

/**
 * Thành phần Button có thể tùy chỉnh với nhiều biến thể và kích thước
 * @param {ButtonProps} props - Props cho Button
 * @returns {JSX.Element} - Thành phần Button được render
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm",
          {
            "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5":
              variant === "default",
            "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5":
              variant === "primary",
            "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5":
              variant === "gradient",
            "border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-900":
              variant === "outline",
            "hover:bg-slate-100 text-slate-700 hover:text-slate-900":
              variant === "ghost",
            "text-blue-600 underline-offset-4 hover:underline font-medium":
              variant === "link",
          },
          {
            "h-10 px-6 py-2 text-sm": size === "default",
            "h-9 rounded-lg px-4 text-xs": size === "sm",
            "h-12 rounded-lg px-8 text-base": size === "lg",
            "h-10 w-10 p-0 rounded-lg": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };
