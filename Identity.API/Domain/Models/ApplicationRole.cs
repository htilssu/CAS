using Microsoft.AspNetCore.Identity;

namespace Identity.API.Domain.Models;

public class ApplicationRole : IdentityRole
{
    public string? Description { get; set; }
    public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
}