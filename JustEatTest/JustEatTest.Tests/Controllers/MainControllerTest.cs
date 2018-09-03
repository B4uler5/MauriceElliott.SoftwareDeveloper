using Microsoft.VisualStudio.TestTools.UnitTesting;
using JustEatTest.Controllers;
using System.Web.Http;
using Moq;
using System.Threading.Tasks;
using System.Collections.Generic;
using JustEatTest.Dtos;
using JustEatTest.QueryHandlers;
using JustEatTest.Query;

namespace JustEatTest.Tests.Controllers
{
    [TestClass]
    public class MainControllerTest
    {

        [TestMethod]
        public async Task RestaurantsEndpointReturnsCorrectly()
        {
            var handler = new Mock<IRestaurantsHandler>();
            handler.Setup(x => x.Handle(It.IsAny<RestaurantsByAreaCode>()))
                .Returns(Task.FromResult(new List<RestaurantDto>()));
            // Arrange
            var controller = new MainController(handler.Object);

            // Act
            var result = await controller.Restaurants("SE19");

            // Assert
            Assert.IsNotNull(result);
        }
    }
}
