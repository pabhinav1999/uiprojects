import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToHome(){
    this.router.navigate(['home'],{relativeTo:this.activatedRoute});
    //  this.router.navigateByUrl('home')
  }

}
