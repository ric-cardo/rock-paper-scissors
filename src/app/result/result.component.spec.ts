import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MdDialogModule, 
  MD_DIALOG_DATA,
  MdDialogRef,
} from '@angular/material';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let dialogData;
  beforeEach(async(() => {
    dialogData = {result:'win',gesture1:'rock',gesture2:'scissors'};

    TestBed.configureTestingModule({
      declarations: [ ResultComponent ],
      imports:[
        BrowserAnimationsModule,
        MdDialogModule,
      ],
      providers:[
        { provide: MdDialogRef, useValue: {} },
        { provide: MD_DIALOG_DATA, useValue: dialogData }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit()', () => {
    
    it('should set title from injected data', () => {
      const expected = "you win"
      let actual = component.title;

      expect(actual).toBe(undefined);
      
      fixture.detectChanges();
      actual = component.title;

      expect(expected).toBe(actual);
    });

    it('should set gesture1 from injectd data', () => {
      const expected = '✊';
      let actual = component.gesture1
      
      expect(actual).toBe(undefined);
      
      fixture.detectChanges();
      actual = component.gesture1;
      expect(expected).toBe(actual);
    });

    it('should set gesture2 from injected data', () => {
      const expected = '✌️';
      let actual = component.gesture2
      
      expect(actual).toBe(undefined);
      
      fixture.detectChanges();
      actual = component.gesture2;
      expect(expected).toBe(actual);
    });
  });

  describe('getTitle()', () => {
    
    it('should return "you win" when result is a win', () => {
      const expected = "you win"
      const actual = component.getTitle('win');

      expect(expected).toBe(actual);
    });

    it('should return "you lose" when result is lost', () => {
      const expected = "you lose"
      const actual = component.getTitle('lose');

      expect(expected).toBe(actual);
    });

    it('should return "draw" when result is a draw', () => {
      const expected = "draw"
      const actual = component.getTitle('draw');

      expect(expected).toBe(actual);
    });
      
  });
    
});
