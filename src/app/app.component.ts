import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="default_Grid">
        <nav *ngIf="false" class="navbar navbar-default">
            <div class="navbar-header">
                <a class="navbar-brand" routerLink="/dashboard"></a>
            </div>
            <ul class="nav navbar-nav">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Profile</a>
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
