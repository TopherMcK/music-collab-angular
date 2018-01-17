import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth-config';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
        clientID: AUTH_CONFIG.CLIENT_ID,
        domain: AUTH_CONFIG.CLIENT_DOMAIN,
        responseType: 'token id_token',
        redirectUri: AUTH_CONFIG.REDIRECT,
        audience: AUTH_CONFIG.AUDIENCE,
        scope: AUTH_CONFIG.SCOPE
    });

    userProfile: any;

    loggedIn: boolean;
    loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

    constructor(private router: Router) {
        if (this.authenticated) {
            this.userProfile = JSON.parse(localStorage.getItem('profile'));
            this.setLoggedIn(true);
        } else {
        }
    }

    setLoggedIn(value: boolean) {
        this.loggedIn$.next(value);
        this.loggedIn = value;
    }

    login() {
        this.auth0.authorize();
    }
    
    logout() {}

    get authenticated(): boolean {
        // placeholder while building ui
        return true;
    }

}
