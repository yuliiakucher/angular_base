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

  temporate: boolean;

  constructor(private dataService: DataService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.dataService.getErr().subscribe(value => {
      if (value === '404') {
        this.temporate = false;
      } else {
        this.temporate = true;
      }
    });
    console.log(this.temporate);
    return this.temporate;
  }


}
