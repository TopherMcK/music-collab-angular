import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
    styles: [
        `.navbar-right { margin-right:0px !important}`
    ]
})
export class AppComponent {
  title = 'Placeholder!!!';
}
