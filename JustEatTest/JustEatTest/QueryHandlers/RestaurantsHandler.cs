using JustEatTest.Dtos;
using JustEatTest.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace JustEatTest.QueryHandlers
{
    public interface IRestaurantsHandler
    {
        Task<List<RestaurantDto>> Handle(RestaurantsByAreaCode query);
    }
    public class RestaurantsHandler: IRestaurantsHandler
    {
        private static SingletonHttpClient _httpClient;
        public RestaurantsHandler()
        {
            _httpClient = SingletonHttpClient.Instance;
        }
        public async Task<List<RestaurantDto>> Handle(RestaurantsByAreaCode query)
        {
            var httpResult = await _httpClient.GetAsync($"https://public.je-apis.com/restaurants?q={query.AreaCode}");
            var stringResult = await httpResult.Content.ReadAsStringAsync();
            var deserializeResult = Newtonsoft.Json.JsonConvert.DeserializeObject<RootObject>(stringResult);

            return deserializeResult.Restaurants.Where(x => x.IsOpenNow).Select(x =>
                new RestaurantDto
                {
                    Name = x.Name,
                    Rating = x.RatingStars,
                    CuisineTypes = x.CuisineTypes
                }
            ).ToList();
        }
    }
}
