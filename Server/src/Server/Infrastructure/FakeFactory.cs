using Server.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Faker;

namespace Server.Infrastructure
{
    public class FakeFactory
    {
        public IEnumerable<ArticleModel> CreateArticles(int count)
        {
            var result = new List<ArticleModel>();

            for (var i = 0; i < count; i++)
                result.Add(CreateArticle());

            return result;
        }

        private ArticleModel CreateArticle()
        {
            var result = new ArticleModel();

            result.Body = Lorem.Paragraph();
            result.Description = string.Join(" ", Lorem.Paragraphs(RandomNumber.Next(1, 3)));
            result.Info = CreateInfo();
            result.IsHidden = Convert.ToBoolean(RandomNumber.Next(0, 1));
            result.Title = Faker.Lorem.Sentence();
            result.Comments = CreateComments();

            return result;
        }

        private List<CommentModel> CreateComments()
        {
            int count = RandomNumber.Next(1, 4);
            var result = new List<CommentModel>();

            for (var i = 0; i < count; i++)
                result.Add(CreateComment());

            return result;
        }

        private CommentModel CreateComment()
        {
            var result = new CommentModel();

            result.Body = Lorem.Paragraph();
            result.Info = CreateInfo();
            result.IsHidden = Convert.ToBoolean(RandomNumber.Next(0, 1));

            return result;
        }

        private InfoModel CreateInfo()
        {
            var result = new InfoModel();

            result.Created = DateTime.Now.ToString();
            result.Updated = DateTime.Now.ToString();
            result.Owner = CreateUser();

            return result;
        }

        private UserModel CreateUser()
        {
            var result = new UserModel();

            result.Avatar = "http://placehold.it/32x32";
            result.Fname = Name.First();
            result.Lname = Name.Last();
            result.Login = Internet.UserName();
            result.Id = RandomNumber.Next(10000, 1000000).ToString();
            return result;
        }
    }
}
