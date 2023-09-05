import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('f') signUpForm:NgForm;
  message = 'Hi';
  genders = ['male','female'];
   formData : {
    username : string,
    gender: string,
    email: string
  } = {
    username:'',
    gender:'',
    email:''
  }

  suggestUserName() {
    this.signUpForm.setValue({
      usd:{
        username:'Ravi',
        email:'ra@df'
      },
      secret:'teacher',
      gender:'male',
      message:'hlo'
    })

    this.signUpForm.form.patchValue( {gender:'female'});
  }

  getFormUserData(){
    
   }

  onSubmit(){
    this.formData.username = this.signUpForm.form.value.usd.username;
    this.formData.gender = this.signUpForm.form.value["gender"];
    this.formData.email = this.signUpForm.form.value['usd']['email'];
    console.log(this.formData);
    console.log(this.signUpForm);

    this.signUpForm.reset();
  }
}
