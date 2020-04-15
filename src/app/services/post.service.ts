import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../models/PostModel';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsByUserId(id: number): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
