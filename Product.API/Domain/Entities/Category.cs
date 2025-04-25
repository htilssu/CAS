using System.ComponentModel.DataAnnotations;

namespace Product.API.Domain.Entities;

public class Category
{
    public Category(int id, string name, string description, string image)
    {
        Id = id;
        Name = name;
        Description = description;
        Image = image;
    }

    public Category() {}

    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = null!;

    [Required] [MaxLength(1000)]
    public string Description { get; set; } = null!;

    [Required]
    public string Image { get; set; } = null!;

    public List<Product> Products { get; set; } = new();
}
