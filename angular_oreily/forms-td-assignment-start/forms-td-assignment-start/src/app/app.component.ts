import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('f') signUpForm:NgForm
defaultemail = 'abhinav@34e5';
defaultdropedownvalue = 'Advanced';
formData :{
  email:string,
  level:string,
  password:string
} = {
  email:'',
  level:'',
  password:''
}

  onSubmit(){
    console.log('hi');
    console.log(this.signUpForm);
    this.formData.email = this.signUpForm.controls.email.value;
    this.formData.level = this.signUpForm.controls.level.value;
    this.formData.password = this.signUpForm.controls.password.value;
    console.log(this.formData);
    this.signUpForm.setValue(this.formData);
    this.signUpForm.form.patchValue({email:'acd@45'});
    
  }
}
