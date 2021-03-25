using loja_dotnet.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace loja_dotnet.Services
{
    class JsonData
        { 
      public List<Product> data = new List<Product>();
    }
    public static class JsonToData
    {
      
        public static List<Product> LoadJson()
        {
            List<Product> items = null;
            using (StreamReader r = new StreamReader("data.json"))
            {
                string json = r.ReadToEnd();
                items = JsonConvert.DeserializeObject<JsonData>(json).data;
                return items;
            }
            return items;
        }
    }
}
