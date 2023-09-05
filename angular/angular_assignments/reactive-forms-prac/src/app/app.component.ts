import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder){}

  regForm = this.fb.group({
    username: ['Abhinav',Validators.required],
    password:['Abhinav'],
    confirmpassword:['Abhinav'],
    address:this.fb.group({
      city:['Hyd'],
      state:['telangana']
    })
})
  //  regForm = new FormGroup({
  //    username: new FormControl('Abhinav'),
  //    password: new FormControl('Abhinav'),
  //    confirmpassword: new FormControl('Abhinav'),
  //    address:new FormGroup({
  //     city:new FormControl('Hyderabad'),
  //     state: new FormControl('Telangana')
  //    })
  //  }) 


   
   loadApiData(){
    this.regForm.setValue({
      username : 'Vishal',
      password: 'Vishal',
      confirmpassword: 'Vishal',
      address:{
        city:'Hyd',
        state:'TG'
      }
    })
   }
}
