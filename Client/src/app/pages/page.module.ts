import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './article-page.component';
import { ThreadPageComponent } from './thread-page.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { ArticleFormComponent } from '../components/article-form.component';
import { ThreadPreviewComponent } from '../components/thread-preview.component';

const articleRoutes: Routes = [
  {
    path: 'article', component: ArticlePageComponent,  children: [
      { path: 'create', component: ArticleFormComponent },
      { path: 'preview', component: ThreadPreviewComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    RouterModule.forChild(articleRoutes)
  ],
  declarations: [ArticlePageComponent, ThreadPageComponent],
  exports: [ArticlePageComponent, ThreadPageComponent]
})
export class PageModule { }
