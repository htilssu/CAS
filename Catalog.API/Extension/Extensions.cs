using Catalog.API.Domain.Interfaces;
using Catalog.API.Infrastructure.Data;
using Catalog.API.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Catalog.API.Extension;

public static class Extensions
{
    public static void AddApplicationServices(this IHostApplicationBuilder builder)
    {
       builder.AddDbContext();
    }

    private static void AddDbContext(this IHostApplicationBuilder builder)
    {
        builder.AddNpgsqlDbContext<CatalogDbContext>("catalogdb", configureDbContextOptions: optionsBuilder =>
        {
            
        });
    }
}
