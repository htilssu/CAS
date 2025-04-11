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

builder.Build().Run();
