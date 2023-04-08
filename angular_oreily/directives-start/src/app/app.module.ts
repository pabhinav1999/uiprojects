import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { basicHighlight } from './basic-highlight-directive/basicHighlight.directive';
import { BetterhighlightDirective } from './betterhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    basicHighlight,
    BetterhighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
