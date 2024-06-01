using GiftosBusiness.Services;
using GiftosBusiness.Services.Interface;
using GiftosData;
using GiftosEntity;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

//Read connection string from appsetting.json file

//add connection string
builder.Services.AddDbContext<GiftosDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionString")));

// Add services to the container.

builder.Services.AddScoped<IProductService, ProductService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors((setup) =>
{
    setup.AddPolicy("default", (options) =>
    {

        options.AllowAnyMethod().AllowAnyOrigin().AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("default");

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
