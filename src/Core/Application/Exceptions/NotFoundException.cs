namespace Core.Application.Exceptions;

public class NotFoundException : Exception
{
    public NotFoundException(string? message) : base(message)
    {
    }

    public NotFoundException(string? message, string entity, object key) : base(message)
    {
        Entity = entity;
        Key = key;
    }

    public string? Entity { get; set; }
    public object? Key { get; set; }
}