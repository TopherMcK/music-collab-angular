import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <nav class="navbar-header">
            <div class="navbar-header">
                <a class="navbar-brand" routerLink="/dashboard"></a>
            </div>
            <ul class="nav navbar-nav">
                <li>
                    <a routerLink="/Home" routerLinkActive="active">Home</a>
                </li>
                <li>
                    <a routerLink="/Profile" routerLinkActive="active">Profile</a>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a>Log Out</a>
                </li>
            </ul>
        </nav>
        <div class="col-sm-12">
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    styles: [
        `.navbar-right { margin-right:0px !important}`
    ]
})
export class AppComponent {
    title = 'Placeholder!!!';
    constructor() {}
}
