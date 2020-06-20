import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})



export class HomePageComponent implements OnInit {


  title = 'Trivia Mania';
  background = 'TriviaMania/bg-img2.jpg';
 

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  displayLogIn(){}

  displayRegister(){}
}
