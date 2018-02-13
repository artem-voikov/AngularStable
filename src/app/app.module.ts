import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { ArticleComponent } from './components/article/article.component';
import { ArticleModule } from './components/article/article.module';
import { SharedModule } from './shared/shared.module';
import { ArticleComponent } from './components/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    // ArticleComponent
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
