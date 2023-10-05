import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListpersonnesComponent } from './listpersonnes/listpersonnes.component';
import { PersonneComponent } from './personne/personne.component';
import { UnepersonneComponent } from './unepersonne/unepersonne.component';


@NgModule({
  declarations: [
    AppComponent,
    ListpersonnesComponent,
    PersonneComponent,
    UnepersonneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
