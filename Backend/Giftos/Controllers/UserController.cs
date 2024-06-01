using Microsoft.AspNetCore.Mvc;
using GiftosData;
using System.Collections.Generic;
using System.Linq;
using GiftosEntity;
using Microsoft.AspNetCore.Identity.Data;

namespace Giftos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly GiftosDbContext _dbContext;

        public UserController(GiftosDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/<UserController>
        [HttpGet]
        public ActionResult<IEnumerable<User>> GetAllUsers()
        {
            var users = _dbContext.Users.ToList();
            return Ok(users);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult<User> GetUserDetails(int id)
        {
            var user = _dbContext.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        // POST api/<UserController>/login
        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginRequest loginRequest)
        {
            var user = _dbContext.Users.SingleOrDefault(u => u.Email == loginRequest.Email && u.Password == loginRequest.Password);
            if (user == null)
            {
                return Unauthorized();
            }
            return Ok(new { message = "Login successful", user,  });
        }

        // POST api/<UserController>/register
        [HttpPost("register")]
        public ActionResult Register([FromBody] User user)
        {
            if (_dbContext.Users.Any(u => u.Email == user.Email))
            {
                return Conflict(new { message = "User with this email already exists" });
            }

            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetUserDetails), new { id = user.UserId }, user);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public ActionResult UpdateUser(int id, [FromBody] User updatedUser)
        {
            var user = _dbContext.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            user.UserName = updatedUser.UserName;
            user.Email = updatedUser.Email;
            user.Password = updatedUser.Password;

            _dbContext.Users.Update(user);
            _dbContext.SaveChanges();
            return NoContent();
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public ActionResult DeleteUser(int id)
        {
            var user = _dbContext.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            _dbContext.Users.Remove(user);
            _dbContext.SaveChanges();
            return NoContent();
        }
    }


}
