import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleModule } from './components/article/article.module';
import { SharedModule } from './shared/shared.module';
import { ArticleComponent } from './components/article/article.component';
import { TestComponentComponent } from './tryouts/test-component.component';
import { FetchService } from './shared/fetch.service';
import { RouterModule, Route } from '@angular/router';
import { ArticleCommentsComponent } from './components/article/article-comments.component';
import { ArticlesListComponent } from './components/article/articles-list.component';


const myRoutes: Route[] = [
  { path: 'comments', component: ArticleCommentsComponent },
  { path: '', component: ArticlesListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    SharedModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [FetchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
