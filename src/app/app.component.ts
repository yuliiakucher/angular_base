import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {UserModel} from '../models/UserModel';
import {UserService} from './services/user.service';
import {CommentModel} from '../models/CommentModel';
import {PostModel} from '../models/PostModel';
import {CommentService} from './services/comment.service';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>hello!</h1>
    <app-user *ngFor="let u of users" [user]="u"></app-user>
    <app-comment *ngFor="let c of comments" [comment]="c"></app-comment>
    <app-post *ngFor="let p of posts" [post]="p"></app-post>
  `,
  styles: [`h1 {
    background: pink
  }`]
})
export class AppComponent {
  users: UserModel[];
  comments: CommentModel[];
  posts: PostModel[];

  constructor(private userService: UserService,
              private commentService: CommentService,
              private postService: PostService) {
    this.userService.getUsers().subscribe(value =>
      this.users = value);

    this.commentService.getComments().subscribe(value =>
      this.comments = value);

    this.postService.getPosts().subscribe(value =>
      this.posts = value);
  }


}
