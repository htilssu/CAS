using Microsoft.EntityFrameworkCore;
using Product.API.Domain.Interfaces;
using Product.API.Infrastructure.Data;
using Product.API.Infrastructure.Repositories;

namespace Product.API.Extension;

public static class Extensions
{
    public static void AddApplicationServices(this IHostApplicationBuilder builder)
    {
       builder.AddDbContext();
       builder.Services.AddScoped<IProductRepository, ProductRepository>();
    }

    private static void AddDbContext(this IHostApplicationBuilder builder)
    {
        builder.AddNpgsqlDbContext<CatalogDbContext>("catalogdb", configureDbContextOptions: optionsBuilder =>
        {
            optionsBuilder.EnableSensitiveDataLogging();
            optionsBuilder.EnableDetailedErrors();
            optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            
            // Thêm retry policy để xử lý lỗi kết nối tạm thời
            optionsBuilder.UseNpgsql(o => o.EnableRetryOnFailure(
                maxRetryCount: 5,
                maxRetryDelay: TimeSpan.FromSeconds(30),
                errorCodesToAdd: null));
        });
        
    }
}
