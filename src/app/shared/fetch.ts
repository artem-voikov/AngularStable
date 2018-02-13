import { ArticleModel } from '../model/ArticleModel';
import { PageModel } from '../model/PageModel';
import { UserModel } from '../model/UserModel';

export interface Fetch {
    getArticle(id: string): ArticleModel;
    getArticles(page: PageModel): ArticleModel[];
    getUsers(page: PageModel): UserModel[];

}
