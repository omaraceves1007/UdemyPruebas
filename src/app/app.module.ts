import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent
  ],
  imports: [
    BrowserModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
