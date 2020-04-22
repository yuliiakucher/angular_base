import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostModel} from '../../../../../models/PostModel';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute.params
        .subscribe(params =>
          this.postService
            .getPostsByUserId(params.id)
            .subscribe(value =>
              this.posts = value));
    } else {
      this.activatedRoute.data.subscribe(value => {
        this.posts = value.allPosts;
      });
    }

  }

  ngOnInit(): void {
  }

}