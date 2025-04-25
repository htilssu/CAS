using Projects;

var builder = DistributedApplication.CreateBuilder(args);

var postgresBuilder = builder.AddPostgres("postgres")
    .WithImage("ankane/pgvector")
    .WithImageTag("latest")
    .WithLifetime(ContainerLifetime.Persistent);

var catalogDb = postgresBuilder.AddDatabase("catalogdb");
var identityDb = postgresBuilder.AddDatabase("identitydb");

var redis = builder.AddRedis("redis");
var rabbitMq = builder.AddRabbitMQ("eventbus")
    .WithLifetime(ContainerLifetime.Persistent);

var catalog = builder.AddProject<Catalog_API>("catalog")
    .WithReference(redis)
    .WithReference(catalogDb);

var identity = builder.AddProject<Identity_API>("identity")
    .WithReference(identityDb);

// Thêm StoreFront NextJS
builder.AddNpmApp("storefront", "../store_front")
    .WithEndpoint(targetPort: 3000, name: "storefront")
    .WithReference(catalog);

builder.Build().Run();
