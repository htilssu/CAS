using Microsoft.EntityFrameworkCore;
using Product.API.Domain.Entities;

namespace Product.API.Infrastructure.Data;

/// <summary>
/// Lớp quản lý kết nối và thao tác với cơ sở dữ liệu
/// </summary>
public class ProductDbContext : DbContext
{
    /// <summary>
    /// Constructor với options từ DI
    /// </summary>
    /// <param name="options">Tùy chọn cấu hình DbContext</param>
    public ProductDbContext(DbContextOptions<ProductDbContext> options) : base(options)
    {
    }
    
    /// <summary>
    /// Bảng lưu thông tin sản phẩm
    /// </summary>
    public DbSet<Domain.Entities.Product> Products { get; set; } = null!;
    
    /// <summary>
    /// Bảng lưu thông tin danh mục sản phẩm
    /// </summary>
    public DbSet<Category> Categories { get; set; } = null!;
    
    /// <summary>
    /// Bảng lưu thông tin thương hiệu
    /// </summary>
    public DbSet<Brand> Brands { get; set; } = null!;
    
    /// <summary>
    /// Bảng lưu thông tin hình ảnh sản phẩm
    /// </summary>
    public DbSet<ProductImage> ProductImages { get; set; } = null!;
    
    /// <summary>
    /// Bảng lưu thông tin biến thể sản phẩm
    /// </summary>
    public DbSet<ProductVariant> ProductVariants { get; set; } = null!;
    
    /// <summary>
    /// Bảng lưu thông tin thuộc tính sản phẩm
    /// </summary>
    public DbSet<ProductAttribute> ProductAttributes { get; set; } = null!;
    
    /// <summary>
    /// Bảng lưu thông tin giá trị thuộc tính biến thể
    /// </summary>
    public DbSet<VariantValue> VariantValues { get; set; } = null!;
    
    /// <summary>
    /// Bảng lưu thông tin đánh giá sản phẩm
    /// </summary>
    public DbSet<Review> Reviews { get; set; } = null!;
    
    /// <summary>
    /// Bảng lưu thông tin phản hồi đánh giá
    /// </summary>
    public DbSet<ReviewComment> ReviewComments { get; set; } = null!;
    
    /// <summary>
    /// Bảng lưu thông tin khuyến mãi
    /// </summary>
    public DbSet<Promotion> Promotions { get; set; } = null!;
    
    /// <summary>
    /// Bảng liên kết giữa sản phẩm và khuyến mãi
    /// </summary>
    public DbSet<ProductPromotion> ProductPromotions { get; set; } = null!;
    
    /// <summary>
    /// Cấu hình các bảng và mối quan hệ
    /// </summary>
    /// <param name="modelBuilder">Model builder từ EF Core</param>
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // Cấu hình quan hệ nhiều-nhiều giữa Product và Promotion
        modelBuilder.Entity<ProductPromotion>()
            .HasKey(pp => new { pp.ProductId, pp.PromotionId });
        
        modelBuilder.Entity<ProductPromotion>()
            .HasOne(pp => pp.Product)
            .WithMany(p => p.ProductPromotions)
            .HasForeignKey(pp => pp.ProductId);
        
        modelBuilder.Entity<ProductPromotion>()
            .HasOne(pp => pp.Promotion)
            .WithMany(p => p.ProductPromotions)
            .HasForeignKey(pp => pp.PromotionId);
            
        // Cấu hình hình ảnh sản phẩm
        modelBuilder.Entity<ProductImage>()
            .HasOne(pi => pi.Product)
            .WithMany(p => p.Images)
            .HasForeignKey(pi => pi.ProductId);
            
        // Cấu hình biến thể sản phẩm
        modelBuilder.Entity<ProductVariant>()
            .HasOne(pv => pv.Product)
            .WithMany(p => p.Variants)
            .HasForeignKey(pv => pv.ProductId);
            
        // Cấu hình thuộc tính sản phẩm
        modelBuilder.Entity<ProductAttribute>()
            .HasOne(pa => pa.Product)
            .WithMany(p => p.Attributes)
            .HasForeignKey(pa => pa.ProductId);
            
        // Cấu hình giá trị thuộc tính biến thể
        modelBuilder.Entity<VariantValue>()
            .HasOne(vv => vv.ProductVariant)
            .WithMany(pv => pv.VariantValues)
            .HasForeignKey(vv => vv.ProductVariantId);
            
        modelBuilder.Entity<VariantValue>()
            .HasOne(vv => vv.Attribute)
            .WithMany(pa => pa.VariantValues)
            .HasForeignKey(vv => vv.AttributeId);
            
        // Cấu hình đánh giá sản phẩm
        modelBuilder.Entity<Review>()
            .HasOne(r => r.Product)
            .WithMany()
            .HasForeignKey(r => r.ProductId);
            
        // Cấu hình phản hồi đánh giá
        modelBuilder.Entity<ReviewComment>()
            .HasOne(rc => rc.Review)
            .WithMany(r => r.Comments)
            .HasForeignKey(rc => rc.ReviewId);
            
        // Cấu hình sản phẩm
        modelBuilder.Entity<Domain.Entities.Product>()
            .HasOne(p => p.Category)
            .WithMany(c => c.Products)
            .HasForeignKey(p => p.CategoryId);
            
        modelBuilder.Entity<Domain.Entities.Product>()
            .HasOne(p => p.Brand)
            .WithMany(b => b.Products)
            .HasForeignKey(p => p.BrandId);
    }
} 