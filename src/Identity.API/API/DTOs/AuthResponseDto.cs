using System;
using System.Collections.Generic;

namespace Identity.API.API.DTOs;

public class AuthResponseDto
{
    public bool Success { get; set; }
    public string? Token { get; set; }
    public string? RefreshToken { get; set; }
    public DateTime? Expiration { get; set; }
    public List<string>? Errors { get; set; }
}