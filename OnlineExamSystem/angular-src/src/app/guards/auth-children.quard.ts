import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthChildrenAlways implements CanActivateChild {
    constructor() { }

    canActivateChild() {
        return true;
    }

}
