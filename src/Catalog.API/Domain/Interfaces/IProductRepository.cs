namespace CAS.Product.API.Domain.Interfaces;

public interface IProductRepository
{
    Task<Entities.Product?> GetByIdAsync(string id);
    Task<IEnumerable<Entities.Product>> GetAllAsync();
    Task AddAsync(Entities.Product product);
    Task UpdateAsync(Entities.Product product);
    Task DeleteAsync(int id);
}