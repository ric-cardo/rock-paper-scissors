import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { GameService } from './game.service';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rock paper scissors';
  stats;

  constructor(
    public dialog: MdDialog,
    public gameService :GameService
  ){}

  ngOnInit(){
    this.stats = this.gameService.getStats();
  }

  play(gesture1){
    const gesture2 =  this.gameService.getRandomGesture();
    const result = this.gameService.getResult(gesture1,gesture2);

    this.dialog.open(ResultComponent,{
      width:'200px',
      data:{
        gesture1,
        gesture2,
        result
      }
    });

    this.stats[result]++;
    this.gameService.saveStats(this.stats);
  }

  reset(){
    this.gameService.resetStats();
    this.stats = this.gameService.getStats();
  }
}
