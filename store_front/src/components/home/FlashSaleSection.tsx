import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getFeaturedProducts } from "@/lib/data";

/**
 * Hiển thị thời gian còn lại
 * @param {Date} endTime - Thời điểm kết thúc Flash Sale
 * @returns {string} - Chuỗi hiển thị thời gian còn lại
 */
function CountdownTimer({ endTime }: { endTime: Date }) {
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime.getTime() - new Date().getTime();

      if (difference <= 0) {
        setTimeLeft("00:00:00");
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex gap-2 text-white">
      {timeLeft.split(":").map((unit, index) => (
        <div key={index} className="flex items-center">
          <div className="rounded bg-red-600 px-2 py-1 text-sm font-bold">
            {unit}
          </div>
          {index < 2 && <span className="text-red-600">:</span>}
        </div>
      ))}
    </div>
  );
}

/**
 * Thành phần hiển thị phần Flash Sale
 * @returns {JSX.Element} - Flash Sale Section
 */
export function FlashSaleSection() {
  // Tạo thời gian kết thúc là 24 giờ kể từ khi tải trang
  const [endTime] = useState(() => {
    const end = new Date();
    end.setHours(end.getHours() + 24);
    return end;
  });

  // Lấy danh sách sản phẩm nổi bật làm sản phẩm Flash Sale
  const featuredProducts = getFeaturedProducts().slice(0, 6);

  // Thêm giá sale ngẫu nhiên cho sản phẩm
  const flashSaleProducts = featuredProducts.map((product) => {
    const discountPercent = Math.floor(Math.random() * 50) + 10; // Giảm giá từ 10-60%
    const salePrice = Math.floor(product.price * (1 - discountPercent / 100));

    return {
      ...product,
      salePrice,
      discountPercent,
      progress: Math.floor(Math.random() * 80) + 10, // % đã bán
    };
  });

  return (
    <section className="bg-gradient-to-r from-yellow-500 to-red-500 py-6">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-white" />
            <h2 className="text-2xl font-bold text-white">FLASH SALE</h2>
            <CountdownTimer endTime={endTime} />
          </div>
          <Button
            variant="default"
            size="sm"
            asChild
            className="bg-white text-red-600 hover:bg-white/90"
          >
            <Link
              href="/products?sort=price-asc"
              className="flex items-center gap-1"
            >
              Xem tất cả
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {flashSaleProducts.map((product) => (
            <Card
              key={product.id}
              className="relative overflow-hidden bg-white"
            >
              <Link
                href={`/products/${product.slug}`}
                className="block aspect-square overflow-hidden"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <Badge className="absolute left-2 top-2 bg-red-600">
                  -{product.discountPercent}%
                </Badge>
              </Link>
              <div className="p-3">
                <Link href={`/products/${product.slug}`} className="block">
                  <h3 className="line-clamp-2 text-sm font-medium hover:text-red-600">
                    {product.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="font-bold text-red-600">
                      {product.salePrice.toLocaleString()}₫
                    </span>
                    <span className="text-xs text-gray-500 line-through">
                      {product.price.toLocaleString()}₫
                    </span>
                  </div>
                </Link>

                <div className="mt-2">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full bg-red-600"
                      style={{ width: `${product.progress}%` }}
                    />
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    Đã bán {product.progress}%
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
