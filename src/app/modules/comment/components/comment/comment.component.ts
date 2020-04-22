import {Component, Input} from '@angular/core';
import {CommentModel} from '../../../../../models/CommentModel';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../../post/services/post.service';
import {PostModel} from '../../../../../models/PostModel';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input()
  comment: CommentModel;
  post: PostModel;
  constructor(private postService: PostService) { }


  showPost(comment: CommentModel) {
    this.postService.getPost(comment.postId).subscribe(value => this.post = value);
  }
}
