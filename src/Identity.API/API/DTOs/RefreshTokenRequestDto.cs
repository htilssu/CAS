using System.ComponentModel.DataAnnotations;

namespace Identity.API.API.DTOs;

public class RefreshTokenRequestDto
{
    [Required]
    public string Token { get; set; } = default!;
    
    [Required]
    public string RefreshToken { get; set; } = default!;
}