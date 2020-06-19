import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  lbColumns: string[] = ['rank', 'username', 'category', 'score', 'date'];
  dataSource = []



  constructor(public leaderBoardData : UsersService) {
    this.dataSource = this.leaderBoardData.getLeaderboardData()
   }

  ngOnInit(): void {
  }

}

