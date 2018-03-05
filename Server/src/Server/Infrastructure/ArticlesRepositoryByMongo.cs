using System;
using System.Collections.Generic;
using Server.Model.DbModels;
using Server.ViewModels.Model;

namespace Server.Infrastructure
{
    public class ArticlesRepositoryByMongo : IArticlesRepository
    {
        private string mongoDatabase;
        private string mongoServer;

        public ArticlesRepositoryByMongo(string mongoServer, string mongoDatabase)
        {
            this.mongoServer = mongoServer;
            this.mongoDatabase = mongoDatabase;
        }

        public string CreateArtice(Article article)
        {
            throw new NotImplementedException();
        }

        public string CreateArticle(Article article)
        {
            throw new NotImplementedException();
        }

        public bool Delete(string id)
        {
            throw new NotImplementedException();
        }

        public Article ReadArticle(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Article> ReadArticles(PageModel page)
        {
            throw new NotImplementedException();
        }

        public bool Update(Article article)
        {
            throw new NotImplementedException();
        }
    }
}
