using System.Collections.Generic;

namespace Server.Model
{
    public class ArticleModel
    {
        public string Title;
        public string Description;
        public string Body;
        public InfoModel Info;
        public bool IsHidden;

        public List<CommentModel> Comments;
    }
}
