using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftosEntity
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public decimal Amount {  get; set; }
        public decimal Discount { get; set; }
        public decimal DiscountedAmount { get; set; }
        public decimal CgstAmount { get; set; }
        public decimal SgstAmount { get; set;}
        public decimal IgstAmount { get; set;}
        public DateTime OrderDate {  get; set; }
        public decimal TotalAmount { get; set; }
        public bool OrderStatus { get; set; }
        public string DelieveryAddress { get; set; }

        public int DelieveryPincode { get; set; }

        public string Landmark { get; set; }
    }
}
