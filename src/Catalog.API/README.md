# Microservice Product.API

## Giới Thiệu

Product.API là một microservice chịu trách nhiệm quản lý toàn bộ thông tin liên quan đến sản phẩm trong hệ thống thương mại điện tử. Microservice này được thiết kế để hoạt động độc lập, có khả năng mở rộng cao và tương tác với các microservice khác thông qua API.

## Kiến Trúc Tổng Quan

```mermaid
graph TB
    Client[Client Applications] --> ApiGateway[API Gateway]
    ApiGateway --> ProductAPI[Product.API]
    ApiGateway --> OtherServices[Other Microservices]

    ProductAPI --> ProductDb[(Product Database)]

    subgraph "Product.API Microservice"
        ProductAPI --> Controllers[Controllers]
        Controllers --> Services[Services]
        Services --> Repositories[Repositories]
        Repositories --> DbContext[DbContext]
        DbContext --> Entities[Domain Entities]
        DbContext --> ProductDb
    end

    ProductAPI -- Events --> MessageBroker[Message Broker]
    MessageBroker --> OtherServices
```

## Luồng Xử Lý Chính

### Luồng Xử Lý Yêu Cầu API

```mermaid
sequenceDiagram
    participant Client
    participant APIGateway
    participant ProductAPI
    participant Database

    Client->>APIGateway: Gửi Request
    APIGateway->>ProductAPI: Định tuyến Request

    alt Get Products
        ProductAPI->>Database: Query sản phẩm
        Database->>ProductAPI: Trả về dữ liệu
        ProductAPI->>APIGateway: Trả về danh sách sản phẩm
    else Create/Update Product
        ProductAPI->>Database: Lưu/Cập nhật sản phẩm
        Database->>ProductAPI: Xác nhận
        ProductAPI->>APIGateway: Trả về kết quả
    end

    APIGateway->>Client: Trả về Response
```

### Luồng Cập Nhật Sản Phẩm

```mermaid
sequenceDiagram
    participant Admin
    participant ProductAPI
    participant Database
    participant EventBus
    participant OtherServices

    Admin->>ProductAPI: Cập nhật thông tin sản phẩm
    ProductAPI->>Database: Lưu thông tin cập nhật
    Database->>ProductAPI: Xác nhận cập nhật
    ProductAPI->>EventBus: Phát hành sự kiện ProductUpdated
    EventBus->>OtherServices: Thông báo cập nhật
    ProductAPI->>Admin: Xác nhận thành công
```

## Mô Hình Dữ Liệu

```mermaid
erDiagram
    Product ||--o{ ProductImage : "contains"
    Product ||--o{ ProductVariant : "has"
    Product ||--o{ ProductAttribute : "has"
    Product }|--|| Category : "belongs to"
    Product }|--|| Brand : "belongs to"
    Product ||--o{ Review : "has"
    Product ||--o{ ProductPromotion : "applied to"

    ProductVariant ||--o{ VariantValue : "has"
    ProductAttribute ||--o{ VariantValue : "used in"

    Review ||--o{ ReviewComment : "has"

    Promotion ||--o{ ProductPromotion : "applied to"

    Product {
        int Id PK
        string Name
        string Description
        decimal Price
        decimal OriginalPrice
        decimal DiscountPercentage
        int CategoryId FK
        int BrandId FK
        int Stock
        bool IsAvailable
        string SpecificationSummary
        double Rating
        int SoldCount
        int ViewCount
    }

    ProductImage {
        int Id PK
        int ProductId FK
        string Url
        bool IsPrimary
        int DisplayOrder
        DateTime CreatedAt
    }

    ProductVariant {
        int Id PK
        int ProductId FK
        string Name
        string SKU
        decimal Price
        int Stock
        bool IsAvailable
        string ImageUrl
        DateTime CreatedAt
        DateTime UpdatedAt
    }

    ProductAttribute {
        int Id PK
        int ProductId FK
        string Name
        string PossibleValues
        bool IsVariantAttribute
        int DisplayOrder
    }

    VariantValue {
        int Id PK
        int ProductVariantId FK
        int AttributeId FK
        string Value
    }

    Category {
        int Id PK
        string Name
        string Description
        string Image
    }

    Brand {
        int Id PK
        string Name
        string Description
        string LogoUrl
        string Website
        string Country
    }

    Review {
        int Id PK
        int ProductId FK
        string UserId
        string UserName
        string Title
        string Content
        int Rating
        string ImageUrls
        DateTime CreatedAt
        DateTime UpdatedAt
        bool IsVerifiedPurchase
        int LikesCount
    }

    ReviewComment {
        int Id PK
        int ReviewId FK
        string UserId
        string UserName
        string Content
        DateTime CreatedAt
        DateTime UpdatedAt
        bool IsSellerComment
    }

    Promotion {
        int Id PK
        string Name
        string Description
        string DiscountType
        decimal DiscountValue
        DateTime StartDate
        DateTime EndDate
        string PromoCode
        bool IsActive
        int MaxUsageCount
        int UsageCount
        bool ApplyToAllProducts
        DateTime CreatedAt
        DateTime UpdatedAt
    }

    ProductPromotion {
        int ProductId PK, FK
        int PromotionId PK, FK
        DateTime AppliedDate
    }
```

## Các Chức Năng Chính

1. **Quản lý sản phẩm**

   - Tạo, đọc, cập nhật, xóa sản phẩm
   - Quản lý biến thể sản phẩm (kích cỡ, màu sắc, etc.)
   - Quản lý thuộc tính sản phẩm

2. **Quản lý danh mục và thương hiệu**

   - Tạo, đọc, cập nhật, xóa danh mục
   - Tạo, đọc, cập nhật, xóa thương hiệu

3. **Quản lý đánh giá và phản hồi**

   - Tạo, đọc, cập nhật, xóa đánh giá
   - Quản lý phản hồi cho đánh giá

4. **Quản lý khuyến mãi**
   - Tạo, đọc, cập nhật, xóa khuyến mãi
   - Áp dụng khuyến mãi cho sản phẩm

## Công Nghệ Sử Dụng

- **Framework**: ASP.NET Core
- **ORM**: Entity Framework Core
- **Database**: SQL Server
- **Messaging**: RabbitMQ/Azure Service Bus (cho giao tiếp giữa các microservice)
- **API Documentation**: Swagger/OpenAPI

## Cấu Trúc Thư Mục

```
Product.API/
├── Domain/                # Domain layer - business entities
│   ├── Entities/          # Domain entities
│   └── Events/            # Domain events
├── Application/           # Application layer - use cases
│   ├── Commands/          # Commands (write operations)
│   ├── Queries/           # Queries (read operations)
│   └── DTOs/              # Data Transfer Objects
├── Infrastructure/        # Infrastructure layer
│   ├── Data/              # Database access
│   ├── Repositories/      # Repository implementations
│   └── Services/          # External services implementations
├── API/                   # API layer
│   ├── Controllers/       # API Controllers
│   └── Filters/           # API Filters
└── Extensions/            # Extension methods
```

## Deployment

Microservice này được thiết kế để triển khai trong container Docker và có thể được quản lý bằng Kubernetes. Các cấu hình môi trường được cung cấp qua file appsettings.json và biến môi trường.

## Hướng Phát Triển

1. Cải thiện hiệu suất truy vấn với Redis cache
2. Thêm tính năng tìm kiếm sản phẩm nâng cao với Elasticsearch
3. Tích hợp xử lý hàng loạt với background workers
4. Thêm tính năng thông báo thay đổi giá/tồn kho trong thời gian thực
