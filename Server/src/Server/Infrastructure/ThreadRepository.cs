using System;
using System.Collections.Generic;
using Server.Model.DbModels;
using Server.ViewModels.Model;
using Faker;

namespace Server.Infrastructure
{
    public class ThreadRepository : IThreadRepository
    {
        public void AddComment(string threadId, Comment comment)
        {
            throw new NotImplementedException();
        }

        public List<Comment> GetComments(PageModel page)
        {
            page = page ?? PageModel.Default;
            var result = new List<Comment>();

            for (var i = 0; i < page.pageSize; i++)
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

        public void ToggleCommentVisibilty(string threadId, string commentId)
        {
            throw new NotImplementedException();
        }
    }
}
