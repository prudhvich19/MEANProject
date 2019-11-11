import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {CrudOpsService  } from './crud-ops.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  subjects: any = [];

  constructor( private http: HttpClient, private crud: CrudOpsService) {
    this.subjects = this.crud.readData('subject');
    console.log(this.subjects);
  }




  searchSubjectss(term: string): Observable<object[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    } else {
      //return (this.subjects as Observable<object[]>).forEach()
    }
    
  }
}
