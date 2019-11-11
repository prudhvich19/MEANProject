import { Component, OnInit } from '@angular/core';

import { CrudOpsService } from '../services/crud-ops.service';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {

  test = {
    test_name: '',
    subject:  '',
    created_on: '',
    content: [
      {
        question: '',
        answer: ''
      }
    ]
  };

  subjects: any = [];
  questionsBank: any;

  question: string;
  answer: string;
  content: any = [];

  constructor(private crud: CrudOpsService) { }

  ngOnInit() {

    this.crud.readData('subjects').subscribe(data => {
      this.subjects = (data as any).result;
      //console.log((data as any).result);
    },
    err => {
      console.log(err);
      return false;
    });


  }

  setId(subject) {
    this.test.subject = subject._id;
    
    this.crud.questionBySub(subject).subscribe(data => {
      this.questionsBank = ((data as any).result);
      console.log((data as any).result);
    },
    err => {
      console.log(err);
      return false;
    });

  }

  onAddQA() {

    const newQA = {
      question: this.question,
      answer: this.answer
    };
    this.content.push(newQA);
    this.question = null;
    this.answer = null;
  }

  removeQA(i) {
    this.content.pop(i);
  }

  onCreateTest() {
    this.test.content = this.content;
    console.log(this.test);
    this.crud.createData('test', this.test).subscribe(data => {
      console.log(data);
    },
    err => {
      console.log(err);
    });
  }

  add(question) {
    this.content.push(question);
    this.questionsBank.pop(question);
  }

}
