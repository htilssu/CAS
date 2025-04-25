using System.ComponentModel.DataAnnotations;

namespace Product.API.Domain.Entities;

/// <summary>
/// Đánh giá sản phẩm của người dùng
/// </summary>
public class Review
{
    /// <summary>
    /// ID của đánh giá
    /// </summary>
    public int Id { get; private set; }
    
    /// <summary>
    /// ID của sản phẩm được đánh giá
    /// </summary>
    public int ProductId { get; private set; }
    
    /// <summary>
    /// ID của người dùng đánh giá
    /// </summary>
    public string UserId { get; private set; } = null!;
    
    /// <summary>
    /// Tên người dùng đánh giá
    /// </summary>
    [MaxLength(100)]
    public string UserName { get; private set; } = null!;
    
    /// <summary>
    /// Tiêu đề đánh giá
    /// </summary>
    [MaxLength(200)]
    public string? Title { get; private set; }
    
    /// <summary>
    /// Nội dung đánh giá
    /// </summary>
    [MaxLength(2000)]
    public string? Content { get; private set; }
    
    /// <summary>
    /// Số sao đánh giá (1-5)
    /// </summary>
    [Range(1, 5)]
    public int Rating { get; private set; }
    
    /// <summary>
    /// Danh sách URL hình ảnh đính kèm với đánh giá
    /// </summary>
    [MaxLength(1000)]
    public string? ImageUrls { get; private set; }
    
    /// <summary>
    /// Ngày tạo đánh giá
    /// </summary>
    public DateTime CreatedAt { get; private set; }
    
    /// <summary>
    /// Ngày cập nhật đánh giá
    /// </summary>
    public DateTime? UpdatedAt { get; private set; }
    
    /// <summary>
    /// Đã mua sản phẩm hay chưa
    /// </summary>
    public bool IsVerifiedPurchase { get; private set; }
    
    /// <summary>
    /// Số lượt thích cho đánh giá này
    /// </summary>
    public int LikesCount { get; private set; }
    
    /// <summary>
    /// Thông tin sản phẩm được đánh giá
    /// </summary>
    public Product Product { get; private set; } = null!;
    
    /// <summary>
    /// Danh sách phản hồi cho đánh giá này
    /// </summary>
    public List<ReviewComment> Comments { get; private set; } = new();
    
    // For EF Core
    protected Review() { }
    
    public Review(int productId, string userId, string userName, int rating, string? title = null, 
                    string? content = null, string? imageUrls = null, bool isVerifiedPurchase = false)
    {
        ProductId = productId;
        UserId = userId;
        UserName = userName;
        Rating = rating;
        Title = title;
        Content = content;
        ImageUrls = imageUrls;
        IsVerifiedPurchase = isVerifiedPurchase;
        CreatedAt = DateTime.UtcNow;
        LikesCount = 0;
    }
    
    public void Update(int rating, string? title = null, string? content = null, string? imageUrls = null)
    {
        Rating = rating;
        Title = title;
        Content = content;
        ImageUrls = imageUrls;
        UpdatedAt = DateTime.UtcNow;
    }
    
    public void IncrementLikes()
    {
        LikesCount++;
    }
    
    public void DecrementLikes()
    {
        if (LikesCount > 0)
            LikesCount--;
    }
    
    public List<string> GetImageUrlsList()
    {
        if (string.IsNullOrEmpty(ImageUrls))
            return new List<string>();
            
        return ImageUrls.Split(',').Select(url => url.Trim()).ToList();
    }
    
    public void SetImageUrls(List<string> urls)
    {
        if (urls == null || !urls.Any())
        {
            ImageUrls = null;
            return;
        }
        
        ImageUrls = string.Join(",", urls);
    }
} 