using JustEatTest.QueryHandlers;
using System.Threading.Tasks;
using System.Web.Http;
using JustEatTest.Query;
using System.Collections.Generic;
using JustEatTest.Dtos;

namespace JustEatTest.Controllers
{
  [RoutePrefix("api/main")]
    public class MainController : ApiController
    {
        public IRestaurantsHandler _restaurantHandler;
        public MainController(IRestaurantsHandler restaurantsHandler)
        {
            _restaurantHandler = restaurantsHandler;
        }

        [HttpGet]
        [Route("restaurants")]
        public async Task<IHttpActionResult> Restaurants(string areaCode)
        {
            var result = await _restaurantHandler.Handle(new RestaurantsByAreaCode(areaCode));
            return Ok(result ?? new List<RestaurantDto>());
        }
    }
}
