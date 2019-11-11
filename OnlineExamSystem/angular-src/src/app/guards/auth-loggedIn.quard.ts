import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthLoggedIn implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router) {}
        canActivate() {
        if (this.authService.loggedOut()) {
            window.alert("You don't have permission to view this page");
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }
}
