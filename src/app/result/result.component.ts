import { Component, OnInit, Inject } from '@angular/core';

import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  title;
  gesture1;
  gesture2;
  gestures = {
    rock:'✊',
    paper:'✋',
    scissors:'✌️'
  }

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.title = this.getTitle(this.data.result);
    this.gesture1 = this.gestures[this.data.gesture1];
    this.gesture2 = this.gestures[this.data.gesture2];
  }

  getTitle(result){
    return result === 'draw' ? result : `you ${result}`
  }

  isScissors(gesture){
    return gesture === '✌️';
  }

}
