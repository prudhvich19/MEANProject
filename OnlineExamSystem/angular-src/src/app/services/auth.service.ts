import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService  } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authToken: any;
  user: any;

 helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  registerUser(user) {
    //console.log('service ' + user.name + user.email);
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: header});
  }

  authenticateUser(user) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: header});
  }

  getProfile() {
    this.loadToken();
    console.log('AuthToken ' + this.authToken);
    let header = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: this.authToken
    });
    return this.http.get('http://localhost:3000/users/profile', {headers: header});
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedOut() {
    let bool = this.helper.isTokenExpired(this.authToken);
    console.log('bool ' + bool);
    return bool;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}

