import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";


@Component ( {
  selector: 'app-topbar',
  templateUrl:'./topbar.component.html',
  styleUrls: ['./topbar.component.css']
})


export class TopBarComponent implements OnInit {

  constructor(private router: Router, public userService:UsersService){
    
  }



  ngOnInit(): void {
    
  }

  


  onLogOutClicked(){
    console.log(this.userService.user);
    this.router.navigate(['/']);
    this.userService.user = undefined;
    localStorage.clear();
    console.log('logout clicked');
  }
 

}