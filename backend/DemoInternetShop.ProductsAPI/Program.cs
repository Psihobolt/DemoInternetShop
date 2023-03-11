using Microsoft.AspNetCore.HttpOverrides;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

//app.UseAuthentication();
app.UseAuthorization();

app.MapGet("api/products", async () =>
{
    using (var client = new HttpClient())
    {
        using (var response =
               await client.GetAsync("https://fakestoreapi.com/products"))
        {
            response.EnsureSuccessStatusCode();
            var res = await response.Content.ReadAsStringAsync();
            return Results.Ok(res);
        }
    }
});

app.Run();