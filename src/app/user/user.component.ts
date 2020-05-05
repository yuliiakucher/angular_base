import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {UserService} from '../services/user.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user: UserModel;
  constructor(private dataService: DataService) {
    dataService.state.subscribe(value => this.user = value);
  }

}
