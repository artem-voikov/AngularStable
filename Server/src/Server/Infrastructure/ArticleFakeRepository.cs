using System;
using System.Collections.Generic;
using Faker;
using Server.Model.DbModels;
using Server.ViewModels.Model;

namespace Server.Infrastructure
{
    public class ArticleFakeRepository : IArticlesRepository
    {
        private IEnumerable<Article> CreateFakeArticles(int count)
        {
            var result = new List<Article>();

            for (var i = 0; i < count; i++)
                result.Add(CreateFakeArticle());

            return result;
        }

        private Article CreateFakeArticle()
        {
            var result = new Article();

            result._Id = Guid.NewGuid().ToString();
            result.Body = Lorem.Paragraph();
            result.Info = CreateInfo();
            result.IsHidden = Convert.ToBoolean(RandomNumber.Next(0, 1));
            result.Title = Lorem.Sentence();
            result.ThreadId = Guid.NewGuid().ToString();

            return result;
        }

        private List<Comment> CreateComments()
        {
            int count = RandomNumber.Next(1, 4);
            var result = new List<Comment>();

            for (var i = 0; i < count; i++)
                result.Add(CreateComment());

            return result;
        }

        private Comment CreateComment()
        {
            var result = new Comment();

            result.Body = Lorem.Paragraph();
            result.Info = CreateInfo();
            result.IsHidden = Convert.ToBoolean(RandomNumber.Next(0, 1));

            return result;
        }

        private Info CreateInfo()
        {
            var result = new Info();

            result.Created = DateTime.Now.ToString();
            result.Updated = DateTime.Now.ToString();
            result.OwnerId = Guid.NewGuid().ToString();
            result.OwnerLogin = Internet.UserName();

            return result;
        }

        private Owner CreateUser()
        {
            var result = new Owner();

            result.Avatar = "http://placehold.it/32x32";
            result.Fname = Name.First();
            result.Lname = Name.Last();
            result.Login = Internet.UserName();
            result._Id = RandomNumber.Next(10000, 1000000).ToString();

            return result;
        }

        public string CreateArtice(Article article)
        {
            return CreateFakeArticle()._Id;
        }

        public bool Delete(string id)
        {
            return true;
        }

        public bool Update(Article article)
        {
            return true;
        }

        public Article ReadArticle(string id)
        {
            return CreateFakeArticle();
        }

        public IEnumerable<Article> ReadArticles(PageModel page)
        {
            return CreateFakeArticles(page.pageSize);
        }

        public string CreateArticle(Article article)
        {
            return CreateFakeArticle()._Id;
        }
    }
}
