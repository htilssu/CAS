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
  variant?: "default" | "primary" | "outline" | "ghost" | "link";
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
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90":
              variant === "default",
            "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm":
              variant === "primary",
            "border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50":
              variant === "outline",
            "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50":
              variant === "ghost",
            "text-indigo-600 underline-offset-4 hover:underline":
              variant === "link",
          },
          {
            "h-10 px-4 py-2 text-sm": size === "default",
            "h-9 rounded-md px-3 text-xs": size === "sm",
            "h-11 rounded-md px-8 text-base": size === "lg",
            "h-10 w-10 p-0": size === "icon",
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
