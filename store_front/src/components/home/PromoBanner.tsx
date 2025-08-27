import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * Thành phần hiển thị banner khuyến mãi
 * @returns {JSX.Element} - Thành phần PromoBanner được render
 */
export function PromoBanner() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-xl">
          <div className="relative">
            {/* Phiên bản Desktop */}
            <div className="hidden md:block">
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="Khuyến mãi đặc biệt"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 to-zinc-900/20" />
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full px-6 md:ml-12 md:w-1/2 lg:ml-16">
                    <div className="space-y-4 text-white">
                      <div className="inline-block rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                        Khuyến mãi đặc biệt
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Giảm giá tới 70%
                        <br />
                        Sưu tầm ngay hôm nay
                      </h2>
                      <p className="text-zinc-200">
                        Chương trình khuyến mãi đặc biệt cho tất cả sản phẩm mùa
                        hè. Cơ hội có hạn, hãy nhanh tay mua ngay.
                      </p>
                      <Button variant="primary" asChild>
                        <Link href="/category/sale">Xem thêm</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phiên bản Mobile */}
            <div className="md:hidden">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="Khuyến mãi đặc biệt"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-zinc-900/20" />
                <div className="absolute inset-0 flex items-end justify-center p-6">
                  <div className="space-y-3 text-center text-white">
                    <div className="inline-block rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                      Khuyến mãi đặc biệt
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      Giảm giá tới 70%
                      <br />
                      Sưu tầm ngay hôm nay
                    </h2>
                    <p className="text-sm text-zinc-200">
                      Chương trình khuyến mãi đặc biệt cho tất cả sản phẩm mùa
                      hè
                    </p>
                    <Button variant="primary" asChild>
                      <Link href="/category/sale">Xem thêm</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
