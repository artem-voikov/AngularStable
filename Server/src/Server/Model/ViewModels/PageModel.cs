namespace Server.ViewModels.Model
{
    public class PageModel
    {
        public static PageModel Default
        {
            get
            {
                return new PageModel
                {
                    page = 0,
                    pageSize = 10
                };
            }
        }
        public int page;
        public int pageSize;
        public string sortBy;
        public string filterBy;
    }
}
