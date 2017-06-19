import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  private outcomes = {
    rock :{
      rock:'draw',
      paper:'lose',
      scissors:'win'
    },
    paper :{
      rock:'win',
      paper:'draw',
      scissors:'lose'
    },
    scissors :{
      rock:'lose',
      paper:'win',
      scissors:'draw'
    } 
  }
  private options = ['rock','paper','scissors'];

  constructor() {}

  getResult(gesture1,gesture2){
     return this.outcomes[gesture1][gesture2];
  }

  getRandomGesture(){
   const index = Math.floor(Math.random()*this.options.length);
   
   return this.options[index];
  }

  getStats(){
    return JSON.parse(window.localStorage.getItem('stats')) || {win:0,draw:0,lose:0};
  }

  saveStats(stats){
    window.localStorage.setItem('stats',JSON.stringify(stats));
  }

  resetStats(){
   this.saveStats( {win:0,draw:0,lose:0});
  }



}
