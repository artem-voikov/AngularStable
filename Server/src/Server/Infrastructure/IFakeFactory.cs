﻿using Server.Model;
using Server.ViewModels.Model;
using System.Collections.Generic;

namespace Server.Infrastructure
{
    public interface IFakeFactory
    {
        IEnumerable<ArticleModel> CreateArticles(int count);

    }
}
