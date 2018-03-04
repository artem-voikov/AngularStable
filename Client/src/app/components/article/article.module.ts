import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticlesListComponent } from './articles-list.component';
import { ArticlePreviewComponent } from './article-preview.component';
import { ArticleCommentsComponent } from './article-comments.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [ArticleComponent, ArticlesListComponent, ArticlePreviewComponent, ArticleCommentsComponent],
  exports: [ArticleComponent, ArticlesListComponent, ArticlePreviewComponent, ArticleCommentsComponent]
})
export class ArticleModule { }
