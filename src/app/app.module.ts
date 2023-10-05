import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UnepersonneComponent } from './unepersonne/unepersonne.component';


@NgModule({
  declarations: [
    AppComponent,

    UnepersonneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
