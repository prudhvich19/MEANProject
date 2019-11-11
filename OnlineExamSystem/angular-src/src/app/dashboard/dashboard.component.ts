import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudOpsService } from '../services/crud-ops.service';
import { ShowTestService } from '../services/show-test.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tests: any;

  constructor(
    private crud: CrudOpsService,
    private showTest: ShowTestService,
    private router: Router
  ) { }

  ngOnInit() {

    this.crud.readData('tests').subscribe(data => {
      this.tests = ((data as any).result).slice(0, 5);
    },
    err => {
      console.log(err);
    });
  }

  goToDetails(test) {

    this.showTest.changeTest(test);
    this.router.navigate(['tests/edit']);

  }

}
