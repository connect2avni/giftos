using GiftosEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using GiftosData;

namespace GiftosBusiness.Services
{
    public interface IContactUsService
    {
        ContactUs SubmitContactUs(ContactUs contactUs);
        IEnumerable<ContactUs> GetAllContactUsMessages();
    }

    public class ContactUsService : IContactUsService
    {
        private readonly GiftosDbContext _context;

        public ContactUsService(GiftosDbContext context)
        {
            _context = context;
        }

        public ContactUs SubmitContactUs(ContactUs contactUs)
        {
            _context.ContactUs.Add(contactUs);
            _context.SaveChanges();
            return contactUs;
        }

        public IEnumerable<ContactUs> GetAllContactUsMessages()
        {
            return _context.ContactUs.ToList();
        }
    }
}
