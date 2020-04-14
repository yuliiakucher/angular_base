import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostModel} from '../../models/PostModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private html: HttpClient) {
  }

  getPostsByUserId(id: number): Observable<PostModel[]> {
    return this.html.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
