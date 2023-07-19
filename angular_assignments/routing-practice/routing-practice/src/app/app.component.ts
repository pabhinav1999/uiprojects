import { Component } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-practice';

  constructor(private authService:AuthGuardService){}
  loginToWeb(){
    this.authService.logIn();
  }
  
  logOutWeb(){
     this.authService.logOut();
  }
}


