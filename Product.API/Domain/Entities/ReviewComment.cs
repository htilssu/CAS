using System.ComponentModel.DataAnnotations;

namespace Product.API.Domain.Entities;

/// <summary>
/// Phản hồi cho đánh giá sản phẩm
/// </summary>
public class ReviewComment
{
    /// <summary>
    /// ID của phản hồi
    /// </summary>
    public int Id { get; private set; }
    
    /// <summary>
    /// ID của đánh giá
    /// </summary>
    public int ReviewId { get; private set; }
    
    /// <summary>
    /// ID của người dùng viết phản hồi
    /// </summary>
    public string UserId { get; private set; } = null!;
    
    /// <summary>
    /// Tên người dùng viết phản hồi
    /// </summary>
    [MaxLength(100)]
    public string UserName { get; private set; } = null!;
    
    /// <summary>
    /// Nội dung phản hồi
    /// </summary>
    [Required]
    [MaxLength(1000)]
    public string Content { get; private set; } = null!;
    
    /// <summary>
    /// Ngày tạo phản hồi
    /// </summary>
    public DateTime CreatedAt { get; private set; }
    
    /// <summary>
    /// Ngày cập nhật phản hồi
    /// </summary>
    public DateTime? UpdatedAt { get; private set; }
    
    /// <summary>
    /// Có phải là phản hồi của người bán hay không
    /// </summary>
    public bool IsSellerComment { get; private set; }
    
    /// <summary>
    /// Đánh giá mà phản hồi thuộc về
    /// </summary>
    public Review Review { get; private set; } = null!;
    
    // For EF Core
    protected ReviewComment() { }
    
    public ReviewComment(int reviewId, string userId, string userName, string content, bool isSellerComment = false)
    {
        ReviewId = reviewId;
        UserId = userId;
        UserName = userName;
        Content = content;
        IsSellerComment = isSellerComment;
        CreatedAt = DateTime.UtcNow;
    }
    
    public void UpdateContent(string content)
    {
        Content = content;
        UpdatedAt = DateTime.UtcNow;
    }
} 