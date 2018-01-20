import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FindCollabComponent } from './find-collab/find-collab.component';
import { CallbackComponent } from './callback.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FindCollabComponent,
    CallbackComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
