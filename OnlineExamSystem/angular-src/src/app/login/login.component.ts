import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';


import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;

  errors: string;

  constructor(
    private authService: AuthService,
    private router: Router
            ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password : this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
     if ((data as any).success) {
        this.authService.storeUserData((data as any).token, (data as any).user);
        console.log('You are now logged in');
        this.router.navigate(['home']);

     } else {
        if (( data as any).msg === 'User not found') {
            this.errors = 'User not found';
        } else if (( data as any).msg === 'Wrong password') {
          this.errors = 'Wrong password';
        }
     }
    });
  }
}
