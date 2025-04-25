import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Props cho thành phần Card
 * @interface CardProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-zinc-200 bg-white shadow dark:border-zinc-800 dark:bg-zinc-950",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

/**
 * Props cho thành phần CardHeader
 * @interface CardHeaderProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * Props cho thành phần CardTitle
 * @interface CardTitleProps
 * @extends React.HTMLAttributes<HTMLHeadingElement>
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * Props cho thành phần CardDescription
 * @interface CardDescriptionProps
 * @extends React.HTMLAttributes<HTMLParagraphElement>
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/**
 * Props cho thành phần CardContent
 * @interface CardContentProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * Props cho thành phần CardFooter
 * @interface CardFooterProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
