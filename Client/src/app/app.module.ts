import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TestComponentComponent } from './tryouts/test-component.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { PageModule } from './pages/page.module';
import { ComponentsModule } from './components/components.module';
import { ArticlePageComponent, } from './pages/article-page.component';
import { ThreadPageComponent } from './pages/thread-page.component';
import { HttpModule } from '@angular/http';
import { ThreadPreviewComponent } from './components/thread-preview.component';
import { ThreadCommentComponent } from './components/thread-comment.component';
import { ArticleFormComponent } from './components/article-form.component';
import { LoginService } from './shared/login.service';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestpageComponent } from './pages/testpage/testpage.component';

const myRoutes: Routes = [
  { path: 'article', component: ArticlePageComponent },
  { path: 'thread', component: ThreadPageComponent },
  { path: 'tst', component: TestpageComponent},
  { path: '', redirectTo: 'article', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(myRoutes),
    PageModule,
    ComponentsModule,
    HttpModule,
    ButtonsModule.forRoot(),
    BrowserModule, FormsModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  providers: [LoginService],
})
export class AppModule { }
