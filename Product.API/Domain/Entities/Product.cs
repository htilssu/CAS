namespace Product.API.Domain.Entities;

public class Product
{
    public int Id { get; private set; }
    public string Name { get; private set; } = null!;
    public string Description { get; private set; } = null!;
    public decimal Price { get; private set; }
    public string Category { get; private set; } = null!;

    // For EF Core
    private Product() { }

    public Product(string name, string description, decimal price, int stock, string category)
    {
        Name = name;
        Description = description;
        Price = price;
        Category = category;
    }


    public void UpdateDetails(string name, string description, decimal price, string category)
    {
        Name = name;
        Description = description;
        Price = price;
        Category = category;
    }
}