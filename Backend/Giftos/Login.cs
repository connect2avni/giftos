using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Giftos
{
    public class Login
    {
        public EmailAddressAttribute Email { get; set; } 
        public string Password {  get; set; }
    }
}
