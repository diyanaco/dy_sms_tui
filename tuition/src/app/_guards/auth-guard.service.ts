import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from 'app/_services/user-auth.service';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private url: string
    constructor(
        private router: Router,
        private userAuth: UserAuthService,
    ) { }

    private authState(): boolean {
        if (this.isLoginOrRegister()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }

    private isLoginOrRegister(): boolean {
        if (this.url.includes('/login') || this.url.includes('/signup')) {
            return true;
        }
        return false;
    }

    private notAuthState(): boolean {
        if (this.isLoginOrRegister()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.url = state.url;
        console.log(this.url)
        if (this.userAuth.isAuthenticated()) {
            return this.authState();
        }
        return this.notAuthState();
    }
}