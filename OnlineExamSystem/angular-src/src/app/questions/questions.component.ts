import { Component, OnInit } from '@angular/core';

import { CrudOpsService } from '../services/crud-ops.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: any;
  subjects: any;

  question; string;
  answer: string;
  subjectId: string;

  equestion = {
    question: '',
    answer: ''
  };

  dquestion: any;

  constructor(private crud: CrudOpsService) { }

  ngOnInit() {

    this.crud.readData('questions').subscribe(data => {
      this.questions = (data as any).result;
     //console.log((data as any).result[0].subject);
      //console.log(this.questions);
    },
    err => {
      console.log(err);
      return false;
    });

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
    this.subjectId = subject._id;
  }

  onCreateQA() {
    const newQuestion = {
      question: this.question,
      answer: this.answer,
      subject: this.subjectId
    };

    this.crud.createData('question', newQuestion).subscribe(data => {
      this.questions.push( (data as any).result);
      //console.log(data);
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onEditQA() {
    console.log(this.equestion);
    this.crud.updateData('question', this.equestion).subscribe(data => {
     // console.log(data);
    },
    err => {
      console.log(err);
      return false;
    });
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

  editloadData(question) {
    //console.log(question);
    this.equestion = question;

  }

  deleteloadData(question) {
    this.dquestion = question;
  }

}
