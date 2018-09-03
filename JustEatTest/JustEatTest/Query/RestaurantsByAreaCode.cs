using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JustEatTest.Query
{
    public class RestaurantsByAreaCode
    {
        public string AreaCode;
        public RestaurantsByAreaCode(string areaCode)
        {
            AreaCode = areaCode;
        }
    }
}