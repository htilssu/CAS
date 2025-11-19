using Projects;

var builder = DistributedApplication.CreateBuilder(args);
var launchProfile = GetRunProfile();

var postgresBuilder = builder.AddPostgres("postgres")
    .WithImage("ankane/pgvector")
    .WithImageTag("latest")
    .WithLifetime(ContainerLifetime.Persistent);

var catalogDb = postgresBuilder.AddDatabase("productdb");
var identityDb = postgresBuilder.AddDatabase("identitydb");
var notifyDb = postgresBuilder.AddDatabase("notifydb");

var redis = builder.AddRedis("redis");
var kafka = builder.AddKafka("kafka").WithKafkaUI();


var identity = builder.AddProject<Identity_API>("identity", launchProfile)
    .WithReference(identityDb).WithEndpoint().WithExternalHttpEndpoints();

var identityEndpoint = identity.GetEndpoint(launchProfile);


var notify = builder.AddProject<Notify_API>("notify")
    .WithReference(notifyDb)
    .WithReference(kafka);


var catalog = builder.AddProject<Catalog_API>("product")
    .WithReference(redis)
    .WithReference(catalogDb);

builder.AddNpmApp("storefront", "../store_front", "dev")
    .WithEndpoint(targetPort: 3000, name: "storefront")
    .WithExternalHttpEndpoints()
    .WithHttpEndpoint(env: "PORT");

builder.Build().Run();
return;

static string GetRunProfile()
{
    var environmentVariable = Environment.GetEnvironmentVariable("DOTNET_LAUNCH_PROFILE");
    if (string.IsNullOrEmpty(environmentVariable))
    {
        return "http";
    }
    return environmentVariable;
}