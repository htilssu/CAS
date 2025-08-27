"use client";

import { ImmersiveHero } from "@/components/home/ImmersiveHero";
import { DiscoverySection } from "@/components/home/DiscoverySection";
import { TrendingNowSection } from "@/components/home/TrendingNowSection";
import { CuratedCollections } from "@/components/home/CuratedCollections";
import { SmartRecommendations } from "@/components/home/SmartRecommendations";
import { MinimalistFooter } from "@/components/home/MinimalistFooter";

/**
 * Component hiển thị nội dung trang chủ với thiết kế hoàn toàn mới
 * Không theo format truyền thống, tập trung vào trải nghiệm tương tác và AI
 * @returns {JSX.Element} - Thành phần nội dung trang chủ hiện đại
 */
export default function HomeContent() {
  return (
    <>
      {/* Hero Section - Immersive với animation và interactive */}
      <ImmersiveHero />
      
      {/* Discovery Section - Tìm kiếm và khám phá thông minh */}
      <DiscoverySection />
      
      {/* Trending Now - Real-time trends như social media */}
      <TrendingNowSection />
      
      {/* Curated Collections - Magazine-style product showcases */}
      <CuratedCollections />
      
      {/* Smart Recommendations - AI-powered personalization */}
      <SmartRecommendations />
      
      {/* Minimalist Footer - Clean và simple */}
      <MinimalistFooter />
    </>
  );
}
