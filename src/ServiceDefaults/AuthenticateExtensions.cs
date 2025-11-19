using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;

namespace ServiceDefaults;

public static class AuthenticateExtensions
{
    public static TBuilder AddDefaultAuthentication<TBuilder>(this TBuilder builder)
        where TBuilder : IHostApplicationBuilder
    {
        var identitySection = builder.Configuration.GetRequiredSection("Identity");

        builder.Services.AddAuthentication().AddJwtBearer(options =>
        {
            options.Authority = identitySection.GetValue<string>("Authority");
            options.Audience = builder.Configuration["Api:Audience"];
        });

        return builder;
    }
}