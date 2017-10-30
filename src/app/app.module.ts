import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {bai3Component} from './Bai3/bai3.component';
import {bai5Component} from './Bai05/bai5.component';
import {bai6Component} from './Bai06/bai6.component';
@NgModule({
  declarations: [
    AppComponent,
    bai3Component, bai5Component, bai6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
