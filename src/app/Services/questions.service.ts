import { Injectable } from '@angular/core';

export interface Answers {
  text: string;
  position: number;  
  isCorrect: boolean; 
  color: string;  
}

const ANSWERS_DATA : Answers[] = [
  { text: 'Chien',
    position: 1,
    isCorrect: false,
    color: 'blue'
  },
  { text: 'Chat',
  position: 2,
  isCorrect: false,
  color: 'red'
  },
  { text: 'Perroquet',
  position: 3,
  isCorrect: false,
  color: 'yellow'
  },
  { text: 'Hamster',
  position: 4,
  isCorrect: true,
  color: 'vert'
  }
]

export interface Question {
  title: string;
    type: string;
    choiceA: Answers; 
    choiceB: Answers;
    choiceC: Answers;
    choiceD: Answers;
    category: string; 
    difficulty: string;
}

const QUESTIONS_DATA: Question[] = [
  { title: '',
    type: '',
    choiceA: ANSWERS_DATA[0],
    choiceB: ANSWERS_DATA[1],
    choiceC: ANSWERS_DATA[2],
    choiceD: ANSWERS_DATA[3],
    category: 'general',
    difficulty: 'easy'
  }  
]


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }
}
