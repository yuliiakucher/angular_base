import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import {AllPostsComponent} from '../post/components/all-posts/all-posts.component';
import {readNgcCommandLineAndConfiguration} from '@angular/compiler-cli/src/main';
import {NgLocaleLocalization} from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: AllUsersComponent,
    resolve: {allUsers: UserResolverService},
    loadChildren: () => import('../post/post.module').then(m => m.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
