using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftosEntity
{
    public class Transactions
    {
        public int TransactionId {  get; set; }
        public string OrderId { get; set; }
        public string UserId { get; set; }
        public string Amount { get; set; }
        public string TransactionType { get; set; }



    }
}
