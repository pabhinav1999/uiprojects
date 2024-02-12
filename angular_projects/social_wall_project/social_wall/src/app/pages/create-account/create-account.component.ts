import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm : any;
  snackBarRef: any;

  constructor( private fb: FormBuilder, public userService: UsersService, private _snackBar: MatSnackBar, private router: Router) { }

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
    this.userService.user = response[0];
    this.router.navigate(['/posts']);
    this.openSnackBar('Account created Succesfully', 'Ok', 2000);
    console.log('User account created succesfully')
  });;
}

openSnackBar(message: string, action: string, duration : number){
  this.snackBarRef = this._snackBar.open(message,action, {duration: duration});

  // this.snackBarRef.afterDismissed().subscribe(()=> {
  //   this.router.navigate(['/login']);
  // })

}






}
