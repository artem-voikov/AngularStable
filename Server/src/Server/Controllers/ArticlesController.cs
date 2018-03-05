using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.Infrastructure;
using Server.Model;
using Server.Model.DbModels;
using Server.ViewModels.Model;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    public class ArticlesController : Controller
    {
        private IArticlesRepository _articlesRepository;

        public ArticlesController(IArticlesRepository articlesRepository)
        {
            this._articlesRepository = articlesRepository;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Article> Get([FromQuery]PageModel page = null)
        {

            return _articlesRepository.ReadArticles(page.pageSize == 0 ? PageModel.Default : page);
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
