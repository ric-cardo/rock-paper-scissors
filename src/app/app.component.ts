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

  constructor(
    public dialog: MdDialog,
    public gameService :GameService
  ){}

  play(gesture1){
    const gesture2 =  this.gameService.getRandomGesture();
    const result = this.gameService.getResult(gesture1,gesture2);

    this.dialog.open(ResultComponent,{
      data:{
        gesture1,
        gesture2,
        result
      }
    });
  }
}
