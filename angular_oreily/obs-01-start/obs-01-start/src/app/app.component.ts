import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isActivated = false;
  activateSubs:Subscription;
  constructor(private userService:UserService) {}

  ngOnInit() {
    this.activateSubs = this.userService.activated.subscribe((x)=>{
       this.isActivated = x;
    })
  }
}
