using GiftosEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftosBusiness.Services.Interface
{
    public interface IProductService
    {
        IEnumerable<Product> GetAllProducts();
        Product GetProductById(int id);
        IEnumerable<Product> SearchProducts(string query);
        void AddProduct(Product product);
        void UpdateProduct(Product product);
        void RemoveProduct(int id);
    }
}
