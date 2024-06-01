using GiftosBusiness.Services.Interface;
using GiftosEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GiftosBusiness;
using GiftosData;

namespace GiftosBusiness.Services
{
        public class ProductService : IProductService
        {
            private readonly GiftosDbContext _context;

            public ProductService(GiftosDbContext context)
            {
                _context = context;
            }

            public IEnumerable<Product> GetAllProducts()
            {
                return _context.Products.ToList();
            }

            public Product GetProductById(int id)
            {
                return _context.Products.Find(id);
            }

            public IEnumerable<Product> SearchProducts(string query)
            {
                return _context.Products.Where(p => p.Name.Contains(query) || p.Description.Contains(query)).ToList();
            }

            public void AddProduct(Product product)
            {
                _context.Products.Add(product);
                _context.SaveChanges();
            }

            public void UpdateProduct(Product product)
            {
                _context.Products.Update(product);
                _context.SaveChanges();
            }

            public void RemoveProduct(int id)
            {
                var product = _context.Products.Find(id);
                if (product != null)
                {
                    _context.Products.Remove(product);
                    _context.SaveChanges();
                }
            }
        }
}
