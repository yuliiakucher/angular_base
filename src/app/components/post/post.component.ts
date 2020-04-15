import {Component, Input} from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post: PostModel;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.queryParams
      .subscribe(queryParams =>
        this.commentService
          .getCommentByPostId(queryParams.idOfPost)
          .subscribe(value => this.post));
  }

  showComments(post: PostModel) {
    this.router.navigate([post.id, 'comments'], {
      relativeTo: this.activatedRoute
    });
  }
}
