using Server.Model;
using System.Collections.Generic;

namespace Server.Infrastructure
{
    public interface IArticlesRepository
    {
        string CreateArtice(ArticleModel article);
        bool Delete(string id);
        bool Update(ArticleModel article);
        ArticleModel ReadArticle(string id);
        IEnumerable<ArticleModel> ReadArticles(PageModel page);
    }
}
