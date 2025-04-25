using Microsoft.AspNetCore.Mvc;

namespace Product.API.API.Controllers;

public class ProductController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}
