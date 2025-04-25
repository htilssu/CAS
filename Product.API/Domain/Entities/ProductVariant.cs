using System.ComponentModel.DataAnnotations;

namespace Product.API.Domain.Entities;

/// <summary>
/// Biến thể của sản phẩm (như kích cỡ, màu sắc, v.v.)
/// </summary>
public class ProductVariant
{
    /// <summary>
    /// ID của biến thể sản phẩm
    /// </summary>
    public int Id { get; private set; }
    
    /// <summary>
    /// ID của sản phẩm
    /// </summary>
    public int ProductId { get; private set; }
    
    /// <summary>
    /// Tên biến thể (ví dụ: "XL - Đỏ")
    /// </summary>
    [Required]
    [MaxLength(200)]
    public string Name { get; private set; } = null!;
    
    /// <summary>
    /// SKU (mã quản lý hàng hóa) của biến thể
    /// </summary>
    [MaxLength(50)]
    public string? SKU { get; private set; }
    
    /// <summary>
    /// Giá của biến thể
    /// </summary>
    [Required]
    [Range(0, double.MaxValue)]
    public decimal Price { get; private set; }
    
    /// <summary>
    /// Số lượng trong kho của biến thể
    /// </summary>
    public int Stock { get; private set; }
    
    /// <summary>
    /// Trạng thái có sẵn của biến thể
    /// </summary>
    public bool IsAvailable { get; private set; } = true;
    
    /// <summary>
    /// URL hình ảnh đại diện cho biến thể
    /// </summary>
    [MaxLength(500)]
    public string? ImageUrl { get; private set; }
    
    /// <summary>
    /// Ngày tạo biến thể
    /// </summary>
    public DateTime CreatedAt { get; private set; }
    
    /// <summary>
    /// Ngày cập nhật biến thể
    /// </summary>
    public DateTime? UpdatedAt { get; private set; }
    
    /// <summary>
    /// Thông tin sản phẩm
    /// </summary>
    public Product Product { get; private set; } = null!;
    
    /// <summary>
    /// Danh sách các thuộc tính của biến thể
    /// </summary>
    public List<VariantValue> VariantValues { get; private set; } = new();
    
    public ProductVariant() { }
    
    public ProductVariant(int productId, string name, decimal price, int stock, string? sku = null, string? imageUrl = null)
    {
        ProductId = productId;
        Name = name;
        Price = price;
        Stock = stock;
        SKU = sku;
        ImageUrl = imageUrl;
        IsAvailable = stock > 0;
        CreatedAt = DateTime.UtcNow;
    }
    
    public void Update(string name, decimal price, int stock, string? sku = null, string? imageUrl = null)
    {
        Name = name;
        Price = price;
        UpdateStock(stock);
        SKU = sku;
        ImageUrl = imageUrl;
        UpdatedAt = DateTime.UtcNow;
    }
    
    public void UpdateStock(int quantity)
    {
        Stock = quantity;
        IsAvailable = Stock > 0;
        UpdatedAt = DateTime.UtcNow;
    }
    
    public void DecrementStock(int quantity)
    {
        if (quantity <= 0) return;
        
        if (quantity > Stock)
            quantity = Stock;
            
        Stock -= quantity;
        IsAvailable = Stock > 0;
        UpdatedAt = DateTime.UtcNow;
    }
} 