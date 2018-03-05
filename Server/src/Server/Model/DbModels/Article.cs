namespace Server.Model.DbModels
{
    public class Article
    {
        public string _Id;
        public string Title;
        public string Body;
        public bool IsHidden;

        public Info Info;
        public string ThreadId;
    }
}
