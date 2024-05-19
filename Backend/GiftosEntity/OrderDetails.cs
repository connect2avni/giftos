using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftosEntity
{
    public class OrderDetails
    {
        public int OrderDetailsId { get; set; }
        [ForeignKey("Order")]
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public decimal Price {  get; set; }
        public decimal Quantity { get; set; }

        



    }
}
