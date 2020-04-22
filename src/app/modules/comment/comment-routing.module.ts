import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CommentResolverService} from './services/comment-resolver.service';
import {PostComponent} from '../post/components/post/post.component';


const routes: Routes = [
  {
    path: '', component: AllCommentsComponent, resolve: {allComments: CommentResolverService},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
