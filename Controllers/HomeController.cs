using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyProject.Models;
using NPoco;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Controllers
{

    public class HomeController : Controller
    {
        private readonly PdaContext _context;

        public HomeController(PdaContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpGet]
        [Produces("application/json")]
        [Route("/GetDuties")]
        public async Task<IActionResult> GetDuties()
        {
            var entities = await _context.Duty.ToListAsync();
            return Ok(entities);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Register(Customer c)
        {
            if (ModelState.IsValid)
            {
                _context.Customer.Add(c);

//"INSERT INTO dbo.Customer ( " +
//"CustomerName, CustomerPassword " +
//") VALUES ( '" +
//c.CustomerName + "', '" + c.CustomerPassword + "');" 

            }
            _context.SaveChanges();
            return RedirectToAction("Login");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Login(Customer c)
        {
            bool login = false;
            bool login2 = false;
            login = ModelState.IsValid;

            try
            {
                Customer incomingCustomer = _context.Customer.FromSql(
    "Select CustomerID, CustomerName, CustomerPassword " +
    "from dbo.Customer " +
    "WHERE CustomerName = '" + c.CustomerName + "' " +
    "AND CustomerPassword = '" + c.CustomerPassword + "'")
                    .FirstOrDefault();
                _context.CurrentCustomer = incomingCustomer;
                if (incomingCustomer != null)
                {
                    login2 = true;
                }
            }
            catch (SqlException e)
            {
                Debug.Write(e.Message);
            }

            if (login && login2)
            {
                return RedirectToAction("Index");
            }
            else
            {
                return RedirectToAction("Login");
            }
        }
    }
}
