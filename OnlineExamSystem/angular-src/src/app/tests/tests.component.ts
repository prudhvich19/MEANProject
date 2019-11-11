import { Component, OnInit } from '@angular/core';
import { Router, Route} from '@angular/router';

import { CrudOpsService } from '../services/crud-ops.service';
import { ShowTestService } from '../services/show-test.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tests: any;

  etest: any = {
    content: ''
  };

  dtest: any;


  constructor(
    private crud: CrudOpsService,
    private router: Router,
    private testService: ShowTestService
    ) { }

  ngOnInit() {
    this.crud.readData('tests').subscribe(data => {
      this.tests = (data as any).result;
    },
    err => {
      console.log(err);
      return false;
    });
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

  editloadData(test) {
    this.etest = test;
  }

  deleteloadData(test) {
    this.dtest = test;
  }

  goToDetails(test) {

   console.log('component');
   console.log(test);
   this.testService.changeTest(test);
   this.router.navigate(['tests/testDetails']);
  }

  goToEdit(test) {
    console.log('component');
    console.log(test);
    this.testService.changeTest(test);
    this.router.navigate(['tests/edit']);
  }

}
