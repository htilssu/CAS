import { Category, Product, ProductDisplay } from "./types";

/**
 * Dữ liệu mẫu cho danh mục sản phẩm
 */
export const categories: Category[] = [
  {
    id: "ao",
    name: "Áo",
    slug: "ao",
    description: "Các loại áo phong cách hiện đại cho nam và nữ",
    image: "/images/categories/category-shirts.jpg",
    featured: true,
    subcategories: ["ao-thun", "ao-polo", "ao-somi"],
  },
  {
    id: "ao-thun",
    name: "Áo thun",
    slug: "ao-thun",
    description: "Áo thun thoáng mát, thiết kế đơn giản, dễ mặc",
    image: "/images/categories/category-tshirts.jpg",
  },
  {
    id: "ao-polo",
    name: "Áo polo",
    slug: "ao-polo",
    description: "Áo polo lịch sự, thích hợp cho nhiều dịp",
    image: "/images/categories/category-polos.jpg",
  },
  {
    id: "ao-somi",
    name: "Áo sơ mi",
    slug: "ao-somi",
    description: "Áo sơ mi công sở và trang trọng",
    image: "/images/categories/category-shirts-formal.jpg",
  },
  {
    id: "quan",
    name: "Quần",
    slug: "quan",
    description: "Các loại quần cho mọi hoạt động",
    image: "/images/categories/category-pants.jpg",
    featured: true,
    subcategories: ["quan-jean", "quan-au", "quan-short"],
  },
  {
    id: "quan-jean",
    name: "Quần jean",
    slug: "quan-jean",
    description: "Quần jean thời trang, bền đẹp, đa dạng kiểu dáng",
    image: "/images/categories/category-jeans.jpg",
  },
  {
    id: "quan-au",
    name: "Quần âu",
    slug: "quan-au",
    description:
      "Quần âu thanh lịch, thích hợp cho công sở và các dịp trang trọng",
    image: "/images/categories/category-formal-pants.jpg",
  },
  {
    id: "quan-short",
    name: "Quần short",
    slug: "quan-short",
    description: "Quần short thoải mái cho mùa hè và các hoạt động thể thao",
    image: "/images/categories/category-shorts.jpg",
  },
  {
    id: "vay-dam",
    name: "Váy & Đầm",
    slug: "vay-dam",
    description: "Váy và đầm phong cách hiện đại cho mọi dịp",
    image: "/images/categories/category-dresses.jpg",
    featured: true,
  },
  {
    id: "phu-kien",
    name: "Phụ kiện",
    slug: "phu-kien",
    description: "Phụ kiện thời trang để hoàn thiện phong cách của bạn",
    image: "/images/categories/category-accessories.jpg",
    subcategories: ["tui-xach", "non", "that-lung"],
  },
  {
    id: "tui-xach",
    name: "Túi xách",
    slug: "tui-xach",
    description: "Túi xách đa dạng kiểu dáng và công năng",
    image: "/images/categories/category-bags.jpg",
  },
  {
    id: "non",
    name: "Nón",
    slug: "non",
    description: "Nón thời trang và chống nắng",
    image: "/images/categories/category-hats.jpg",
  },
  {
    id: "that-lung",
    name: "Thắt lưng",
    slug: "that-lung",
    description: "Thắt lưng cao cấp từ nhiều chất liệu",
    image: "/images/categories/category-belts.jpg",
  },
];

/**
 * Dữ liệu mẫu cho sản phẩm
 */
export const products: Product[] = [
  {
    id: "ao-thun-basic-cotton",
    name: "Áo Thun Basic Cotton",
    slug: "ao-thun-basic-cotton",
    description:
      "Áo thun basic được làm từ chất liệu cotton 100%, mềm mại và thoáng khí, phù hợp cho mọi hoạt động hàng ngày.",
    features: [
      "Chất liệu cotton 100% cao cấp",
      "Thiết kế cổ tròn cơ bản",
      "Đường may chắc chắn, tỉ mỉ",
      "Dễ dàng mix-match với nhiều trang phục khác",
      "Phù hợp cho cả nam và nữ",
    ],
    images: [
      "/images/products/ao-thun-basic-1.jpg",
      "/images/products/ao-thun-basic-2.jpg",
      "/images/products/ao-thun-basic-3.jpg",
    ],
    price: 199000,
    categoryIds: ["ao", "ao-thun"],
    availableSizes: ["S", "M", "L", "XL"],
    availableColors: ["Trắng", "Đen", "Xám", "Xanh Navy"],
    isFeatured: true,
    isNew: true,
  },
  {
    id: "ao-polo-pique",
    name: "Áo Polo Pique",
    slug: "ao-polo-pique",
    description:
      "Áo polo với chất liệu pique co giãn, thoáng mát, thiết kế thanh lịch phù hợp cho nhiều dịp.",
    features: [
      "Chất liệu pique cotton kết hợp spandex",
      "Thiết kế cổ bẻ cổ điển",
      "Bo viền tay áo tinh tế",
      "Logo thêu ngực trái",
      "Phù hợp cho các dịp công sở hoặc gặp gỡ bạn bè",
    ],
    images: [
      "/images/products/ao-polo-pique-1.jpg",
      "/images/products/ao-polo-pique-2.jpg",
      "/images/products/ao-polo-pique-3.jpg",
    ],
    price: 299000,
    categoryIds: ["ao", "ao-polo"],
    availableSizes: ["M", "L", "XL", "XXL"],
    availableColors: ["Trắng", "Đen", "Xanh dương", "Đỏ đô"],
    isFeatured: true,
  },
  {
    id: "ao-somi-oxford",
    name: "Áo Sơ Mi Oxford",
    slug: "ao-somi-oxford",
    description:
      "Áo sơ mi Oxford với chất liệu cotton cao cấp, kiểu dáng slim fit trẻ trung nhưng vẫn lịch sự.",
    features: [
      "Chất liệu Oxford cotton bền đẹp",
      "Thiết kế cổ bẻ button-down",
      "Form dáng slim fit hiện đại",
      "Cúc áo chắc chắn với logo khắc laser",
      "Phù hợp cho công sở hoặc các dịp trang trọng",
    ],
    images: [
      "/images/products/ao-somi-oxford-1.jpg",
      "/images/products/ao-somi-oxford-2.jpg",
      "/images/products/ao-somi-oxford-3.jpg",
    ],
    price: 399000,
    categoryIds: ["ao", "ao-somi"],
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    availableColors: ["Trắng", "Xanh nhạt", "Hồng nhạt", "Xám nhạt"],
  },
  {
    id: "quan-jean-slim-fit",
    name: "Quần Jean Slim Fit",
    slug: "quan-jean-slim-fit",
    description:
      "Quần jean với form dáng slim fit hiện đại, tôn dáng người mặc, chất liệu denim cao cấp.",
    features: [
      "Chất liệu denim dày dặn, co giãn nhẹ",
      "Form dáng slim fit, ôm nhẹ từ hông đến mắt cá",
      "Túi quần tiện lợi với đường may chắc chắn",
      "Wash màu thời trang, không phai màu",
      "Dễ kết hợp với nhiều loại áo khác nhau",
    ],
    images: [
      "/images/products/quan-jean-slim-1.jpg",
      "/images/products/quan-jean-slim-2.jpg",
      "/images/products/quan-jean-slim-3.jpg",
    ],
    price: 499000,
    originalPrice: 649000,
    categoryIds: ["quan", "quan-jean"],
    availableSizes: ["28", "29", "30", "31", "32", "33", "34"],
    availableColors: ["Xanh đậm", "Xanh nhạt", "Đen"],
    isFeatured: true,
  },
  {
    id: "quan-au-tay-suong",
    name: "Quần Âu Ống Suông",
    slug: "quan-au-ong-suong",
    description:
      "Quần âu ống suông với thiết kế thanh lịch, chất liệu cao cấp, phù hợp cho công sở và các dịp trang trọng.",
    features: [
      "Chất liệu polyester pha len mềm mại",
      "Form dáng regular fit thoải mái",
      "Cạp quần chắc chắn với móc khóa kim loại",
      "Không nhăn, dễ giặt ủi",
      "Thiết kế vượt thời gian, dễ phối đồ",
    ],
    images: [
      "/images/products/quan-au-suong-1.jpg",
      "/images/products/quan-au-suong-2.jpg",
      "/images/products/quan-au-suong-3.jpg",
    ],
    price: 450000,
    categoryIds: ["quan", "quan-au"],
    availableSizes: ["28", "29", "30", "31", "32", "33", "34"],
    availableColors: ["Đen", "Xám", "Xanh than", "Nâu"],
  },
  {
    id: "vay-lien-casual",
    name: "Váy Liền Casual",
    slug: "vay-lien-casual",
    description:
      "Váy liền thiết kế trẻ trung, hiện đại với form dáng A-line, phù hợp cho các buổi dạo phố hay gặp gỡ bạn bè.",
    features: [
      "Chất liệu cotton pha modal mềm mại",
      "Thiết kế cổ tròn, tay lỡ",
      "Form dáng A-line tôn dáng",
      "Họa tiết in chìm tinh tế",
      "Dễ dàng mix-match với các phụ kiện khác",
    ],
    images: [
      "/images/products/vay-lien-casual-1.jpg",
      "/images/products/vay-lien-casual-2.jpg",
      "/images/products/vay-lien-casual-3.jpg",
    ],
    price: 399000,
    categoryIds: ["vay-dam"],
    availableSizes: ["S", "M", "L", "XL"],
    availableColors: ["Đen", "Trắng", "Xanh biển", "Hoa nhỏ"],
    isNew: true,
  },
  {
    id: "tui-xach-hobo",
    name: "Túi Xách Hobo",
    slug: "tui-xach-hobo",
    description:
      "Túi xách hobo với kiểu dáng thời trang, công năng đa dạng, chất liệu da PU cao cấp, phù hợp cho nhiều dịp.",
    features: [
      "Chất liệu da PU cao cấp, bền đẹp",
      "Thiết kế dáng hobo thanh lịch",
      "Nhiều ngăn tiện lợi cho việc sắp xếp đồ",
      "Dây đeo vai điều chỉnh được",
      "Khóa kéo chắc chắn với logo thương hiệu",
    ],
    images: [
      "/images/products/tui-xach-hobo-1.jpg",
      "/images/products/tui-xach-hobo-2.jpg",
      "/images/products/tui-xach-hobo-3.jpg",
    ],
    price: 599000,
    categoryIds: ["phu-kien", "tui-xach"],
    availableSizes: ["One Size"],
    availableColors: ["Đen", "Be", "Nâu", "Đỏ đô"],
    isFeatured: true,
  },
  {
    id: "non-bucket-hat",
    name: "Nón Bucket Hat",
    slug: "non-bucket-hat",
    description:
      "Nón bucket hat thời trang, chống nắng hiệu quả, dễ dàng phối với nhiều outfit khác nhau.",
    features: [
      "Chất liệu cotton dày dặn, thoáng khí",
      "Thiết kế vành rộng bảo vệ khỏi ánh nắng",
      "Logo thêu tinh tế",
      "Dễ gấp gọn, tiện lợi khi mang theo",
      "Phù hợp cho cả nam và nữ",
    ],
    images: [
      "/images/products/non-bucket-1.jpg",
      "/images/products/non-bucket-2.jpg",
      "/images/products/non-bucket-3.jpg",
    ],
    price: 199000,
    categoryIds: ["phu-kien", "non"],
    availableSizes: ["One Size"],
    availableColors: ["Đen", "Trắng", "Be", "Xanh rêu"],
    isNew: true,
  },
];

/**
 * Hàm lấy danh mục theo slug
 * @param {string} slug - Slug của danh mục cần tìm
 * @returns {Category | undefined} - Danh mục tìm thấy hoặc undefined nếu không tìm thấy
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

/**
 * Hàm lấy danh mục theo ID
 * @param {string} id - ID của danh mục cần tìm
 * @returns {Category | undefined} - Danh mục tìm thấy hoặc undefined nếu không tìm thấy
 */
export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

/**
 * Hàm lấy danh sách các danh mục con của một danh mục
 * @param {string} categoryId - ID của danh mục cha
 * @returns {Category[]} - Danh sách các danh mục con
 */
export function getSubcategories(categoryId: string): Category[] {
  const category = getCategoryById(categoryId);
  if (!category || !category.subcategories) return [];

  return categories.filter((cat) => category.subcategories?.includes(cat.id));
}

/**
 * Hàm lấy danh sách các danh mục chính (không phải danh mục con)
 * @returns {Category[]} - Danh sách các danh mục chính
 */
export function getMainCategories(): Category[] {
  const allCategoryIds = categories.map((cat) => cat.id);
  const allSubcategoryIds = categories.flatMap(
    (cat) => cat.subcategories || []
  );

  return categories.filter((cat) => !allSubcategoryIds.includes(cat.id));
}

/**
 * Hàm lấy sản phẩm theo slug
 * @param {string} slug - Slug của sản phẩm cần tìm
 * @returns {Product | undefined} - Sản phẩm tìm thấy hoặc undefined nếu không tìm thấy
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/**
 * Hàm lấy sản phẩm theo ID
 * @param {string} id - ID của sản phẩm cần tìm
 * @returns {Product | undefined} - Sản phẩm tìm thấy hoặc undefined nếu không tìm thấy
 */
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

/**
 * Hàm lấy danh sách sản phẩm theo danh mục
 * @param {string} categoryId - ID của danh mục
 * @returns {Product[]} - Danh sách sản phẩm thuộc danh mục
 */
export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((product) => product.categoryIds.includes(categoryId));
}

/**
 * Hàm chuyển đổi sản phẩm sang dạng hiển thị (thêm thông tin danh mục)
 * @param {Product} product - Sản phẩm cần chuyển đổi
 * @returns {ProductDisplay} - Sản phẩm dạng hiển thị
 */
export function convertToProductDisplay(product: Product): ProductDisplay {
  const productCategories = product.categoryIds
    .map((id) => getCategoryById(id))
    .filter((cat): cat is Category => cat !== undefined)
    .map((cat) => ({ id: cat.id, name: cat.name, slug: cat.slug }));

  const relatedProducts = product.relatedProductIds
    ? product.relatedProductIds
        .map((id) => getProductById(id))
        .filter((p): p is Product => p !== undefined)
        .map((p) => ({
          id: p.id,
          name: p.name,
          slug: p.slug,
          images: p.images,
          price: p.price,
          originalPrice: p.originalPrice,
          availableSizes: p.availableSizes,
          availableColors: p.availableColors,
          isFeatured: p.isFeatured,
          isNew: p.isNew,
          isOutOfStock: p.isOutOfStock,
        }))
    : undefined;

  return {
    ...product,
    categories: productCategories,
    relatedProducts,
  };
}

/**
 * Hàm lấy danh sách sản phẩm nổi bật
 * @returns {Product[]} - Danh sách sản phẩm nổi bật
 */
export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured);
}

/**
 * Hàm lấy danh sách sản phẩm mới
 * @returns {Product[]} - Danh sách sản phẩm mới
 */
export function getNewProducts(): Product[] {
  return products.filter((product) => product.isNew);
}

/**
 * Hàm lấy danh sách sản phẩm liên quan của một sản phẩm
 * @param {string} productId - ID của sản phẩm
 * @param {number} limit - Số lượng sản phẩm liên quan tối đa
 * @returns {Product[]} - Danh sách sản phẩm liên quan
 */
export function getRelatedProducts(
  productId: string,
  limit: number = 4
): Product[] {
  const product = getProductById(productId);
  if (!product) return [];

  // Nếu sản phẩm có danh sách sản phẩm liên quan
  if (product.relatedProductIds && product.relatedProductIds.length > 0) {
    return product.relatedProductIds
      .map((id) => getProductById(id))
      .filter((p): p is Product => p !== undefined)
      .slice(0, limit);
  }

  // Nếu không có danh sách sẵn, lấy sản phẩm trong cùng danh mục
  return products
    .filter(
      (p) =>
        p.id !== productId &&
        p.categoryIds.some((catId) => product.categoryIds.includes(catId))
    )
    .slice(0, limit);
}
