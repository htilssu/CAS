import { ProductCard } from "@/components/product/ProductCard";

/**
 * Giao diện cho dữ liệu sản phẩm trong lưới
 * @interface Product
 * @property {string} id - ID của sản phẩm
 * @property {string} name - Tên sản phẩm
 * @property {string} slug - Slug URL của sản phẩm
 * @property {string} category - Danh mục sản phẩm
 * @property {string} image - Đường dẫn hình ảnh sản phẩm
 * @property {number} price - Giá sản phẩm
 * @property {number} [originalPrice] - Giá gốc trước khi giảm giá (nếu có)
 * @property {boolean} [isFeatured] - Có phải là sản phẩm nổi bật
 * @property {boolean} [isNew] - Có phải là sản phẩm mới
 * @property {boolean} [isOutOfStock] - Sản phẩm hết hàng
 */
interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  originalPrice?: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isOutOfStock?: boolean;
}

/**
 * Props cho thành phần ProductGrid
 * @interface ProductGridProps
 * @property {Product[]} products - Danh sách sản phẩm hiển thị
 * @property {string} [emptyMessage] - Thông báo hiển thị khi không có sản phẩm
 */
interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

/**
 * Thành phần hiển thị lưới sản phẩm
 * @param {ProductGridProps} props - Props của lưới sản phẩm
 * @returns {JSX.Element} - Thành phần ProductGrid được render
 */
export function ProductGrid({ products, emptyMessage }: ProductGridProps) {
  if (products.length === 0 && emptyMessage) {
    return (
      <div className="text-center py-10 text-gray-500">{emptyMessage}</div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
