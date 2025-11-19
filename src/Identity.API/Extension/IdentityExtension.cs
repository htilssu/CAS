namespace Identity.API.Extension;

public static class IdentityExtension
{
    public static TBuilder AddIdentityServer<TBuilder>(this TBuilder builder)
        where TBuilder : IHostApplicationBuilder
    {
        builder.Services.AddIdentityServer().AddInMemoryClients(Config.Clients)
            .AddInMemoryApiScopes(Config.ApiScopes);

        return builder;
    }
}