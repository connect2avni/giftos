using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftosEntity
{
    public class Product
    {
        public int ProductId { get; set; } = 0;
        public string Name { get; set; }
        public string Description { get; set; }
        public int ProductCategoryId { get; set; }
        public decimal Price { get; set; }



    }
}
