import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Kết hợp nhiều lớp CSS với tailwind-merge để tránh xung đột
 * @param inputs - Các giá trị lớp cần kết hợp
 * @returns Chuỗi lớp CSS đã được kết hợp và tối ưu hóa
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
