import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="default_Grid">
        <h1 class="logo">Musicollab</h1>

        <span class="welcomeMsg">
            Hi, welcome to Musicollab! An social community made of musicians looking for others to jam out with. Please begin by logging in or Signing up!
        </span>

        <div class="containerUser">
            <p class="errorMsgPw">Error Message</p>
            Username: <input type="text" name="password" class="password"/>
        </div>

        <div class="containerPass">
            <p class="errorMsgUsr">Error Message</p>
            Password: <input type="password" name="username" class="username"/>
        </div>

        <input type="button" value="Login" name="Login" class="submitButton">

        <nav *ngIf="false" class="navbar navbar-default">
            <div class="default_grid">
                <a class="navbar-brand" routerLink="/dashboard"></a>
            </div>
            <ul class="nav navbar-nav">
                <li>
                    <a *ngIf="false">Home</a>
                </li>
                <li>
                    <a *ngIf="false">Profile</a>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a *ngIf="false">Log Out</a>
                </li>
            </ul>
        </nav>
        <div class="col-sm-12">
<router-outlet></router-outlet>
        </div>
    </div>
    `,
    styles: [
        `.navbar-right { margin-right: 0px !important }`
    ]
})
export class AppComponent {
    title = 'Placeholder!!!';
    constructor() {}
}
