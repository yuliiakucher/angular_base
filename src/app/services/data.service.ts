import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  state = new BehaviorSubject('default');

  err = new BehaviorSubject('default');

  constructor() {
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state.next(state);
  }

  getErr() {
    return this.err;
  }

  setErr(err) {
    this.err.next(err);
  }

}
