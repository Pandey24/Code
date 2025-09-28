using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthSample.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    [HttpGet("secure-data")]
    [Authorize(Roles = "Admin")]
    public IActionResult GetSecureData()
    {
        return Ok("This is secret data for Admins only!");
    }

    [HttpGet("public-data")]
    [Authorize]
    public IActionResult GetPublicData()
    {
        return Ok("This is data for any logged-in user.");
    }
}
