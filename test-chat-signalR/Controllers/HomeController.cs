﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace test_chat_signalR.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //Some fuck
            ViewBag.Title = "Home Page";
            //more commit
            return View();
        }
    }
}
