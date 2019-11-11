import { Component, OnInit } from '@angular/core';

import { ShowTestService } from '../services/show-test.service';
import { CrudOpsService } from '../services/crud-ops.service';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {

  /*test = {
    test_name: '',
    subject:  {
      sub_name: '',
      sub_code: ''
    },
    created_on: '',
    content: [
      {
        question: '',
        answer: ''
      }
    ]
  };*/

  test: any;

  question: string;
  answer: string;
  content: any = [];

  constructor(
    private testService: ShowTestService,
    private crud: CrudOpsService
    ) { }

  ngOnInit() {
    this.testService.currentTest.subscribe(test => this.test = test);
    this.content = this.test.content;
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

  onUpdateTest() {
    this.test.content = this.content;
    console.log(this.test);
    this.crud.updateData('test', this.test).subscribe(data => {
      console.log(data);
    },
    err => {
      console.log(err);
    });
  }

}
