import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowSubjectService {
  subject: object;

  private subjectSource = new BehaviorSubject(this.subject);
  currentSubject = this.subjectSource.asObservable();

  constructor() { }

  changeSubject(subject: object) {
    this.subjectSource.next(subject);
    console.log('serveice...');
    console.log(subject);
  }

}
