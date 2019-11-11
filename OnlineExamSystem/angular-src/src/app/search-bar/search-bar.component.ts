import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { CrudOpsService } from '../services/crud-ops.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  subjects$: Observable<object[]>;
  private searchTerms = new Subject<string>();


  constructor(
    private crud: CrudOpsService
  ) { }


  search(term: string): void {
    this.searchTerms.next(term);
    console.log(term);
  }

  ngOnInit(): void {
    (this.subjects$ as any) = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.crud.readData('test')),
    );

    console.log(this.subjects$);
  }

}
