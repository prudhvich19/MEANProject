import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrudOpsService {

  constructor(private http: HttpClient) { }

  readData(collection) {
    const connUrl = 'http://localhost:3000/home/' + collection;
    return this.http.get(connUrl);
  }

  createData(collection, object) {
    const connUrl = 'http://localhost:3000/home/' + collection + '/create';
    return this.http.post(connUrl, object);

  }

  updateData(collection, object) {
    const connUrl = 'http://localhost:3000/home/' + collection + '/' + `${object._id}` + '/update';
    return this.http.post(connUrl, object);
  }

  deleteData(collection, object) {
    const connUrl = 'http://localhost:3000/home/' + collection + '/' + `${object._id}` + '/delete';
    return this.http.post(connUrl, object);
  }


  questionBySub(object) {
    const connUrl = 'http://localhost:3000/home/question/subject/' + `${object._id}` ;
    return this.http.get(connUrl);
  }

  testBySub(object) {
    const connUrl = 'http://localhost:3000/home/test/subject/' + `${object._id}` ;
    return this.http.get(connUrl);
  }

  readPinnedTetsts(object) {
    const connUrl = 'http://localhost:3000/users/' + `${object._id}` + '/pinnedtests';
    return this.http.get(connUrl);
  }
}
