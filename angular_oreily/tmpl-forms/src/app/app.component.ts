import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('f') signUpForm: NgForm | undefined ;
  title = 'tmpl-forms';

  onSubmitForm(){
    console.log(this.signUpForm);
  }

  ngOnInit(){
    
  }

  
}

