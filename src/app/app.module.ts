import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MdToolbarModule, 
  MdButtonModule,
  MdDialogModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdDialogModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
