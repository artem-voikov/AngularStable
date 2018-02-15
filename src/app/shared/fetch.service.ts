import {ArticleModel, PageModel, UserModel, CommentModel } from '../model/Models';
import { Injectable } from '@angular/core';
import { IFetch } from './fetch';

@Injectable()
export class FetchService implements IFetch {


  getArticle(id: string): ArticleModel {
    const result = new ArticleModel();


    return result;
  }
  getArticles(page: PageModel): ArticleModel[] {
    return null;
  }
  getUsers(page: PageModel): UserModel[] {
    return null;
  }
  getComments(page: PageModel): CommentModel[] {
    return null;
  }

}
