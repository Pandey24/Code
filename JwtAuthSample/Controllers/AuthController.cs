using JwtAuthSample.Models;
using JwtAuthSample.Services;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthSample.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private static readonly List<UserModel> Users = new()
    {
        new UserModel { Username = "admin", Password = "123", Role = "Admin" },
        new UserModel { Username = "user", Password = "123", Role = "User" }
    };

    private readonly TokenService _tokenService;

    private static readonly Dictionary<string, string> RefreshTokens = new();

    public AuthController(TokenService tokenService)
    {
        _tokenService = tokenService;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] UserModel login)
    {
        var user = Users.FirstOrDefault(u =>
            u.Username == login.Username && u.Password == login.Password);

        if (user == null)
            return Unauthorized("Invalid credentials");

        var (token, refreshToken) = _tokenService.GenerateTokens(user.Username, user.Role);

        RefreshTokens[user.Username] = refreshToken;

        return Ok(new { token, refreshToken });
    }

    [HttpPost("refresh")]
    public IActionResult Refresh([FromBody] dynamic request)
    {
        string username = request.username;
        string refreshToken = request.refreshToken;

        if (RefreshTokens.TryGetValue(username, out var savedToken) && savedToken == refreshToken)
        {
            var user = Users.First(x => x.Username == username);
            var (newToken, newRefresh) = _tokenService.GenerateTokens(user.Username, user.Role);

            RefreshTokens[username] = newRefresh;

            return Ok(new { token = newToken, refreshToken = newRefresh });
        }

        return Unauthorized("Invalid refresh token");
    }
}
