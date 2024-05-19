using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftosEntity
{
    public class Subscriptions
    {
        [Key]
        [Required]
        public int SubscriptionId { get; set; }
        public string Email { get; set; }
        public bool IsSubscribed {  get; set; }
    }
}
