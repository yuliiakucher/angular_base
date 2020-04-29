import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: Todo;
  toggleClass: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }


  done() {
    this.toggleClass = !this.toggleClass;
  }
}
