using System.Collections.Generic;

namespace Server.Model.DbModels
{
    public class Thread
    {
        public string _Id;
        public bool IsHidden;
        public List<Comment> Comments;

        public Info Info;
    }
}
