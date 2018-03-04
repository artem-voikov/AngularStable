using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Model;
using MongoDB.Driver;

namespace Server.Infrastructure
{
    public class ArticlesRepositoryByMongo : IArticlesRepository
    {
        private const string collectionArticles = "articles";
        MongoClient client;
        IMongoDatabase database;

        public ArticlesRepositoryByMongo(string server, string dbname)
        {
            client = new MongoClient(server);
            database = client.GetDatabase(dbname);
        }

        public string CreateArtice(ArticleModel article)
        {
            throw new NotImplementedException();
            IMongoCollection<ArticleModel> articles = database.GetCollection<ArticleModel>(collectionArticles);

        }

        public bool Delete(string id)
        {
            throw new NotImplementedException();
        }

        public ArticleModel ReadArticle(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ArticleModel> ReadArticles(PageModel page)
        {
            throw new NotImplementedException();
        }

        public bool Update(ArticleModel article)
        {
            throw new NotImplementedException();
        }
    }
}
