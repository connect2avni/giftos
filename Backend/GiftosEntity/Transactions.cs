using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftosEntity
{
    public class Transactions
    {
        [Key]
        public int TransactionId {  get; set; }
        [ForeignKey("Order")]
        public string OrderId { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }

        public string Amount { get; set; }
        public string TransactionType { get; set; }



    }
}
