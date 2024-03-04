import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor( private router: Router, public userService: UsersService) { }

  ngOnInit(): void {
       if(!this.userService.user){
        let user = localStorage.getItem('user');
        if(user){
          this.userService.user = JSON.parse(user);
        }else{
        this.router.navigate(['/login']);
        }
       }
  }

}
