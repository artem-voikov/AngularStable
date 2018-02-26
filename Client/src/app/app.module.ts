import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleModule } from './components/article/article.module';
import { SharedModule } from './shared/shared.module';
import { ArticleComponent } from './components/article/article.component';
import { TestComponentComponent } from './tryouts/test-component.component';
import { FetchService } from './shared/fetch.service';
import { HighlightDirective } from './shared/highlight.directive';
import { RouterModule, Route } from '@angular/router';
import { ArticleCommentsComponent } from './components/article/article-comments.component';


const myRoutes: Route[] = [
  { path: '/comments/:slug', component: ArticleCommentsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    RouterModule.forRoot(myRoutes)
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    SharedModule,
    RouterModule,
  ],
  providers: [FetchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
