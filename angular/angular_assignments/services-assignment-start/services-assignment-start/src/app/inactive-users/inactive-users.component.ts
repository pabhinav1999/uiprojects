import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
   users: string[];

   constructor(private userservice:UsersService){
   }

   ngOnInit(){
    this.users = this.userservice.inactiveUsers;
   }

  onSetToActive(id: number) {
    this.userservice.onSetToActive(id);
  }
}
