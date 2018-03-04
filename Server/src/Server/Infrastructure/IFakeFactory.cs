using Server.Model;
using System.Collections.Generic;

namespace Server.Infrastructure
{
    public interface IFakeFactory
    {
        IEnumerable<ArticleModel> CreateArticles(int count);

    }
}
