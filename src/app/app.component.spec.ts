import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { GameService } from './game.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ResultComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
      ],
      providers:[GameService],
      
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ ResultComponent ],
      },
    }).compileComponents()
    
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'rock paper scissors'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rock paper scissors');
  }));

  
  describe('play()', () => {

    it('should get game result',() =>{
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.debugElement.componentInstance;
      
      spyOn(component.gameService,'getResult');
      spyOn(component.gameService,'getRandomGesture').and.returnValue('scissors');
      component.play('rock');

      expect(component.gameService.getResult).toHaveBeenCalledWith('rock','scissors')
    })
    
    it('should open game result in dialog', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.debugElement.componentInstance;
      
      spyOn(component.dialog,'open')

      spyOn(component.gameService,'getResult').and.returnValue('win');
      spyOn(component.gameService,'getRandomGesture').and.returnValue('scissors');
      component.play('rock');

      expect(component.dialog.open).toHaveBeenCalledWith(
        ResultComponent,
        {
          data:{
            gesture1:'rock',
            gesture2:'scissors',
            result:'win'
          }
        }
      );
    });
      
  });
    
});
