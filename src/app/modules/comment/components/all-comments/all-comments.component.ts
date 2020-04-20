import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentModel} from '../../../../../models/CommentModel';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.comments = this.activatedRoute.snapshot.data.allComments;
    this.activatedRoute.params
      .subscribe(params =>
        this.commentService
          .getCommentByPostId(params.id)
          .subscribe(value =>
            this.comments = value));
  }

  ngOnInit(): void {
  }

}
