using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace loja_dotnet.Models
{
    public class Product
    {
        [JsonProperty("url")]
        public string url { get; set; }
        [JsonProperty("name")]
        public string name { get; set; }
        [JsonProperty("price")]
        public string price { get; set; }
        [JsonProperty("desc")]
        public string desc { get; set; }
    }
    public class ProductsInBasket : Product
    {
        [JsonProperty("qtd")]
        public int qtd { get; set; }
    }
}
