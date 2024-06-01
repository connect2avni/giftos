using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Giftos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CateroriesController : ControllerBase
    {
        // GET: api/<CateroriesController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<CateroriesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CateroriesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CateroriesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CateroriesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
