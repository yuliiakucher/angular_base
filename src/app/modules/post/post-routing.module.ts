import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostResolverService} from './services/post-resolver.service';
import {AllCommentsComponent} from '../comment/components/all-comments/all-comments.component';


const routes: Routes = [
  {
    path: '',
    component: AllPostsComponent,
    resolve: {allPosts: PostResolverService},
    loadChildren: () => import('../comment/comment.module').then(m => m.CommentModule),
    children: [
      {path: ':id/comments', loadChildren: () => import('../comment/comment.module').then(m => m.CommentModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
