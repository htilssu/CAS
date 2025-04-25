import { getFeaturedProducts } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";

/**
 * Component hiển thị các sản phẩm được gợi ý cho người dùng
 * @returns {React.ReactElement} - Danh sách sản phẩm gợi ý
 */
export default function RecommendedProducts() {
  // Lấy sản phẩm nổi bật để gợi ý
  const recommendedProducts = getFeaturedProducts().slice(0, 4);

  if (recommendedProducts.length === 0) {
    return null;
  }

  // Chuyển đổi dữ liệu sản phẩm để phù hợp với ProductCard
  const adaptedProducts = recommendedProducts.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.categoryIds[0] || "",
    image: product.images[0] || "",
    price: product.price,
    originalPrice: product.originalPrice,
    isFeatured: product.isFeatured,
    isNew: product.isNew,
    isOutOfStock: product.isOutOfStock,
  }));

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Có thể bạn quan tâm</h2>
        <p className="mt-1 text-gray-600">Dựa trên xu hướng mua sắm gần đây</p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {adaptedProducts.map((product) => (
          <div key={product.id} className="animate-fadeIn">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
