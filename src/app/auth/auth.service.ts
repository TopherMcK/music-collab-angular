import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth-config';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor() { }

    get authenticated(): boolean {
        // placeholder while building ui
        return false;
    }

}
