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
    image: "/images/categories/category-shirts.svg",
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
    image: "/images/categories/category-pants.svg",
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
    image: "/images/categories/category-dresses.svg",
    featured: true,
  },
  {
    id: "phu-kien",
    name: "Phụ kiện",
    slug: "phu-kien",
    description: "Phụ kiện thời trang để hoàn thiện phong cách của bạn",
    image: "/images/categories/category-accessories.svg",
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
  {
    id: "my-pham",
    name: "Mỹ phẩm",
    slug: "my-pham",
    description: "Sản phẩm chăm sóc sắc đẹp và làm đẹp",
    image: "/images/categories/category-cosmetics.svg",
    featured: true,
    subcategories: ["cham-soc-da", "trang-diem", "nuoc-hoa"],
  },
  {
    id: "cham-soc-da",
    name: "Chăm sóc da",
    slug: "cham-soc-da",
    description: "Sản phẩm chăm sóc da mặt và cơ thể",
    image: "/images/categories/category-skincare.jpg",
    subcategories: ["sua-rua-mat", "kem-duong", "mat-na"],
  },
  {
    id: "sua-rua-mat",
    name: "Sữa rửa mặt",
    slug: "sua-rua-mat",
    description: "Sữa rửa mặt cho mọi loại da",
    image: "/images/categories/category-cleanser.jpg",
  },
  {
    id: "kem-duong",
    name: "Kem dưỡng",
    slug: "kem-duong",
    description: "Kem dưỡng ẩm và chăm sóc da",
    image: "/images/categories/category-moisturizer.jpg",
  },
  {
    id: "mat-na",
    name: "Mặt nạ",
    slug: "mat-na",
    description: "Mặt nạ dưỡng da các loại",
    image: "/images/categories/category-mask.jpg",
  },
  {
    id: "trang-diem",
    name: "Trang điểm",
    slug: "trang-diem",
    description: "Sản phẩm trang điểm chuyên nghiệp",
    image: "/images/categories/category-makeup.jpg",
  },
  {
    id: "nuoc-hoa",
    name: "Nước hoa",
    slug: "nuoc-hoa",
    description: "Nước hoa cao cấp cho nam và nữ",
    image: "/images/categories/category-perfume.jpg",
  },
  {
    id: "cham-soc-ca-nhan",
    name: "Chăm sóc cá nhân",
    slug: "cham-soc-ca-nhan",
    description: "Sản phẩm chăm sóc cá nhân hàng ngày",
    image: "/images/categories/category-personal-care.svg",
    subcategories: ["cham-soc-toc", "cham-soc-rang-mieng", "tam-goi"],
  },
  {
    id: "cham-soc-toc",
    name: "Chăm sóc tóc",
    slug: "cham-soc-toc",
    description: "Sản phẩm dành cho mái tóc khỏe đẹp",
    image: "/images/categories/category-hair-care.jpg",
  },
  {
    id: "cham-soc-rang-mieng",
    name: "Chăm sóc răng miệng",
    slug: "cham-soc-rang-mieng",
    description: "Sản phẩm vệ sinh và chăm sóc răng miệng",
    image: "/images/categories/category-dental-care.jpg",
  },
  {
    id: "tam-goi",
    name: "Tắm gội",
    slug: "tam-goi",
    description: "Sữa tắm, dầu gội và các sản phẩm tắm gội khác",
    image: "/images/categories/category-bath.jpg",
  },
  {
    id: "dien-tu",
    name: "Điện tử",
    slug: "dien-tu",
    description: "Thiết bị điện tử và công nghệ",
    image: "/images/categories/category-electronics.svg",
    featured: true,
    subcategories: ["dien-thoai", "laptop", "phu-kien-dien-tu"],
  },
  {
    id: "dien-thoai",
    name: "Điện thoại",
    slug: "dien-thoai",
    description: "Điện thoại thông minh các loại",
    image: "/images/categories/category-smartphone.jpg",
  },
  {
    id: "laptop",
    name: "Laptop",
    slug: "laptop",
    description: "Máy tính xách tay cho công việc và giải trí",
    image: "/images/categories/category-laptop.jpg",
  },
  {
    id: "phu-kien-dien-tu",
    name: "Phụ kiện điện tử",
    slug: "phu-kien-dien-tu",
    description: "Phụ kiện cho thiết bị điện tử",
    image: "/images/categories/category-electronics-accessories.jpg",
  },
  {
    id: "gia-dung",
    name: "Đồ gia dụng",
    slug: "gia-dung",
    description: "Thiết bị và đồ dùng cho gia đình",
    image: "/images/categories/category-home-appliances.svg",
    subcategories: ["nha-bep", "phong-ngu", "phong-tam"],
  },
  {
    id: "nha-bep",
    name: "Nhà bếp",
    slug: "nha-bep",
    description: "Đồ dùng và thiết bị nhà bếp",
    image: "/images/categories/category-kitchen.jpg",
  },
  {
    id: "phong-ngu",
    name: "Phòng ngủ",
    slug: "phong-ngu",
    description: "Đồ dùng và nội thất phòng ngủ",
    image: "/images/categories/category-bedroom.jpg",
  },
  {
    id: "phong-tam",
    name: "Phòng tắm",
    slug: "phong-tam",
    description: "Đồ dùng và thiết bị phòng tắm",
    image: "/images/categories/category-bathroom.jpg",
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
    productType: "quần áo",
    isFeatured: true,
    isNew: true,
    variantAttributes: [
      {
        name: "Màu sắc",
        values: ["Trắng", "Đen", "Xám", "Xanh Navy"],
      },
      {
        name: "Kích thước",
        values: ["S", "M", "L", "XL"],
      },
    ],
    variants: [
      {
        id: "ao-thun-basic-cotton-trang-s",
        name: "Áo Thun Basic Cotton - Trắng, Size S",
        attributes: {
          "Màu sắc": "Trắng",
          "Kích thước": "S",
        },
        price: 199000,
        sku: "ATC-TRG-S",
        images: ["/images/products/ao-thun-basic-1.jpg"],
      },
      {
        id: "ao-thun-basic-cotton-trang-m",
        name: "Áo Thun Basic Cotton - Trắng, Size M",
        attributes: {
          "Màu sắc": "Trắng",
          "Kích thước": "M",
        },
        price: 199000,
        sku: "ATC-TRG-M",
        images: ["/images/products/ao-thun-basic-1.jpg"],
      },
      {
        id: "ao-thun-basic-cotton-den-s",
        name: "Áo Thun Basic Cotton - Đen, Size S",
        attributes: {
          "Màu sắc": "Đen",
          "Kích thước": "S",
        },
        price: 199000,
        sku: "ATC-DEN-S",
        images: ["/images/products/ao-thun-basic-2.jpg"],
      },
      {
        id: "ao-thun-basic-cotton-den-m",
        name: "Áo Thun Basic Cotton - Đen, Size M",
        attributes: {
          "Màu sắc": "Đen",
          "Kích thước": "M",
        },
        price: 199000,
        sku: "ATC-DEN-M",
        images: ["/images/products/ao-thun-basic-2.jpg"],
      },
    ],
    availableSizes: ["S", "M", "L", "XL"],
    availableColors: ["Trắng", "Đen", "Xám", "Xanh Navy"],
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
  {
    id: "kem-danh-rang-fresh-mint",
    name: "Kem Đánh Răng Fresh Mint",
    slug: "kem-danh-rang-fresh-mint",
    description:
      "Kem đánh răng với công thức đột phá giúp làm sạch mảng bám, bảo vệ men răng và mang lại hơi thở thơm mát suốt ngày dài.",
    features: [
      "Làm sạch sâu, ngăn ngừa sâu răng",
      "Bảo vệ men răng khỏi ăn mòn",
      "Làm trắng răng nhẹ nhàng",
      "Hương bạc hà thơm mát",
      "Công thức không chứa paraben",
    ],
    images: [
      "/images/products/kem-danh-rang-1.jpg",
      "/images/products/kem-danh-rang-2.jpg",
    ],
    price: 45000,
    categoryIds: ["cham-soc-ca-nhan", "cham-soc-rang-mieng"],
    productType: "chăm sóc cá nhân",
    brandId: "colgate",
    isNew: true,
    variantAttributes: [
      {
        name: "Hương vị",
        values: ["Bạc hà mát lạnh", "Trà xanh", "Thảo dược"],
      },
      {
        name: "Dung tích",
        values: ["100g", "150g", "200g"],
      },
    ],
    variants: [
      {
        id: "kem-danh-rang-bac-ha-100g",
        name: "Kem Đánh Răng Fresh Mint - Bạc hà mát lạnh 100g",
        attributes: {
          "Hương vị": "Bạc hà mát lạnh",
          "Dung tích": "100g",
        },
        price: 45000,
        sku: "KDR-BH-100",
        images: ["/images/products/kem-danh-rang-1.jpg"],
      },
      {
        id: "kem-danh-rang-bac-ha-150g",
        name: "Kem Đánh Răng Fresh Mint - Bạc hà mát lạnh 150g",
        attributes: {
          "Hương vị": "Bạc hà mát lạnh",
          "Dung tích": "150g",
        },
        price: 65000,
        sku: "KDR-BH-150",
        images: ["/images/products/kem-danh-rang-1.jpg"],
      },
      {
        id: "kem-danh-rang-tra-xanh-100g",
        name: "Kem Đánh Răng Fresh Mint - Trà xanh 100g",
        attributes: {
          "Hương vị": "Trà xanh",
          "Dung tích": "100g",
        },
        price: 48000,
        sku: "KDR-TX-100",
        images: ["/images/products/kem-danh-rang-2.jpg"],
      },
      {
        id: "kem-danh-rang-thao-duoc-100g",
        name: "Kem Đánh Răng Fresh Mint - Thảo dược 100g",
        attributes: {
          "Hương vị": "Thảo dược",
          "Dung tích": "100g",
        },
        price: 50000,
        sku: "KDR-TD-100",
        images: ["/images/products/kem-danh-rang-2.jpg"],
      },
    ],
    specifications: {
      "Xuất xứ": "Việt Nam",
      "Thành phần chính": "Fluoride, Silica, Glycerin",
      "Hạn sử dụng": "24 tháng kể từ ngày sản xuất",
      "Hướng dẫn bảo quản": "Nơi khô ráo, tránh ánh nắng trực tiếp",
    },
    additionalInfo: {
      "Đối tượng sử dụng": "Người lớn và trẻ em trên 6 tuổi",
      "Tần suất sử dụng": "2-3 lần/ngày sau khi ăn",
    },
  },
  {
    id: "smartphone-galaxy-s22",
    name: "Smartphone Galaxy S22",
    slug: "smartphone-galaxy-s22",
    description:
      "Điện thoại thông minh với hiệu năng mạnh mẽ, camera chất lượng cao và màn hình sắc nét, mang đến trải nghiệm sử dụng tuyệt vời.",
    features: [
      "Màn hình Dynamic AMOLED 2X 6.1 inch",
      "Chip Exynos 2200 8 nhân",
      "RAM 8GB, ROM tùy chọn",
      "Camera sau 50MP, camera trước 10MP",
      "Pin 3700mAh, sạc nhanh 25W",
    ],
    images: [
      "/images/products/smartphone-1.jpg",
      "/images/products/smartphone-2.jpg",
      "/images/products/smartphone-3.jpg",
    ],
    price: 14990000,
    categoryIds: ["dien-tu", "dien-thoai"],
    productType: "điện tử",
    brandId: "samsung",
    isFeatured: true,
    variantAttributes: [
      {
        name: "Màu sắc",
        values: ["Đen", "Trắng", "Xanh dương"],
      },
      {
        name: "Bộ nhớ trong",
        values: ["128GB", "256GB", "512GB"],
      },
    ],
    variants: [
      {
        id: "smartphone-galaxy-s22-den-128gb",
        name: "Smartphone Galaxy S22 - Đen 128GB",
        attributes: {
          "Màu sắc": "Đen",
          "Bộ nhớ trong": "128GB",
        },
        price: 14990000,
        sku: "SGS22-DEN-128",
        images: ["/images/products/smartphone-1.jpg"],
      },
      {
        id: "smartphone-galaxy-s22-den-256gb",
        name: "Smartphone Galaxy S22 - Đen 256GB",
        attributes: {
          "Màu sắc": "Đen",
          "Bộ nhớ trong": "256GB",
        },
        price: 16990000,
        sku: "SGS22-DEN-256",
        images: ["/images/products/smartphone-1.jpg"],
      },
      {
        id: "smartphone-galaxy-s22-trang-128gb",
        name: "Smartphone Galaxy S22 - Trắng 128GB",
        attributes: {
          "Màu sắc": "Trắng",
          "Bộ nhớ trong": "128GB",
        },
        price: 14990000,
        sku: "SGS22-TRG-128",
        images: ["/images/products/smartphone-2.jpg"],
      },
      {
        id: "smartphone-galaxy-s22-xanh-128gb",
        name: "Smartphone Galaxy S22 - Xanh dương 128GB",
        attributes: {
          "Màu sắc": "Xanh dương",
          "Bộ nhớ trong": "128GB",
        },
        price: 14990000,
        sku: "SGS22-XNH-128",
        images: ["/images/products/smartphone-3.jpg"],
      },
    ],
    specifications: {
      "Màn hình": "Dynamic AMOLED 2X, 6.1 inch, Full HD+",
      "Hệ điều hành": "Android 12, One UI 4.1",
      "Chip xử lý": "Exynos 2200 8 nhân",
      RAM: "8GB",
      "Camera sau": "Chính 50MP, Góc siêu rộng 12MP, Tele 10MP",
      "Camera trước": "10MP",
      Pin: "3700mAh, sạc nhanh 25W",
      "Kết nối": "5G, Wi-Fi 6, Bluetooth 5.2, NFC",
      "Chống nước": "IP68",
    },
  },
];

/**
 * Lấy danh mục theo slug
 * @param {string} slug - Slug của danh mục
 * @returns {Category | undefined} - Danh mục tìm thấy hoặc undefined
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

/**
 * Lấy danh mục theo ID
 * @param {string} id - ID của danh mục
 * @returns {Category | undefined} - Danh mục tìm thấy hoặc undefined
 */
export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

/**
 * Lấy các danh mục con của một danh mục
 * @param {string} categoryId - ID của danh mục cha
 * @returns {Category[]} - Danh sách danh mục con
 */
export function getSubcategories(categoryId: string): Category[] {
  const category = getCategoryById(categoryId);
  if (!category || !category.subcategories) return [];

  return categories.filter((cat) => category.subcategories?.includes(cat.id));
}

/**
 * Lấy danh sách danh mục chính (không phải danh mục con)
 * @returns {Category[]} - Danh sách danh mục chính
 */
export function getMainCategories(): Category[] {
  // Kiểm tra xem danh mục có xuất hiện trong subcategories của các danh mục khác hay không
  const subcategories = categories
    .filter((cat) => cat.subcategories)
    .flatMap((cat) => cat.subcategories || []);

  // Lọc các danh mục không xuất hiện trong subcategories
  return categories.filter((cat) => !subcategories.includes(cat.id));
}

/**
 * Lấy sản phẩm theo slug
 * @param {string} slug - Slug của sản phẩm
 * @returns {Product | undefined} - Sản phẩm tìm thấy hoặc undefined
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/**
 * Lấy sản phẩm theo ID
 * @param {string} id - ID của sản phẩm
 * @returns {Product | undefined} - Sản phẩm tìm thấy hoặc undefined
 */
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

/**
 * Lấy variant của sản phẩm theo ID
 * @param {string} productId - ID của sản phẩm
 * @param {string} variantId - ID của variant
 * @returns {ProductVariant | undefined} - Variant tìm thấy hoặc undefined
 */
export function getProductVariantById(
  productId: string,
  variantId: string
): ProductVariant | undefined {
  const product = getProductById(productId);
  if (!product) return undefined;

  return product.variants.find((variant) => variant.id === variantId);
}

/**
 * Lấy danh sách sản phẩm thuộc một danh mục
 * @param {string} categoryId - ID của danh mục
 * @returns {Product[]} - Danh sách sản phẩm
 */
export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((product) => product.categoryIds.includes(categoryId));
}

/**
 * Lấy danh sách sản phẩm theo loại sản phẩm
 * @param {string} productType - Loại sản phẩm
 * @returns {Product[]} - Danh sách sản phẩm
 */
export function getProductsByType(productType: string): Product[] {
  return products.filter((product) => product.productType === productType);
}

/**
 * Chuyển đổi từ Product sang ProductDisplay
 * @param {Product} product - Sản phẩm cần chuyển đổi
 * @returns {ProductDisplay} - Sản phẩm hiển thị
 */
export function convertToProductDisplay(product: Product): ProductDisplay {
  // Lấy thông tin các danh mục của sản phẩm
  const productCategories = product.categoryIds
    .map((id) => {
      const category = getCategoryById(id);
      if (!category) return null;
      return {
        id: category.id,
        name: category.name,
        slug: category.slug,
      };
    })
    .filter((cat): cat is NonNullable<typeof cat> => cat !== null);

  // Lấy thông tin các sản phẩm liên quan
  const relatedProducts = product.relatedProductIds
    ? product.relatedProductIds
        .map((id) => {
          const relatedProduct = getProductById(id);
          if (!relatedProduct) return null;

          return {
            id: relatedProduct.id,
            name: relatedProduct.name,
            slug: relatedProduct.slug,
            price: relatedProduct.price,
            originalPrice: relatedProduct.originalPrice,
            images: relatedProduct.images,
            isFeatured: relatedProduct.isFeatured,
            isNew: relatedProduct.isNew,
            isOutOfStock: relatedProduct.isOutOfStock,
            variants: relatedProduct.variants,
            variantAttributes: relatedProduct.variantAttributes,
            productType: relatedProduct.productType,
            categoryIds: relatedProduct.categoryIds,
          };
        })
        .filter((p): p is NonNullable<typeof p> => p !== null)
    : undefined;

  // Trả về đối tượng ProductDisplay
  const { categoryIds, relatedProductIds, ...rest } = product;
  return {
    ...rest,
    categories: productCategories,
    relatedProducts,
  };
}

/**
 * Lấy danh sách sản phẩm nổi bật
 * @returns {Product[]} - Danh sách sản phẩm nổi bật
 */
export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured);
}

/**
 * Lấy danh sách sản phẩm mới
 * @returns {Product[]} - Danh sách sản phẩm mới
 */
export function getNewProducts(): Product[] {
  return products.filter((product) => product.isNew);
}

/**
 * Lấy danh sách sản phẩm liên quan
 * @param {string} productId - ID của sản phẩm
 * @param {number} [limit=4] - Số lượng tối đa sản phẩm trả về
 * @returns {Product[]} - Danh sách sản phẩm liên quan
 */
export function getRelatedProducts(
  productId: string,
  limit: number = 4
): Product[] {
  const product = getProductById(productId);
  if (!product) return [];

  // Nếu sản phẩm có định nghĩa sẵn các sản phẩm liên quan
  if (product.relatedProductIds && product.relatedProductIds.length > 0) {
    return product.relatedProductIds
      .map((id) => getProductById(id))
      .filter((p): p is Product => p !== undefined)
      .slice(0, limit);
  }

  // Nếu không, lấy các sản phẩm có cùng loại và danh mục
  return products
    .filter(
      (p) =>
        p.id !== productId &&
        (p.productType === product.productType ||
          p.categoryIds.some((catId) => product.categoryIds.includes(catId)))
    )
    .slice(0, limit);
}

/**
 * Lấy danh sách tất cả các loại sản phẩm
 * @returns {string[]} - Danh sách các loại sản phẩm
 */
export function getAllProductTypes(): string[] {
  const productTypes = new Set<string>();

  products.forEach((product) => {
    if (product.productType) {
      productTypes.add(product.productType);
    }
  });

  return Array.from(productTypes);
}

/**
 * Lấy thông tin một variant sản phẩm dựa trên các thuộc tính
 * @param {string} productId - ID của sản phẩm
 * @param {Record<string, string>} attributes - Các thuộc tính của variant cần tìm
 * @returns {ProductVariant | undefined} - Variant tìm thấy hoặc undefined
 */
export function getProductVariantByAttributes(
  productId: string,
  attributes: Record<string, string>
): ProductVariant | undefined {
  const product = getProductById(productId);
  if (!product) return undefined;

  // So khớp các thuộc tính
  return product.variants.find((variant) => {
    // Kiểm tra xem tất cả các thuộc tính cần tìm có khớp với variant không
    const attrEntries = Object.entries(attributes);
    return attrEntries.every(
      ([key, value]) => variant.attributes[key] === value
    );
  });
}
