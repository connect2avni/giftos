using System.ComponentModel.DataAnnotations;

namespace GiftosEntity
{
    public class ContactUs
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string Phone { get; set; }

        public string Email { get; set; }
     
        [Required]
        public string Message { get; set; }
       
    }
}
