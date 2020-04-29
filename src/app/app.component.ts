import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Todo} from '../models/Todo';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  toDo: FormGroup;
  data: Todo[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.toDo = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', [Validators.required, Validators.pattern('')]],
      body: ['write your task here', [Validators.required, Validators.pattern('')]],
      type: ['', [Validators.required, Validators.pattern('')]]

    })
  }


  createTask(toDo: FormGroup) {
    console.log(toDo.value);
    this.data.push(toDo.value);
    console.log(this.data);
    localStorage.setItem(this.toDo.value, this.toDo.value.id);
  }
}
