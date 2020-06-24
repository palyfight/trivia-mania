import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LeaderboardPageComponent } from './Components/leaderboard-page/leaderboard-page.component';
import { SettingsPageComponent } from './Components/settings-page/settings-page.component';
import { RulesPageComponent } from './Components/rules-page/rules-page.component';
import { MenuComponent } from './Components/menu/menu.component';
import {RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './Components/nav/nav.component';
import { MaterialModule } from './Material/material.module';
import { UsersService } from './Services/users.service';
import { QuestionsService } from './Services/questions.service';
import { GameStartPageComponent } from './Components/game-start-page/game-start-page.component';
import { SearchUserComponent } from './Components/search-user/search-user.component';

const appRoutes: Routes = [
  {path: '', component : HomePageComponent},
  {path: 'rules-page', component : RulesPageComponent},
  {path: 'leaderboard-page', component : LeaderboardPageComponent},
  {path: 'settings-page', component : SettingsPageComponent},
  {path: 'game-start-page', component : GameStartPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegistrationComponent,
    LeaderboardPageComponent,
    SettingsPageComponent,
    RulesPageComponent,
    MenuComponent,
    NavComponent,
    GameStartPageComponent,
    SearchUserComponent,
    
  ],
  entryComponents: [RegistrationComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UsersService, QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
