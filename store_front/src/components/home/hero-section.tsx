import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Thành phần hiển thị phần Hero (Banner chính) trên trang chủ
 * @returns {JSX.Element} - Thành phần HeroSection được render
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Phiên bản desktop */}
      <div className="hidden md:block">
        <div className="relative h-[600px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
            alt="Hero Banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="container px-4">
              <div className="max-w-lg space-y-4 text-white">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Phong cách mới
                  <br />
                  cho mùa hè này
                </h1>
                <p className="text-base md:text-lg">
                  Khám phá bộ sưu tập mới với những thiết kế độc đáo, phong cách
                  và thoải mái
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg" variant="primary" asChild>
                    <Link href="/collections/new">Mua sắm ngay</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                    asChild
                  >
                    <Link href="/collections/all">Xem tất cả</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phiên bản mobile */}
      <div className="md:hidden">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="https://images.unsplash.com/photo-1583744946564-b52d01a7b54b?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
            alt="Hero Banner Mobile"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-center pb-10">
            <div className="container px-4 text-center">
              <div className="mx-auto space-y-4 text-white">
                <h1 className="text-3xl font-bold tracking-tight">
                  Phong cách mới
                  <br />
                  cho mùa hè này
                </h1>
                <p className="text-sm">
                  Khám phá bộ sưu tập mới với những thiết kế độc đáo, phong cách
                  và thoải mái
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <Button variant="primary" asChild>
                    <Link href="/collections/new">Mua sắm ngay</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                    asChild
                  >
                    <Link href="/collections/all">Xem tất cả</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
