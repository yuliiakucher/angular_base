import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {UserModel} from '../models/UserModel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from './services/data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  getUser: FormGroup;




  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private router: Router) {
    this.getUser = this.formBuilder.group({
      id: ['', Validators.required]
      }
    );
  }


  sendId() {
    this.dataService.setState(this.getUser.value);
    console.log(this.getUser.value);
    this.router.navigate(
      ['user']
    );
  }
}
