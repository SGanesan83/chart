import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineComponent } from './line.component';
import { MultiLineComponent } from './multiline.component';


@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    MultiLineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
