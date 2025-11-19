using CAS.Product.API.Domain.Entities;
using MediatR;

namespace Catalog.API.Application.Commands;

public class GetProductByIdCommand : IRequest<Product>
{
    public string Id { get; set; }
}