using System.Collections.Generic;

namespace Server.ViewModels.Model
{
    public class ArticleModel
    {
        public string _id;
        public string Title;
        public string Description;
        public string Body;
        public InfoModel Info;
        public bool IsHidden;

        public List<CommentModel> Comments;
    }
}
