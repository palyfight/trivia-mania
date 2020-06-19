import { Injectable } from '@angular/core';

export interface BestScorers {
  rank: number;
  username: string;
  score: number;
  category: string;
  date: string;
}

  const LEADERBOARD_DATA: BestScorers[] = [
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

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  leaderboardData = LEADERBOARD_DATA; 

  constructor() { }

  getLeaderboardData() {
    return this.leaderboardData;
  }
}
