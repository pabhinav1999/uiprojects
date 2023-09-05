import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1 } from './component1/component1.component';
import { LifecycledemoComponent } from './lifecycledemo/lifecycledemo.component';
import { CustPipe } from './cust.pipe';
import { DirectivePracComponent } from './directive-prac/directive-prac.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { StudentService } from './student.service';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    LifecycledemoComponent,
    CustPipe,
    DirectivePracComponent,
    HighlightDirective,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
