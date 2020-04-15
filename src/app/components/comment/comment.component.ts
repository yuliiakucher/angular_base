import {Component, Input} from '@angular/core';
import {CommentModel} from '../../../models/CommentModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input()
  comment: CommentModel;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  showPost(comment: CommentModel) {
    this.router.navigate([], {
      queryParams: {idOfPost: comment.id},
      relativeTo: this.activatedRoute
    });
  }
}
