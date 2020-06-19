import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})



export class HomePageComponent implements OnInit {


  title = 'Trivia Mania';
  background = 'TriviaMania/bg-img2.jpg';
 

  constructor(public dialog: MatDialog) {}

  openDialogLogIn() {
  this.dialog.open(LoginComponent);}

  openDialogRegister() {
    this.dialog.open(RegistrationComponent);}

  ngOnInit(): void {
  }

  displayLogIn(){}

  displayRegister(){}
  

}
