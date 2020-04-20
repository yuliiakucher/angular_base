import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserComponent} from './components/user/user.component';
import {AllUsersComponent} from './components/all-users/all-users.component';


@NgModule({
  declarations: [
    UserComponent,
    AllUsersComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
