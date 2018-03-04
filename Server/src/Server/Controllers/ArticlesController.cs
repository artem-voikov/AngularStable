using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.Infrastructure;
using Server.Model;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    public class ArticlesController : Controller
    {
        private IFakeFactory _fakeFactory;

        public ArticlesController(IFakeFactory fakeFactory)
        {
            this._fakeFactory = fakeFactory;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<ArticleModel> Get()
        {
            return this._fakeFactory.CreateArticles(10);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
