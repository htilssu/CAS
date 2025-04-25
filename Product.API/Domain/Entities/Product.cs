using System.ComponentModel.DataAnnotations;
using Core;

namespace Product.API.Domain.Entities;

public class Product : BaseEntity
{
    public int Id { get; private set; }

    [Required]
    [MaxLength(200)]
    public string Name { get; private set; } = null!;

    [MaxLength(2000)]
    public string Description { get; private set; } = null!;

    [Required]
    [Range(0, double.MaxValue)]
    public decimal Price { get; private set; }

    public decimal OriginalPrice { get; private set; }

    public decimal DiscountPercentage { get; private set; }

    [Required]
    public int CategoryId { get; private set; }

    public Category Category { get; private set; } = null!;

    [Required]
    public int BrandId { get; private set; }

    public Brand Brand { get; private set; } = null!;

    [Required]
    public int Stock { get; private set; }

    public bool IsAvailable { get; private set; } = true;

    [MaxLength(500)]
    public string? SpecificationSummary { get; private set; }

    public double Rating { get; private set; }

    public int SoldCount { get; private set; }

    public int ViewCount { get; private set; }

    public List<ProductImage> Images { get; private set; } = new();

    public List<ProductVariant> Variants { get; private set; } = new();

    public List<ProductAttribute> Attributes { get; private set; } = new();

    public List<ProductPromotion> ProductPromotions { get; private set; } = new();

    // For EF Core
    protected Product() {}

    public Product(string name,
        string description,
        decimal price,
        decimal originalPrice,
        int categoryId,
        int brandId,
        int stock,
        string? specificationSummary = null)
    {
        Name = name;
        Description = description;
        Price = price;
        OriginalPrice = originalPrice;
        CategoryId = categoryId;
        BrandId = brandId;
        Stock = stock;
        SpecificationSummary = specificationSummary;
        DiscountPercentage = originalPrice > 0 ? Math.Round((1 - price / originalPrice) * 100, 2) : 0;
        Rating = 0;
        SoldCount = 0;
        ViewCount = 0;
    }

    public void UpdateDetails(string name,
        string description,
        decimal price,
        decimal originalPrice,
        Category category,
        Brand brand,
        int stock,
        string? specificationSummary = null)
    {
        Name = name;
        Description = description;
        Price = price;
        OriginalPrice = originalPrice;
        Category = category;
        CategoryId = category.Id;
        Brand = brand;
        BrandId = brand.Id;
        Stock = stock;
        SpecificationSummary = specificationSummary;
        DiscountPercentage = originalPrice > 0 ? Math.Round((1 - price / originalPrice) * 100, 2) : 0;
    }

    public void AddImage(string url, bool isMain = false)
    {
        var image = new ProductImage(this.Id, url, isMain);
        Images.Add(image);
    }

    public void UpdateStock(int quantity)
    {
        Stock = quantity;
        IsAvailable = Stock > 0;
    }

    public void IncrementViewCount()
    {
        ViewCount++;
    }

    public void IncrementSoldCount(int quantity)
    {
        SoldCount += quantity;
        Stock -= quantity;
        IsAvailable = Stock > 0;
    }

    public void UpdateRating(double newRating)
    {
        Rating = newRating;
    }

    public void AddPromotion(int promotionId)
    {
        var productPromotion = new ProductPromotion(this.Id, promotionId);
        ProductPromotions.Add(productPromotion);
    }

    public void RemovePromotion(int promotionId)
    {
        var productPromotion = ProductPromotions.FirstOrDefault(pp => pp.PromotionId == promotionId);
        if (productPromotion != null)
        {
            ProductPromotions.Remove(productPromotion);
        }
    }
}
