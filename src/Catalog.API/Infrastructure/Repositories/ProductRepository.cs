using CAS.Product.API.Domain.Entities;
using CAS.Product.API.Domain.Interfaces;
using CAS.Product.API.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Catalog.API.Infrastructure.Repositories;

public class ProductRepository : IProductRepository
{
    private readonly CatalogDbContext _context;

    public ProductRepository(CatalogDbContext context)
    {
        _context = context;
    }

    public async Task<Product?> GetByIdAsync(string id)
    {
        return await _context.Products.FindAsync(id);
    }

    Task<IEnumerable<Product>> IProductRepository.GetAllAsync()
    {
        throw new NotImplementedException();
    }

    public async Task AddAsync(Product product)
    {
        _context.Products.Add(product);
        await _context.SaveChangesAsync();
    }

    public Task UpdateAsync(Product product)
    {
        throw new NotImplementedException();
    }

    Task<Product?> IProductRepository.GetByIdAsync(string id)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<CAS.Product.API.Domain.Entities.Product>> GetAllAsync()
    {
        return await _context.Products.ToListAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product != null)
        {
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
        }
    }
}