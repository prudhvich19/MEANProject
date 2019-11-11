import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Form } from '@angular/forms';
import { FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  test: object = {
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

  testForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
      testName : ['', Validators.required],
      subject: ['', Validators.required],
      createdOn: ['', Validators.required],
      content: this.fb.array([{
               question: [''],
               answer: ['']
               }], Validators.required)
              });
  }


  ngOnInit() {
  }

  get tf() {
    return this.testForm.controls;
  }

  get content() {
    return this.testForm.get('content') as FormArray;
  }

  addNewQA() {
    this.content.push(this.fb.control(''));
  }



}
