import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { TestsComponent } from '../tests/tests.component';
import { ShowTestService } from '../services/show-test.service';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  test: any = {
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
  };

  constructor(
    private testService: ShowTestService
  ) { }

  ngOnInit() {
    this.testService.currentTest.subscribe(test => this.test = test);
  }

}
