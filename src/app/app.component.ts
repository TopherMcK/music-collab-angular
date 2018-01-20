import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="default_Grid">
        <h1 class="logo">Musicollab</h1>

        <span class="welcomeMsg">
            Hi, welcome to Musicollab! A social community made of musicians looking for others to jam out with. Please begin by logging in or Signing up!
        </span>

        <div class="containerUser">
            <p class="errorMsg">Error Message</p>
            Username: <input type="text" name="password" class="password"/>
        </div>

        <div class="containerPass">
            <p class="errorMsg">Error Message</p>
            Password: <input type="password" name="username" class="username"/>
        </div>

        <input type="button" value="Login" name="Login" class="submitButton">

        
        <div class="deQueen">
            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai"/>
            <span class="dewai">Home</span>

            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai2"/>
            <span class="dewai2">Contact</span>

            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai3"/>
            <span class="dewai3">About</span>

            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai4"/>
            <span class="dewai4">do u kno de wei??</span>

            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai5"/>
            <span class="dewai5">to hab de wai u must hab  E B O L A</span>

            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai6"/>
            <span class="dewai6">we must conqah</span>

            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai7"/>
            <span class="dewai7">*click**click**click**click**click**click*</span>

            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai8"/>
            <span class="dewai8">*spit**spit**spit**spit**spit**spit*</span>

            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai9"/>
            <span class="dewai9">MAH BRUDA</span>

            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai10"/>
            <span class="dewai10">i will MISS u</span>

            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai11"/>
            <span class="dewai11">false QUEEN</span>

            <img src="https://t00.deviantart.net/uVol_cEfEo8aXY2Bl4je1QIu-50=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/be35/th/pre/f/2018/008/6/b/i_know_de_wey_broddas__render__by_nintega_dario-dbzbzyl.png" class="dewai12"/>
            <span class="dewai12">u do not kno de wai</span>
        </div>

        <div class="footer">
            footer
        </div>

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
