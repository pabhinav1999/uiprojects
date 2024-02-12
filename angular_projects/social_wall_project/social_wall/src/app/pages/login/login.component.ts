import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { log } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : any;
  snackBarRef: any;


  constructor( private fb : FormBuilder, private userService:UsersService, private _snackBar: MatSnackBar,private router: Router) { }

  ngOnInit(): void {
    this.initailiseForm();
  }

  initailiseForm(){
  this.loginForm = this.fb.group ( {
    email : ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


}

openSnackBar( message: string ,action?: string | undefined){
  this.snackBarRef = this._snackBar.open(message,action, { duration: 10000})

  console.log(this.snackBarRef)
  this.snackBarRef.onAction().subscribe(()=>{
    if( action === 'Create')
    console.log('You can create account');
    
    if( action === 'Try Again')
    console.log('You van try again');
  })
}


 getUserDetails (email: string){
   this.userService.getUsers(email).subscribe((users)=>{
    console.log(users);
    if(users.length === 0){
      console.log('account not exist');
      this.openSnackBar('Account not exist','Create');
    } else if(users[0].password !== this.loginForm.value.password){
      console.log('please enter the password again');
      this.openSnackBar('Please enter password again','Try Again');
    } else {
      this.userService.user = users[0];
      this.router.navigate(['/posts'])
      this.openSnackBar('Login Succesful');
      console.log('login succesful');
    }
   })
}

}
