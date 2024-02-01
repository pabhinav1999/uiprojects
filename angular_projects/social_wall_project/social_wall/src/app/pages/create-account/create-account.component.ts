import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm : any;

  constructor( private fb: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
    this.initialiseForm();
  }
 
  initialiseForm(){
  this.createAccountForm = this.fb.group ({
    email: ['',[Validators.required, Validators.email]],
    userName: ['',[Validators.required,Validators.maxLength(10)]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  })

}

createUser() {
  console.log(this.createAccountForm.value)
  this.userService.createNewUser(this.createAccountForm.value).subscribe((response)=>{
    console.log('User account created succesfully')
  });;
}




}
