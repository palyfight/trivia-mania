import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard-page.component.html',
  styleUrls: ['./leaderboard-page.component.scss']
})
export class LeaderboardPageComponent implements OnInit {

  lbColumns: string[] = ['rank', 'username', 'category', 'score', 'date'];
  dataSource = []



  constructor(public leaderBoardData : UsersService) {
    this.dataSource = this.leaderBoardData.getLeaderboardData()
   }

  ngOnInit(): void {
  }

}

