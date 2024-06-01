using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Giftos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishlistController : ControllerBase
    {
        // GET: api/<WishlistController>
        [HttpGet]
        public IEnumerable<string> GetAll()
        {
            return new string[] { "value1", "value2" };

            //returns all the products of wishlist
        }

        // GET api/<WishlistController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
            //return the searched products of wishlist
        }

        // POST api/<WishlistController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
            //add products into wishlist
        }


        // DELETE api/<WishlistController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //delete product from wishlist
        }
    }
}
