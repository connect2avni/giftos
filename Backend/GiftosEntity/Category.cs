using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftosEntity
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName {  get; set; }
        public string IsActive { get; set; }
        public int CategoryCount { get; set; }
        public string CategoryDescription { get; set; }

        }
    }
}
