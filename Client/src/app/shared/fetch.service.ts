import { ArticleModel, PageModel, UserModel, CommentModel } from '../model/Models';
import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class FetchService {

    constructor(private http: Http) {

    }


    getArticles(page: PageModel): ArticleModel[] {
        const url = `http://localhost:10101/api/articles`;

        this.http.get(url).subscribe(res => console.log(res.text()));

        return null;
    }

}

