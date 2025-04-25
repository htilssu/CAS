import { ProductGrid } from "@/components/product/product-grid";

/**
 * Dữ liệu mẫu cho các danh mục sản phẩm
 */
const categories = {
  all: {
    title: "Tất cả sản phẩm",
    description: "Khám phá tất cả sản phẩm của chúng tôi",
    products: [
      {
        id: "product-1",
        name: "Áo Thun Basic Cotton",
        slug: "ao-thun-basic-cotton",
        category: "Áo thun",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 250000,
        originalPrice: 300000,
        isFeatured: true,
        isNew: true,
      },
      {
        id: "product-2",
        name: "Quần Jean Slim Fit",
        slug: "quan-jean-slim-fit",
        category: "Quần jean",
        image:
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 550000,
        isFeatured: true,
      },
      {
        id: "product-3",
        name: "Áo Khoác Denim Oversized",
        slug: "ao-khoac-denim-oversized",
        category: "Áo khoác",
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 850000,
        originalPrice: 950000,
        isFeatured: true,
      },
      {
        id: "product-4",
        name: "Giày Sneaker Canvas",
        slug: "giay-sneaker-canvas",
        category: "Giày",
        image:
          "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 650000,
        isFeatured: true,
        isOutOfStock: true,
      },
      {
        id: "product-5",
        name: "Áo Sơ Mi Linen",
        slug: "ao-so-mi-linen",
        category: "Áo sơ mi",
        image:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 450000,
        isNew: true,
      },
      {
        id: "product-6",
        name: "Quần Short Kaki",
        slug: "quan-short-kaki",
        category: "Quần short",
        image:
          "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 350000,
      },
    ],
  },
  featured: {
    title: "Sản phẩm nổi bật",
    description: "Những sản phẩm được ưa chuộng nhất của chúng tôi",
    products: [
      {
        id: "product-1",
        name: "Áo Thun Basic Cotton",
        slug: "ao-thun-basic-cotton",
        category: "Áo thun",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 250000,
        originalPrice: 300000,
        isFeatured: true,
        isNew: true,
      },
      {
        id: "product-2",
        name: "Quần Jean Slim Fit",
        slug: "quan-jean-slim-fit",
        category: "Quần jean",
        image:
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 550000,
        isFeatured: true,
      },
      {
        id: "product-3",
        name: "Áo Khoác Denim Oversized",
        slug: "ao-khoac-denim-oversized",
        category: "Áo khoác",
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 850000,
        originalPrice: 950000,
        isFeatured: true,
      },
      {
        id: "product-4",
        name: "Giày Sneaker Canvas",
        slug: "giay-sneaker-canvas",
        category: "Giày",
        image:
          "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 650000,
        isFeatured: true,
        isOutOfStock: true,
      },
    ],
  },
  new: {
    title: "Sản phẩm mới",
    description: "Bộ sưu tập sản phẩm mới nhất của chúng tôi",
    products: [
      {
        id: "product-1",
        name: "Áo Thun Basic Cotton",
        slug: "ao-thun-basic-cotton",
        category: "Áo thun",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 250000,
        originalPrice: 300000,
        isFeatured: true,
        isNew: true,
      },
      {
        id: "product-5",
        name: "Áo Sơ Mi Linen",
        slug: "ao-so-mi-linen",
        category: "Áo sơ mi",
        image:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 450000,
        isNew: true,
      },
    ],
  },
  sale: {
    title: "Khuyến mãi",
    description: "Sản phẩm giảm giá đặc biệt",
    products: [
      {
        id: "product-1",
        name: "Áo Thun Basic Cotton",
        slug: "ao-thun-basic-cotton",
        category: "Áo thun",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 250000,
        originalPrice: 300000,
        isFeatured: true,
        isNew: true,
      },
      {
        id: "product-3",
        name: "Áo Khoác Denim Oversized",
        slug: "ao-khoac-denim-oversized",
        category: "Áo khoác",
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        price: 850000,
        originalPrice: 950000,
        isFeatured: true,
      },
    ],
  },
};

/**
 * Props cho trang danh mục
 * @interface CollectionPageProps
 * @property {Object} params - Tham số từ URL
 * @property {string} params.slug - Slug của danh mục
 */
interface CollectionPageProps {
  params: {
    slug: string;
  };
}

/**
 * Trang danh mục sản phẩm
 * @param {CollectionPageProps} props - Props cho trang danh mục
 * @returns {JSX.Element} - Thành phần trang danh mục được render
 */
export default function CollectionPage({ params }: CollectionPageProps) {
  const slug = params.slug;
  const category =
    categories[slug as keyof typeof categories] || categories.all;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">{category.title}</h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          {category.description}
        </p>
      </div>

      <div className="mb-8">{/* Có thể thêm bộ lọc ở đây */}</div>

      <ProductGrid products={category.products} />
    </div>
  );
}
