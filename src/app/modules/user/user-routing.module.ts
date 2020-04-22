import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserResolverService} from './services/user-resolver.service';
import {AllUsersComponent} from './components/all-users/all-users.component';


const routes: Routes = [
  {
    path: '',
    component: AllUsersComponent,
    resolve: {allUsers: UserResolverService},
    children: [
      {path: ':id/posts', loadChildren: () => import('../post/post.module').then(m => m.PostModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
