import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommentComponent} from './components/comment/comment.component';
import {PostComponent} from './components/post/post.component';
import {UserComponent} from './components/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CommentResolverService} from './services/comment-resolver.service';
import {PostResolverService} from './services/post-resolver.service';
import {UserResolverService} from './services/user-resolver.service';


const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService}, children: [
    {path: ':id/posts', component: AllPostsComponent}]},
  {path: 'posts', component: AllPostsComponent, resolve: {allPosts: PostResolverService}, children: [
      {path: ':id/comments', component: AllCommentsComponent}
    ]},
  {path: 'comments', component: AllCommentsComponent, resolve: {allComments: CommentResolverService}, children:[
      {path: ':id/post', component: PostComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommentComponent,
    PostComponent,
    UserComponent,
    HelloComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
