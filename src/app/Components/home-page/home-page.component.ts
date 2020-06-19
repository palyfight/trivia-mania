import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})



export class HomePageComponent implements OnInit {


  title = 'Trivia Mania';
  background = 'TriviaMania/bg-img2.jpg';
  isOptionShown = false;  

  constructor() { 
    
  }

  showOptionContent() {
    this.isOptionShown = !this.isOptionShown;
  }

  ngOnInit(): void {
  }

  displayLogIn(){}

  displayRegister(){}
  

}
