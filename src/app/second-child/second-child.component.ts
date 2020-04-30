import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../services/data-service.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  constructor(private dataServiceService: DataServiceService) {
    // this.dataServiceService.getState().subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

  changeState() {
    this.dataServiceService.setState('hello from second component');
  }
}
