import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="default_Grid">
TEST
        <h1 class="logo">Musicollab</h1>

        <input type="text" name="username" class="input"/>

        <input type="password" name="password" class="input"/>

        <input type="button" value="Login" name="Login" class="button">

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
