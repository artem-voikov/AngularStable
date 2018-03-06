import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TestComponentComponent } from './tryouts/test-component.component';
// import { FetchService } from './shared/fetch.service';
import { RouterModule, Route } from '@angular/router';
import { PageModule } from './pages/page.module';
import { ComponentsModule } from './components/components.module';
import { ArticlePageComponent, } from './pages/article-page.component';
import { ThreadPageComponent } from './pages/thread-page.component';

const myRoutes: Route[] = [
  { path: 'comments', component: ThreadPageComponent },
  { path: '', component: ArticlePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(myRoutes),
    PageModule,
    ComponentsModule
  ],
  // providers: [FetchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
