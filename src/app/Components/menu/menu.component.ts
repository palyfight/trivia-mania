import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  optionComponent: string; 

   optionList = [
    { name: 'Rules',
      index: 0,
      clicked: false,
      component: ""
    },
    { name: 'Leaderboard',
      index: 1,
      clicked: false,
      component: "/leaderboard-page"
    },    
    { name: 'Settings',
      index: 2,
      clicked: false,
      component: ""
    }
  ]

  logTest(x) { console.log(x)}

  optionChange(index){
    switch(index) {
      case 0:
        this.optionComponent = this.optionList[0].component;
        console.log(this.optionList[0].component)
        break;
      case 1:
        this.optionComponent = this.optionList[1].component;
        console.log(this.optionList[1].component)
        break;
      case 2:
        this.optionComponent = this.optionList[2].component;
        console.log(this.optionList[2].component)
    }
}
  constructor() {
    this.optionComponent = "";
   }

  ngOnInit(): void {
  }

}
