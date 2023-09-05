import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  loggedIn:boolean = false;
  constructor() { }

  logIn(){
    this.loggedIn = true;
  }
  logOut(){
    this.loggedIn = false;
  }

  isAuthenticate(){
    return this.loggedIn;
  }
}
