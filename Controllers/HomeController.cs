using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace angular_dotnetcore.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            // something here.
            return View("~/wwwroot/index.cshtml");
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
