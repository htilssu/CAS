using System.ComponentModel.DataAnnotations;

namespace Product.API.Domain.Entities;

/// <summary>
/// Khuyến mãi áp dụng cho sản phẩm
/// </summary>
public class Promotion
{
    /// <summary>
    /// ID của khuyến mãi
    /// </summary>
    public int Id { get; private set; }
    
    /// <summary>
    /// Tên khuyến mãi
    /// </summary>
    [Required]
    [MaxLength(200)]
    public string Name { get; private set; } = null!;
    
    /// <summary>
    /// Mô tả khuyến mãi
    /// </summary>
    [MaxLength(1000)]
    public string? Description { get; private set; }
    
    /// <summary>
    /// Loại khuyến mãi (phần trăm hoặc số tiền cố định)
    /// </summary>
    [Required]
    [MaxLength(20)]
    public string DiscountType { get; private set; } = null!; // Percentage, FixedAmount
    
    /// <summary>
    /// Giá trị khuyến mãi
    /// </summary>
    [Range(0, double.MaxValue)]
    public decimal DiscountValue { get; private set; }
    
    /// <summary>
    /// Ngày bắt đầu khuyến mãi
    /// </summary>
    public DateTime StartDate { get; private set; }
    
    /// <summary>
    /// Ngày kết thúc khuyến mãi
    /// </summary>
    public DateTime? EndDate { get; private set; }
    
    /// <summary>
    /// Mã khuyến mãi (nếu có)
    /// </summary>
    [MaxLength(50)]
    public string? PromoCode { get; private set; }
    
    /// <summary>
    /// Khuyến mãi có đang hoạt động không
    /// </summary>
    public bool IsActive { get; private set; }
    
    /// <summary>
    /// Số lượng tối đa có thể sử dụng
    /// </summary>
    public int? MaxUsageCount { get; private set; }
    
    /// <summary>
    /// Số lượng đã sử dụng
    /// </summary>
    public int UsageCount { get; private set; }
    
    /// <summary>
    /// Áp dụng cho tất cả sản phẩm
    /// </summary>
    public bool ApplyToAllProducts { get; private set; }
    
    /// <summary>
    /// Ngày tạo khuyến mãi
    /// </summary>
    public DateTime CreatedAt { get; private set; }
    
    /// <summary>
    /// Ngày cập nhật khuyến mãi
    /// </summary>
    public DateTime? UpdatedAt { get; private set; }
    
    /// <summary>
    /// Danh sách các sản phẩm được áp dụng khuyến mãi
    /// </summary>
    public List<ProductPromotion> ProductPromotions { get; private set; } = new();
    
    // For EF Core
    protected Promotion() { }
    
    public Promotion(string name, string discountType, decimal discountValue, 
                    DateTime startDate, DateTime? endDate = null, string? description = null,
                    string? promoCode = null, bool isActive = true, int? maxUsageCount = null,
                    bool applyToAllProducts = false)
    {
        Name = name;
        DiscountType = discountType;
        DiscountValue = discountValue;
        StartDate = startDate;
        EndDate = endDate;
        Description = description;
        PromoCode = promoCode;
        IsActive = isActive;
        MaxUsageCount = maxUsageCount;
        ApplyToAllProducts = applyToAllProducts;
        UsageCount = 0;
        CreatedAt = DateTime.UtcNow;
    }
    
    public void Update(string name, string discountType, decimal discountValue, 
                    DateTime startDate, DateTime? endDate = null, string? description = null,
                    string? promoCode = null, bool isActive = true, int? maxUsageCount = null,
                    bool applyToAllProducts = false)
    {
        Name = name;
        DiscountType = discountType;
        DiscountValue = discountValue;
        StartDate = startDate;
        EndDate = endDate;
        Description = description;
        PromoCode = promoCode;
        IsActive = isActive;
        MaxUsageCount = maxUsageCount;
        ApplyToAllProducts = applyToAllProducts;
        UpdatedAt = DateTime.UtcNow;
    }
    
    public void IncrementUsageCount()
    {
        UsageCount++;
        if (MaxUsageCount.HasValue && UsageCount >= MaxUsageCount.Value)
        {
            IsActive = false;
        }
    }
    
    public void ToggleStatus()
    {
        IsActive = !IsActive;
        UpdatedAt = DateTime.UtcNow;
    }
    
    public bool IsValidNow()
    {
        var now = DateTime.UtcNow;
        
        if (!IsActive)
            return false;
            
        if (now < StartDate)
            return false;
            
        if (EndDate.HasValue && now > EndDate.Value)
            return false;
            
        if (MaxUsageCount.HasValue && UsageCount >= MaxUsageCount.Value)
            return false;
            
        return true;
    }
} 