using System.ComponentModel.DataAnnotations;

namespace Product.API.Domain.Entities;

/// <summary>
/// Giá trị thuộc tính của biến thể sản phẩm
/// </summary>
public class VariantValue
{
    /// <summary>
    /// ID của giá trị thuộc tính
    /// </summary>
    public int Id { get; private set; }
    
    /// <summary>
    /// ID của biến thể sản phẩm
    /// </summary>
    public int ProductVariantId { get; private set; }
    
    /// <summary>
    /// ID của thuộc tính
    /// </summary>
    public int AttributeId { get; private set; }
    
    /// <summary>
    /// Giá trị của thuộc tính (ví dụ: "Đỏ" cho thuộc tính "Màu sắc")
    /// </summary>
    [Required]
    [MaxLength(100)]
    public string Value { get; private set; } = null!;
    
    /// <summary>
    /// Biến thể sản phẩm
    /// </summary>
    public ProductVariant ProductVariant { get; private set; } = null!;
    
    /// <summary>
    /// Thuộc tính
    /// </summary>
    public ProductAttribute Attribute { get; private set; } = null!;
    
    // For EF Core
    protected VariantValue() { }
    
    public VariantValue(int productVariantId, int attributeId, string value)
    {
        ProductVariantId = productVariantId;
        AttributeId = attributeId;
        Value = value;
    }
    
    public void UpdateValue(string value)
    {
        Value = value;
    }
} 