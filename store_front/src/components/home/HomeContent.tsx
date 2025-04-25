"use client";

import { HeroSlider } from "@/components/home/HeroSlider";
import { CategoriesGrid } from "@/components/home/CategoriesGrid";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { ProductTypeSection } from "@/components/home/ProductTypeSection";
import { FlashSaleSection } from "@/components/home/FlashSaleSection";
import { PromoBanner } from "@/components/home/PromoBanner";
import { BrandsSection } from "@/components/home/BrandsSection";
import { RecentlyViewedSection } from "@/components/home/RecentlyViewedSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { getAllProductTypes } from "@/lib/data";

/**
 * Component hiển thị nội dung trang chủ
 * @returns {JSX.Element} - Thành phần nội dung trang chủ
 */
export default function HomeContent() {
  // Lấy tất cả loại sản phẩm từ dữ liệu
  const productTypes = getAllProductTypes();

  return (
    <>
      <HeroSlider />
      <FlashSaleSection />
      <CategoriesGrid />
      <FeaturedProductsSection />

      {/* Hiển thị các phần theo từng loại sản phẩm */}
      {productTypes.map((type, index) => (
        <ProductTypeSection
          key={type}
          productType={type}
          variant={index % 2 === 0 ? "default" : "alternate"}
        />
      ))}

      <PromoBanner />
      <BrandsSection />
      <RecentlyViewedSection />
      <NewsletterSection />
    </>
  );
}
