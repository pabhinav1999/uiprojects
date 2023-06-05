import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  signUpForm:FormGroup;
  forbiddenUserNames = ['Christina','Anna'];

  ngOnInit(): void {
      this.signUpForm = new FormGroup({
        'specificData': new FormGroup({ 'username': new FormControl(null,[Validators.required,this.vaildateForbiddenNames.bind(this)]),
        'email':new FormControl(null,[Validators.required,Validators.email])}),
        'gender':new FormControl('male',Validators.required),
        'hobbies':new FormArray([])
      })
  }

  onSubmit(){
    console.log(this.signUpForm);
  }
  get controls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  addHobbies(){
    const cntrl = new FormControl(null,Validators.required);
   (<FormArray>this.signUpForm.get('hobbies')).push(cntrl);
  }

  vaildateForbiddenNames(control:FormControl):{[s:string]:boolean}{
     if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'nameisForbidden':true}
     }

   return  null;
  }
}
