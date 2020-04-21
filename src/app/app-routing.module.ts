import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {AllUsersComponent} from './modules/user/components/all-users/all-users.component';
import {UserResolverService} from './modules/user/services/user-resolver.service';
import {AllPostsComponent} from './modules/post/components/all-posts/all-posts.component';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)}
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
