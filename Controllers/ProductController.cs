using loja_dotnet.Models;
using loja_dotnet.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace loja_dotnet.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IMemoryCache _cache;

        public ProductController(IMemoryCache memoryCache)
        {
            _cache = memoryCache;
        }
   
        [HttpGet]
        public List<Product> Get()
        {
            List<Product> p = JsonToData.LoadJson();
            return p;
        }

        [HttpGet("{uuid}")]
        public List<ProductsInBasket> Get(Guid uuid)
        {
            var cacheEntry = _cache.Get<List<ProductsInBasket>>(uuid);
            return cacheEntry;
        }

        [HttpPost]
        public async Task<Guid> Post([FromBody] List<ProductsInBasket> data)
        {
            Guid cacheKey = System.Guid.NewGuid();
            List<ProductsInBasket> stored = _cache.Get<List<ProductsInBasket>>(cacheKey);
            var cacheEntry = _cache.GetOrCreate(cacheKey, entry =>
            {
                entry.SlidingExpiration = TimeSpan.FromMinutes(100);
                return data;
            });
            return  cacheKey;
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
