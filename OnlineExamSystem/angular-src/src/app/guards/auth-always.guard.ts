import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthAlways implements CanActivate {
    canActivate() {
        console.log('Always Authenticate');
        return true;
    }
}
