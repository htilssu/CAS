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

builder.Build().Run();
