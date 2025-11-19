using CAS.Product.API.Domain.Entities;
using CAS.Product.API.Domain.Interfaces;
using Catalog.API.Application.Commands;
using Core.Application.Exceptions;
using MediatR;

namespace Catalog.API.Application.Handlers;

public class GetProductByIdHandler : IRequestHandler<GetProductByIdCommand, Product>
{
    private IProductRepository _repository;

    public GetProductByIdHandler(IProductRepository repository)
    {
        _repository = repository;
    }

    public async Task<Product> Handle(GetProductByIdCommand request, CancellationToken cancellationToken)
    {
        Product? product = await _repository.GetByIdAsync(request.Id);
        return product ?? throw new NotFoundException("Product not found", nameof(Product), request.Id);
    }
}