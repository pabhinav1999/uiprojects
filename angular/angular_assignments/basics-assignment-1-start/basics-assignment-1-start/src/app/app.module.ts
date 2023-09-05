import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningAlert } from './warning/warning-alert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { ErrorclassComponent } from './errorclass/errorclass.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SuccessalertComponent,
    ErrorclassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
