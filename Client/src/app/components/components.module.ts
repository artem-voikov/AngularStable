import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleViewComponent } from './article-view.component';
import { ArticleFormComponent } from './article-form.component';
import { ThreadPreviewComponent } from './thread-preview.component';
import { ThreadCommentComponent } from './thread-comment.component';
import { ModalConfirmComponent } from './modal-confirm.component';
import { RouterModule, Route } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ArticleViewComponent, ArticleFormComponent, ThreadPreviewComponent, ThreadCommentComponent, ModalConfirmComponent],
  exports: [ArticleViewComponent, ArticleFormComponent, ThreadPreviewComponent, ThreadCommentComponent, ModalConfirmComponent]
})
export class ComponentsModule { }
