import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService} from '../services/validate.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  username: string;
  email: string;
  password: string;

  model: any = {};

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    console.log(this.name + this.email + this.username + this. password);
    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      console.log('Please fill in all fields');
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      console.log('Please use a valid email');
      return false;
    }

    // Register user
    //console.log('component ' + user.name);
    /*this.authService.registerUser(user).subscribe(data => {
      if ((data as any).success) {
        console.log('You are now registered and can log in');
        this.router.navigate(['/login']);
      } else {
        console.log('Something went wrong');
        this.router.navigate(['/register']);
      }
    });*/

  }

  onSubmit() {
    console.log(this.model);
    this.authService.registerUser(this.model).subscribe(data => {
      if ((data as any).success) {
        console.log('You are now registered and can log in');
        this.router.navigate(['/login']);
      } else {
        console.log('Something went wrong');
        this.router.navigate(['/register']);
      }
    });
  }


}
