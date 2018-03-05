using Server.Model.DbModels;
using Server.ViewModels.Model;
using System.Collections.Generic;

namespace Server.Infrastructure
{
    public interface IThreadRepository
    {
        void AddComment(string threadId, Comment comment);
        void ToggleCommentVisibilty(string threadId, string commentId);

        List<Comment> GetComments(PageModel page);

    }
}
