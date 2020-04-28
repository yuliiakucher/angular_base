import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {

  // state: { login: string, pass: string } = {
  //   login: 'login',
  //   pass: 'password'
  // };


  // loginForm: { login: string, password: string } = {
  //   login: 'def login',
  //   password: 'def pass'
  // };

  forma: FormGroup;

  // password: FormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{6,}')] );
  // checkState(forma: FormGroup) {
  //   console.log(forma);
  // }
  // constructor() {
  //   this.forma = new FormGroup({
  //     login: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  //     password: this.password
  //   });
  // }

  constructor(private formBuilder: FormBuilder) {
    this.forma = this.formBuilder.group({
      login: ['', [Validators.required, Validators.pattern ('[a-z]{6,}')]],
      password: '1111111'
    })
  }


  // changeState(xxx: HTMLInputElement) {
  //   console.log(xxx.value);
  //   this.state = xxx.value;
  // }


}
