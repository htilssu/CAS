using System.ComponentModel.DataAnnotations;

namespace Product.API.Domain.Entities;

/// <summary>
/// Thuộc tính sản phẩm (như màu sắc, kích thước, v.v.)
/// </summary>
public class ProductAttribute
{
    /// <summary>
    /// ID của thuộc tính
    /// </summary>
    public int Id { get; private set; }
    
    /// <summary>
    /// ID của sản phẩm
    /// </summary>
    public int ProductId { get; private set; }
    
    /// <summary>
    /// Tên thuộc tính (ví dụ: "Màu sắc", "Kích thước")
    /// </summary>
    [Required]
    [MaxLength(100)]
    public string Name { get; private set; } = null!;
    
    /// <summary>
    /// Danh sách các giá trị có thể của thuộc tính (ví dụ: ["Đỏ", "Xanh", "Vàng"])
    /// </summary>
    [MaxLength(500)]
    public string? PossibleValues { get; private set; }
    
    /// <summary>
    /// Thuộc tính này có được sử dụng để tạo biến thể hay không
    /// </summary>
    public bool IsVariantAttribute { get; private set; }
    
    /// <summary>
    /// Thứ tự hiển thị của thuộc tính
    /// </summary>
    public int DisplayOrder { get; private set; }
    
    /// <summary>
    /// Sản phẩm
    /// </summary>
    public Product Product { get; private set; } = null!;
    
    /// <summary>
    /// Danh sách các giá trị thuộc tính của biến thể
    /// </summary>
    public List<VariantValue> VariantValues { get; private set; } = new();
    
    // For EF Core
    protected ProductAttribute() { }
    
    public ProductAttribute(int productId, string name, string? possibleValues = null, bool isVariantAttribute = false, int displayOrder = 0)
    {
        ProductId = productId;
        Name = name;
        PossibleValues = possibleValues;
        IsVariantAttribute = isVariantAttribute;
        DisplayOrder = displayOrder;
    }
    
    public void Update(string name, string? possibleValues = null, bool isVariantAttribute = false, int displayOrder = 0)
    {
        Name = name;
        PossibleValues = possibleValues;
        IsVariantAttribute = isVariantAttribute;
        DisplayOrder = displayOrder;
    }
    
    public List<string> GetPossibleValuesList()
    {
        if (string.IsNullOrEmpty(PossibleValues))
            return new List<string>();
            
        return PossibleValues.Split(',').Select(v => v.Trim()).ToList();
    }
    
    public void SetPossibleValues(List<string> values)
    {
        if (values == null || !values.Any())
        {
            PossibleValues = null;
            return;
        }
        
        PossibleValues = string.Join(",", values);
    }
} 