import { Component, OnInit } from '@angular/core';
import { FetchService } from '../shared/fetch.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styles: []
})
export class ArticlePageComponent implements OnInit {

  fetch: FetchService;


  constructor(fetch: FetchService) {
    this.fetch = fetch;
  }

  ngOnInit() {
    this.fetch.getArticles(null);
  }

}
