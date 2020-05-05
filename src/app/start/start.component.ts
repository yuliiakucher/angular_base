import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

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
    // this.dataService.setState(this.getUser.value);
    console.log(this.getUser.value.id);
    this.router.navigate(
      ['user', this.getUser.value.id]
    );
  }

  ngOnInit(): void {
  }

}
