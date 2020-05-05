import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from './data.service';
import {HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivatorService implements CanActivate {


  constructor(private dataService: DataService, private userService: UserService) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    console.log(+route.params.id);


    const ourUser = await this.userService.getUserById(+route.params.id).toPromise();
    console.log(ourUser);
    console.log(Object.keys(ourUser));
    if (Object.keys(ourUser).length){
      this.dataService.state.next(ourUser);
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }


}
