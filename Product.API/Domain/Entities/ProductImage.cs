using System.ComponentModel.DataAnnotations;

namespace Product.API.Domain.Entities;

/// <summary>
/// Lưu trữ thông tin hình ảnh của sản phẩm
/// </summary>
public class ProductImage
{
    /// <summary>
    /// ID của hình ảnh
    /// </summary>
    public int Id { get; private set; }
    
    /// <summary>
    /// ID của sản phẩm
    /// </summary>
    public int ProductId { get; private set; }
    
    /// <summary>
    /// URL của hình ảnh
    /// </summary>
    [Required]
    [MaxLength(500)]
    public string Url { get; private set; } = null!;
    
    /// <summary>
    /// Xác định đây có phải là hình ảnh chính của sản phẩm không
    /// </summary>
    public bool IsPrimary { get; private set; }
    
    /// <summary>
    /// Thứ tự hiển thị của hình ảnh
    /// </summary>
    public int DisplayOrder { get; private set; }
    
    /// <summary>
    /// Ngày tạo hình ảnh
    /// </summary>
    public DateTime CreatedAt { get; private set; }
    
    /// <summary>
    /// Thông tin sản phẩm
    /// </summary>
    public Product Product { get; private set; } = null!;
    
    // For EF Core
    protected ProductImage() { }
    
    public ProductImage(int productId, string url, bool isPrimary = false, int displayOrder = 0)
    {
        ProductId = productId;
        Url = url;
        IsPrimary = isPrimary;
        DisplayOrder = displayOrder;
        CreatedAt = DateTime.UtcNow;
    }
} 