import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FirstChildComponent} from './first-child/first-child.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`h1 {
    background: pink
  }`]
})
export class AppComponent implements AfterViewInit {

  @ViewChild('target', {static: false})
  target;

  @ViewChild(FirstChildComponent, {static: false})
  firstChild: FirstChildComponent;


  constructor() {
    console.log(this.target);
  }

  ngAfterViewInit(): void {
    console.log(this.target);
    console.log(this.target.nativeElement.innerText);
    this.firstChild.hello();
  }


}
