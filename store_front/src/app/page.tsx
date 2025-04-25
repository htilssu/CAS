import { Suspense } from "react";
import HomeContent from "@/components/home/HomeContent";

/**
 * Trang chủ của ứng dụng
 * @returns {JSX.Element} - Thành phần trang chủ
 */
export default function HomePage() {
  return (
    <Suspense fallback={<div>Đang tải nội dung trang chủ...</div>}>
      <HomeContent />
    </Suspense>
  );
}
