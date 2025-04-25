import Image from "next/image";
import Link from "next/link";

/**
 * Dữ liệu mẫu cho các thương hiệu đối tác
 */
const brands = [
  {
    id: "samsung",
    name: "Samsung",
    logo: "/images/brands/samsung.png",
    slug: "samsung",
  },
  {
    id: "apple",
    name: "Apple",
    logo: "/images/brands/apple.png",
    slug: "apple",
  },
  {
    id: "xiaomi",
    name: "Xiaomi",
    logo: "/images/brands/xiaomi.png",
    slug: "xiaomi",
  },
  {
    id: "loreal",
    name: "L'Oreal",
    logo: "/images/brands/loreal.png",
    slug: "loreal",
  },
  {
    id: "nike",
    name: "Nike",
    logo: "/images/brands/nike.png",
    slug: "nike",
  },
  {
    id: "adidas",
    name: "Adidas",
    logo: "/images/brands/adidas.png",
    slug: "adidas",
  },
  {
    id: "sony",
    name: "Sony",
    logo: "/images/brands/sony.png",
    slug: "sony",
  },
  {
    id: "colgate",
    name: "Colgate",
    logo: "/images/brands/colgate.png",
    slug: "colgate",
  },
];

/**
 * Thành phần hiển thị các thương hiệu đối tác
 * @returns {JSX.Element} - Thành phần BrandsSection được render
 */
export function BrandsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Thương hiệu nổi tiếng
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Chúng tôi hợp tác với các thương hiệu hàng đầu để mang đến cho bạn
            những sản phẩm chất lượng cao và đáng tin cậy
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/products?brand=${brand.slug}`}
              className="flex flex-col items-center justify-center rounded-lg border border-zinc-200 p-6 transition-all hover:border-primary hover:shadow-sm dark:border-zinc-800"
            >
              <div className="relative h-12 w-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={96}
                    height={48}
                    className="max-h-12 w-auto opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              </div>
              <span className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
