import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";


@Component ( {
  selector: 'app-topbar',
  templateUrl:'./topbar.component.html',
  styleUrls: ['./topbar.component.css']
})


export class TopBarComponent {

  constructor(private router: Router, public userService:UsersService){
    
  }

  onLogOutClicked(){
    this.router.navigate(['/']);
    this.userService.user = undefined;
    localStorage.clear();
    console.log('logout clicked');
  }


}