import { Component, OnInit } from '@angular/core';

import { CrudOpsService } from '../services/crud-ops.service';
import { ShowSubjectService } from '../services/show-subject.service';
@Component({
  selector: 'app-subject-delete',
  templateUrl: './subject-delete.component.html',
  styleUrls: ['./subject-delete.component.css']
})
export class SubjectDeleteComponent implements OnInit {

  questions: any;
  tests: any;

  /*subject = {
    sub_code: 'ML800',
  sub_name: 'Machine Learning',
  __v: 0,
  _id: '5d5e6df9da19a1229e6ac63d'
  };*/
  subject: any;

  dquestion: any;
  dtest: any;

  canDelete =  (this.questions  == null && this.tests == null) ? true : false;

  constructor(
    private crud: CrudOpsService,
    private curSub: ShowSubjectService
    ) { }

  async ngOnInit() {

   this.curSub.currentSubject.subscribe(subject => this.subject = subject);
   console.log('deleting...');
   console.log(this.subject);

   this.crud.testBySub(this.subject).subscribe(docs => {
      this.tests = (docs as any).result;
      console.log(this.tests);
    },
    err => {
        console.log(err);
    });

   this.crud.questionBySub(this.subject).subscribe(docs => {
      this.questions = (docs as any).result;
      console.log(this.questions);
    },
    err => {
        console.log(err);
    });

  }


  deleteloadQuesData(question) {
    this.dquestion = question;
  }

  onDeleteQA() {

    console.log(this.dquestion);
    this.crud.deleteData('question', this.dquestion).subscribe(data => {
      //this.subjects.pop(subject);
      console.log(data);
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onDeleteSubject() {

    this.crud.deleteData('subject', this.subject).subscribe(data => {
      //this.subjects.pop(subject);
      console.log(data);
    },
    err => {
      console.log(err);
      return false;
    });

  }


  deleteloadTestData(test) {
    this.dtest = test;
  }

  onDeleteTest() {
    console.log(this.dtest);
    this.crud.deleteData('test', this.dtest).subscribe(data => {
      //this.subjects.pop(subject);
      console.log(data);
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
