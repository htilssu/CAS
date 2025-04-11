using System.ComponentModel.DataAnnotations;

namespace Identity.API.API.DTOs;

public class RegisterRequestDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = default!;
    
    [Required]
    [StringLength(100, MinimumLength = 6)]
    public string Password { get; set; } = default!;
    
    public string? FirstName { get; set; }
    
    public string? LastName { get; set; }
    
    public string? PhoneNumber { get; set; }
    
    public string? Address { get; set; }
}