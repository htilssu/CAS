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
 * Interface cho sản phẩm
 * @interface Product
 * @property {string} id - ID của sản phẩm
 * @property {string} name - Tên sản phẩm
 * @property {string} slug - Slug URL của sản phẩm
 * @property {string} description - Mô tả sản phẩm
 * @property {string[]} features - Danh sách tính năng/đặc điểm của sản phẩm
 * @property {string[]} images - Danh sách hình ảnh sản phẩm
 * @property {number} price - Giá hiện tại của sản phẩm
 * @property {number} [originalPrice] - Giá gốc của sản phẩm (nếu có giảm giá)
 * @property {string[]} categoryIds - Danh sách ID của các danh mục mà sản phẩm thuộc về
 * @property {string[]} availableSizes - Danh sách kích thước có sẵn
 * @property {string[]} availableColors - Danh sách màu sắc có sẵn
 * @property {boolean} [isFeatured] - Sản phẩm được đánh dấu là nổi bật hay không
 * @property {boolean} [isNew] - Sản phẩm mới hay không
 * @property {boolean} [isOutOfStock] - Sản phẩm hết hàng hay không
 * @property {string[]} [relatedProductIds] - Danh sách ID của các sản phẩm liên quan
 * @property {string} [brandId] - ID của thương hiệu (nếu có)
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
  availableSizes: string[];
  availableColors: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  isOutOfStock?: boolean;
  relatedProductIds?: string[];
  brandId?: string;
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
 * @property {string} id - ID của sản phẩm
 * @property {string} name - Tên sản phẩm
 * @property {string} slug - Slug URL của sản phẩm
 * @property {string} image - Đường dẫn hình ảnh sản phẩm
 * @property {number} price - Giá sản phẩm
 * @property {string} size - Kích thước đã chọn
 * @property {string} color - Màu sắc đã chọn
 * @property {number} quantity - Số lượng
 */
export interface CartItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}
