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

  describe('ngInit()', () => {
    
    it('should set stats to stored stats value', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.debugElement.componentInstance;
      const expected = {win:11,draw:1,lose:0};
      let actual;

      spyOn(component.gameService,'getStats').and.returnValue({win:11,draw:1,lose:0});
      
      component.ngOnInit();
      actual = component.stats;
      
      expect(expected).toEqual(actual);
    });
      
  })
  
  describe('play()', () => {

    it('should get game result',() =>{
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.debugElement.componentInstance;
      component.stats = {win:0,draw:0,lose:0};

      spyOn(component.gameService,'getResult');
      spyOn(component.gameService,'getRandomGesture').and.returnValue('scissors');
      component.play('rock');

      expect(component.gameService.getResult).toHaveBeenCalledWith('rock','scissors')
    })
    
    it('should open game result in dialog', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.debugElement.componentInstance;
      component.stats = {win:0,draw:0,lose:0};

      spyOn(component.dialog,'open')

      spyOn(component.gameService,'getResult').and.returnValue('win');
      spyOn(component.gameService,'getRandomGesture').and.returnValue('scissors');
      component.play('rock');

      expect(component.dialog.open).toHaveBeenCalledWith(
        ResultComponent,
        {
          width:jasmine.any(String),
          data:{
            gesture1:'rock',
            gesture2:'scissors',
            result:'win'
          }
        }
      );
    });

    it('should update and save result to stats', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.debugElement.componentInstance;
      
      component.stats = {win:0,draw:0,lose:0};
      spyOn(component.gameService,'saveStats')

      spyOn(component.gameService,'getResult').and.returnValue('win');
      spyOn(component.gameService,'getRandomGesture').and.returnValue('scissors');
      component.play('rock');

      expect(component.stats.win).toBe(1);
      expect(component.gameService.saveStats)
        .toHaveBeenCalledWith(
          {win:1,draw:0,lose:0}
        );
    });

    
      
  });

  describe('reset()', () => {
    
    it('should reset stats to default value', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.debugElement.componentInstance;
      const expected = {win:0,draw:0,lose:0};
      let actual;

      component.stats = {win:11,draw:1,lose:0};

      spyOn(component.gameService,'getStats').and.returnValue({win:0,draw:0,lose:0});
      
      component.reset();
      actual = component.stats;
      
      expect(expected).toEqual(actual);
    });
      
  })
    
});
