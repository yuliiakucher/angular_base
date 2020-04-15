import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostModel} from '../../../models/PostModel';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

    try {
      this.posts = this.activatedRoute.snapshot.data.allPosts;
    } catch (e) {
      console.log(e);
    }

    this.activatedRoute.params
      .subscribe(params =>
        this.postService
          .getPostsByUserId(params.id)
          .subscribe(value =>
            this.posts = value));
  }

  ngOnInit(): void {
  }

}
