import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../services/data-service.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  constructor(private dataServiceService: DataServiceService) {
    // dataServiceService.getState().subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

  doNewState() {
    this.dataServiceService.setState('hello from first component');
  }

  hello() {
    console.log('hello');
  }
}
