using GiftosEntity;
using Microsoft.EntityFrameworkCore;

namespace GiftosData
{
    public class GiftosDbContext : DbContext
    {
        public GiftosDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<ContactUs> ContactUs { get; set; }
        public DbSet<Subscriptions > Footers { get; set; }
        public DbSet<Cart > Carts { get; set; }
        public DbSet<Category > Cartegories { get; set; }
    }
}
