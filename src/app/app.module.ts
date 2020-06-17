import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrivaButtonComponent } from './triva-button/triva-button.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  {path: 
    '**',
    component : HomePageComponent
   }
]

@NgModule({
  declarations: [
    AppComponent,
    TrivaButtonComponent,
    HomePageComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
