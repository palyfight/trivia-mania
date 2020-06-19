import { Component, OnInit, Input } from '@angular/core';

export interface BestScorers {
  rank: number;
  username: string;
  score: number;
  category: string;
  date: string;
}

  const SCORER_DATA: BestScorers[] = [
    { rank: 1,
      username: 'michelicious', 
      score: 280,
      category: 'General',
      date: '2020-06-20'
    },
    { rank: 2,
      username: 'Dankest', 
      score: 270,
      category: 'General',
      date: '2020-06-20'
    },
    { rank: 3,
      username: 'palyfight', 
      score: 260,
      category: 'General',
      date: '2020-06-20'
    },
  ]

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  lbColumns: string[] = ['rank', 'username', 'category', 'score', 'date'];
  dataSource = SCORER_DATA;



  constructor() { }

  ngOnInit(): void {
  }

}

