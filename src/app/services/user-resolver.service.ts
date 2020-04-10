import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {UserModel} from '../../models/UserModel';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<UserModel[]>{

  constructor(private userService: UserService) { }

  resolve(): Observable<UserModel[]> {
    return this.userService.getUsers();
  }
}
