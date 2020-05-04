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


  favourite(todo: Todo) {
    if (!localStorage.getItem('favourite')){
      const arr = [];
      arr.push(todo);
      localStorage.setItem('favourite', JSON.stringify(arr));
    } else {
      let arrJSON = localStorage.getItem('favourite');
      const arr = JSON.parse(arrJSON);
      arr.push(todo);
      localStorage.setItem('favourite', JSON.stringify(arr));
    }
  }
}