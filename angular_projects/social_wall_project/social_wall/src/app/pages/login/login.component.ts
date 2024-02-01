import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : any;

  constructor( private fb : FormBuilder, private userService:UsersService) { }

  ngOnInit(): void {
    this.initailiseForm();
  }

  initailiseForm(){
  this.loginForm = this.fb.group ( {
    email : ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


}



 getUserDetails (email: string){
   this.userService.getUsers(email).subscribe((users)=>{
    console.log(users);
    if(users.length === 0){
      
    }
   })
}




}
