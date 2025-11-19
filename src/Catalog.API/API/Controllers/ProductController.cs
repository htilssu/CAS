using CAS.Product.API.Domain.Interfaces;
using Core.Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace Catalog.API.API.Controllers;

public class ProductController : ApiControllerBase
{
    private readonly IProductRepository _productRepository;

    public ProductController(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetProduct(string id)
    {
        var product = await _productRepository.GetByIdAsync(id);
        if (product == null)
        {
            return NotFound();
        }
        return Ok(product);
    }

    [HttpGet]
    public async Task<IActionResult> GetAllProducts()
    {
        var products = await _productRepository.GetAllAsync();
        return Ok(products);
    }

    [HttpPost]
    public async Task<IActionResult> CreateProduct([FromBody] CAS.Product.API.Domain.Entities.Product product)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        await _productRepository.AddAsync(product);
        return CreatedAtAction(nameof(GetProduct), new
        {
            id = product.Id
        }, product);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProduct(int id,
        [FromBody] CAS.Product.API.Domain.Entities.Product product)
    {
        if (id != product.Id || !ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        await _productRepository.UpdateAsync(product);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        await _productRepository.DeleteAsync(id);
        return NoContent();
    }
}