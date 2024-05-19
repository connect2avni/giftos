// Controllers/ContactUsController.cs
using GiftosEntity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using GiftosData;

[Route("api/[controller]")]
[ApiController]
public class ContactUsController : ControllerBase
{
    private readonly IContactUsService _contactUsService;//error

    public ContactUsController(IContactUsService contactUsService)//error
    {
        _contactUsService = contactUsService;
    }

    [HttpPost]
    public IActionResult SubmitContactUs([FromBody] ContactUs contactUs)
    {
        var result = _contactUsService.SubmitContactUs(contactUs);
        return Ok(result);
    }

    [HttpGet]
    public ActionResult<IEnumerable<ContactUs>> GetAllContactUsMessages()
    {
        var messages = _contactUsService.GetAllContactUsMessages();
        return Ok(messages);
    }
}
