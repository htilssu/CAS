namespace Product.API.Domain.Entities;

/// <summary>
/// Liên kết giữa sản phẩm và khuyến mãi
/// </summary>
public class ProductPromotion
{
    /// <summary>
    /// ID của sản phẩm
    /// </summary>
    public int ProductId { get; private set; }
    
    /// <summary>
    /// ID của khuyến mãi
    /// </summary>
    public int PromotionId { get; private set; }
    
    /// <summary>
    /// Ngày áp dụng khuyến mãi cho sản phẩm
    /// </summary>
    public DateTime AppliedDate { get; private set; }
    
    /// <summary>
    /// Sản phẩm được áp dụng khuyến mãi
    /// </summary>
    public Product Product { get; private set; } = null!;
    
    /// <summary>
    /// Khuyến mãi được áp dụng
    /// </summary>
    public Promotion Promotion { get; private set; } = null!;
    
    public ProductPromotion() { }
    
    public ProductPromotion(int productId, int promotionId)
    {
        ProductId = productId;
        PromotionId = promotionId;
        AppliedDate = DateTime.UtcNow;
    }
} 