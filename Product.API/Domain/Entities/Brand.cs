using System.ComponentModel.DataAnnotations;

namespace Product.API.Domain.Entities;

/// <summary>
/// Thương hiệu sản phẩm
/// </summary>
public class Brand
{
    /// <summary>
    /// ID của thương hiệu
    /// </summary>
    public int Id { get; private set; }
    
    /// <summary>
    /// Tên thương hiệu
    /// </summary>
    [Required]
    [MaxLength(100)]
    public string Name { get; private set; } = null!;
    
    /// <summary>
    /// Mô tả về thương hiệu
    /// </summary>
    [MaxLength(1000)]
    public string? Description { get; private set; }
    
    /// <summary>
    /// Logo của thương hiệu
    /// </summary>
    [MaxLength(255)]
    public string? LogoUrl { get; private set; }
    
    /// <summary>
    /// Trang web chính thức của thương hiệu
    /// </summary>
    [MaxLength(255)]
    public string? Website { get; private set; }
    
    /// <summary>
    /// Quốc gia xuất xứ của thương hiệu
    /// </summary>
    [MaxLength(100)]
    public string? Country { get; private set; }
    
    /// <summary>
    /// Ngày tạo thương hiệu trong hệ thống
    /// </summary>
    public DateTime CreatedAt { get; private set; }
    
    /// <summary>
    /// Ngày cập nhật thương hiệu trong hệ thống
    /// </summary>
    public DateTime? UpdatedAt { get; private set; }
    
    /// <summary>
    /// Danh sách sản phẩm thuộc thương hiệu
    /// </summary>
    public List<Product> Products { get; private set; } = new();
    
    // For EF Core
    protected Brand() { }
    
    public Brand(string name, string? description = null, string? logoUrl = null, string? website = null, string? country = null, int? foundedYear = null)
    {
        Name = name;
        Description = description;
        LogoUrl = logoUrl;
        Website = website;
        Country = country;
        CreatedAt = DateTime.UtcNow;
    }
    
    public void Update(string name, string? description = null, string? logoUrl = null, string? website = null, string? country = null, int? foundedYear = null)
    {
        Name = name;
        Description = description;
        LogoUrl = logoUrl;
        Website = website;
        Country = country;
        UpdatedAt = DateTime.UtcNow;
    }
} 