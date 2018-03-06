import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './article-page.component';
import { ThreadPageComponent } from './thread-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticlePageComponent, ThreadPageComponent],
  exports: [ArticlePageComponent, ThreadPageComponent]
})
export class PageModule { }
