import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { CrudOpsService } from '../services/crud-ops.service';
import { ShowSubjectService } from '../services/show-subject.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})

export class SubjectsComponent implements OnInit {

  subjects: any;
  esubject = {
    sub_name: '',
    sub_code: '',
  };
  dsubject: any;

  sub_name: string;
  sub_code: string;

  constructor(
    private crud: CrudOpsService,
    private curSub: ShowSubjectService,
    private router: Router
    ) { }

  ngOnInit() {

   this.crud.readData('subjects').subscribe(data => {
      this.subjects = (data as any).result;
    },
    err => {
      console.log(err);
      return false;
    });

  }

  onCreateSubject() {

    const newSubject = {
      sub_name: this.sub_name,
      sub_code: this.sub_code
    };

    this.crud.createData('subject', newSubject).subscribe(data => {
      this.subjects.push( (data as any).result);
      console.log(data);
    },
    err => {
      console.log(err);
      return false;
    });

  }


  onEditSubject() {
    console.log(this.esubject);
    this.crud.updateData('subject', this.esubject).subscribe(data => {
      console.log(data);

    },
    err => {
      console.log(err);
      return false;
    });
  }


  onDeleteSubject() {

    this.crud.deleteData('subject', this.dsubject).subscribe(data => {
      this.subjects.pop(this.dsubject);
      console.log(data);
    },
    err => {
      console.log(err);
      return false;
    });

  }


  editloadData(subject) {
    this.esubject = subject;
  }


  deleteloadData(subject) {
    this.dsubject = subject;
    console.log(this.dsubject);
  }

  goToDetails() {

    console.log('component');
    this.curSub.changeSubject(this.dsubject);
    this.router.navigate(['subjects/subjectDelete']);
   }
}
