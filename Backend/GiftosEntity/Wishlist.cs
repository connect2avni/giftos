using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftosEntity
{
    public class Wishlist
    {
        [Key]
        public string WishlistId { get; set; }
        [ForeignKey("Product")]
        public int ProductId { get; set; }
        [ForeignKey("User")]
        public int UserId {  get; set; }
    }
}
