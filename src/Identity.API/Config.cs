using Duende.IdentityServer.Models;

namespace Identity.API;

public class Config
{
    public static IEnumerable<ApiScope> ApiScopes =>
    [
        new(name: "api1", displayName: "My API")
    ];
    
    public static IEnumerable<Client> Clients =>
    [
        new()
        {
                ClientId = "client",

                // no interactive user, use the clientid/secret for authentication
                AllowedGrantTypes = GrantTypes.ClientCredentials,

                ClientSecrets =
                {
                    new Secret("secret".Sha256())
                },

                AllowedScopes = { "notifyapi" }
            }
    ];
}