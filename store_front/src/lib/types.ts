/**
 * Interface cho danh mục sản phẩm
 * @interface Category
 * @property {string} id - ID của danh mục
 * @property {string} name - Tên danh mục
 * @property {string} slug - Slug URL của danh mục
 * @property {string} description - Mô tả danh mục
 * @property {string} [image] - Đường dẫn hình ảnh danh mục (nếu có)
 * @property {string[]} subcategories - Danh sách ID của các danh mục con (nếu có)
 * @property {boolean} [featured] - Danh mục được đánh dấu là nổi bật hay không
 */
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  subcategories?: string[];
  featured?: boolean;
}

/**
 * Interface cho thuộc tính của variant sản phẩm
 * @interface VariantAttribute
 * @property {string} name - Tên thuộc tính (ví dụ: "Màu sắc", "Kích thước", "Hương vị", "Dung tích")
 * @property {string[]} values - Danh sách giá trị có thể có của thuộc tính
 */
export interface VariantAttribute {
  name: string;
  values: string[];
}

/**
 * Interface cho variant của sản phẩm
 * @interface ProductVariant
 * @property {string} id - ID của variant
 * @property {string} name - Tên của variant
 * @property {Record<string, string>} attributes - Các thuộc tính của variant (dạng key-value)
 * @property {number} price - Giá của variant
 * @property {number} [originalPrice] - Giá gốc của variant (nếu có giảm giá)
 * @property {string} [sku] - Mã SKU của variant
 * @property {boolean} [isOutOfStock] - Variant hết hàng hay không
 * @property {number} [stockQuantity] - Số lượng tồn kho
 * @property {string[]} images - Danh sách hình ảnh của variant
 */
export interface ProductVariant {
  id: string;
  name: string;
  attributes: Record<string, string>;
  price: number;
  originalPrice?: number;
  sku?: string;
  isOutOfStock?: boolean;
  stockQuantity?: number;
  images: string[];
}

/**
 * Interface cho sản phẩm
 * @interface Product
 * @property {string} id - ID của sản phẩm
 * @property {string} name - Tên sản phẩm
 * @property {string} slug - Slug URL của sản phẩm
 * @property {string} description - Mô tả sản phẩm
 * @property {string[]} features - Danh sách tính năng/đặc điểm của sản phẩm
 * @property {string[]} images - Danh sách hình ảnh sản phẩm chung
 * @property {number} price - Giá cơ bản của sản phẩm
 * @property {number} [originalPrice] - Giá gốc của sản phẩm (nếu có giảm giá)
 * @property {string[]} categoryIds - Danh sách ID của các danh mục mà sản phẩm thuộc về
 * @property {string} productType - Loại sản phẩm (ví dụ: "quần áo", "mỹ phẩm", "điện tử", "thực phẩm")
 * @property {string} [brandId] - ID của thương hiệu (nếu có)
 * @property {boolean} [isFeatured] - Sản phẩm được đánh dấu là nổi bật hay không
 * @property {boolean} [isNew] - Sản phẩm mới hay không
 * @property {boolean} [isOutOfStock] - Tất cả variant của sản phẩm đều hết hàng
 * @property {string[]} [relatedProductIds] - Danh sách ID của các sản phẩm liên quan
 * @property {VariantAttribute[]} variantAttributes - Các thuộc tính biến thể của sản phẩm
 * @property {ProductVariant[]} variants - Danh sách các biến thể của sản phẩm
 * @property {Record<string, string>} [specifications] - Thông số kỹ thuật của sản phẩm (cho sản phẩm điện tử, đồ gia dụng)
 * @property {Record<string, string>} [additionalInfo] - Thông tin bổ sung theo loại sản phẩm
 */
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  images: string[];
  price: number;
  originalPrice?: number;
  categoryIds: string[];
  productType: string;
  brandId?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isOutOfStock?: boolean;
  relatedProductIds?: string[];
  variantAttributes: VariantAttribute[];
  variants: ProductVariant[];
  specifications?: Record<string, string>;
  additionalInfo?: Record<string, string>;

  // Các trường hỗ trợ ngược cho các sản phẩm cũ
  availableSizes?: string[];
  availableColors?: string[];
}

/**
 * Interface cho sản phẩm hiển thị (kết hợp với thông tin danh mục)
 * @interface ProductDisplay
 * @extends {Omit<Product, 'categoryIds' | 'relatedProductIds'>}
 * @property {Category[]} categories - Danh sách danh mục của sản phẩm
 * @property {ProductDisplay[]} [relatedProducts] - Danh sách sản phẩm liên quan
 */
export interface ProductDisplay
  extends Omit<Product, "categoryIds" | "relatedProductIds"> {
  categories: Pick<Category, "id" | "name" | "slug">[];
  relatedProducts?: Omit<
    ProductDisplay,
    "relatedProducts" | "categories" | "features" | "description"
  >[];
}

/**
 * Interface cho mặt hàng trong giỏ hàng
 * @interface CartItem
 * @property {string} productId - ID của sản phẩm
 * @property {string} productName - Tên sản phẩm
 * @property {string} productSlug - Slug URL của sản phẩm
 * @property {string} variantId - ID của variant sản phẩm
 * @property {string} variantName - Tên của variant sản phẩm
 * @property {string} image - Đường dẫn hình ảnh sản phẩm
 * @property {number} price - Giá sản phẩm
 * @property {Record<string, string>} attributes - Các thuộc tính của variant đã chọn
 * @property {number} quantity - Số lượng
 */
export interface CartItem {
  productId: string;
  productName: string;
  productSlug: string;
  variantId: string;
  variantName: string;
  image: string;
  price: number;
  attributes: Record<string, string>;
  quantity: number;
}
