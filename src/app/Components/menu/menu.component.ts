import { Component, OnInit, Input } from '@angular/core';
import {ThemePalette} from '@angular/material/core'


export interface Option {
  name: string;
  position: number;
  route: string;
}

const optionChoices: Option[] = [
  { name: 'Rules',
    position: 0,
    route: '/rules-page'
  },
  { name: 'Leaderboard',
    position: 1, 
    route: '/leaderboard-page'},
  { name: 'Settings',
    position: 2,
    route: '/settings-page'}
]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  optionList = optionChoices;
  @Input() menuOption: Option; 
  activeLink = this.optionList[0];
  background: ThemePalette = 'primary';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

}
  
