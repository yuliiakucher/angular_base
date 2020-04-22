import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommentComponent} from './modules/comment/components/comment/comment.component';
import {PostComponent} from './modules/post/components/post/post.component';
import {UserComponent} from './modules/user/components/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {AllUsersComponent} from './modules/user/components/all-users/all-users.component';
import {AllPostsComponent} from './modules/post/components/all-posts/all-posts.component';
import {AllCommentsComponent} from './modules/comment/components/all-comments/all-comments.component';
import {CommentResolverService} from './modules/comment/services/comment-resolver.service';
import {PostResolverService} from './modules/post/services/post-resolver.service';
import {UserResolverService} from './modules/user/services/user-resolver.service';
import {AppRoutingModule} from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
