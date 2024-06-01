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
        public DbSet <Order> Orders { get; set; }

        public DbSet <OrderDetails> OrderDetails { get; set; }
        public DbSet <Product> Products { get; set; }
        public DbSet <Transactions> Transactions { get; set; }
        public DbSet <User> Users { get; set; }

        public DbSet <Wishlist> Wishlist { get; set; }



    } 
}
