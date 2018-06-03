import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    MatButtonModule 
    ],
  declarations: [ 
    AppComponent, 
    MessageComponent, 
    HeaderComponent 
    ],
  bootstrap:    [ 
    AppComponent
     ],
  exports:      [
    MatButtonModule
  ]
})
export class AppModule { }
