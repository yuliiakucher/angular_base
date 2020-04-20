import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';
import {AllUsersComponent} from './modules/user/components/all-users/all-users.component';
import {UserResolverService} from './modules/user/services/user-resolver.service';
import {AllPostsComponent} from './modules/post/components/all-posts/all-posts.component';
import {PostResolverService} from './modules/post/services/post-resolver.service';
import {AllCommentsComponent} from './modules/comment/components/all-comments/all-comments.component';
import {CommentResolverService} from './modules/comment/services/comment-resolver.service';
import {PostComponent} from './modules/post/components/post/post.component';

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
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
