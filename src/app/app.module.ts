import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './components/comment/comment.component';
import { PostComponent } from './components/post/post.component';
import {UserComponent} from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommentComponent,
    PostComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
