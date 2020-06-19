import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() optionContent: boolean; 

   optionList = [
    { name: 'Rules',
      clicked: false
    },
    { name: 'Leaderboard',
      clicked: false
    },    
    { name: 'Settings',
      clicked: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
