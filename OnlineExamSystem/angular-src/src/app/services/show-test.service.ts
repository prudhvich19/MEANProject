import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowTestService {

  test: object;

  private testSource = new BehaviorSubject(this.test);
  currentTest = this.testSource.asObservable();

  constructor() { }

  changeTest(test: object) {
    this.testSource.next(test);
    console.log('serveice...');
    console.log(test);
  }


}
