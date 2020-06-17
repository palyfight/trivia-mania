import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrivaButtonComponent } from './Components/triva-button/triva-button.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { MenuComponent } from './Components/menu/menu.component';
import {RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LeaderboardComponent } from './Components/leaderboard/leaderboard.component';

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
    MenuComponent,
    NavComponent,
    FooterComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
