using Server.Model.DbModels;
using Server.ViewModels.Model;
using System.Collections.Generic;

namespace Server.Infrastructure
{
    public interface IArticlesRepository
    {
        string CreateArticle(Article article);
        bool Delete(string id);
        bool Update(Article article);
        Article ReadArticle(string id);
        IEnumerable<Article> ReadArticles(PageModel page);
    }
}
