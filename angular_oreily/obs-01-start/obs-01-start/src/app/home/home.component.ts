import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, SubscriptionLike, interval } from 'rxjs';
import { MapOperator, map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstSubs:Subscription;
  customSubs : Subscription;

  constructor() { }

  ngOnInit() {
    //  this.firstSubs = interval(1000).subscribe((data:number)=>{
    //   console.log(data)
    // })
    //custom observable
    const customObs = Observable.create(observer=>{
      let count = 0;

      setInterval(() => {
     //   console.log(count);
       observer.next(count);
       if(count >3){
        observer.error('Hello count is greater than 3');        
     }
       if(count === 2){
        observer.complete();
       }

        count++;
      },1000);
    })

    

   this.customSubs = customObs.pipe(map((data:number) =>data*10),filter((data:number) => data%20 === 0)).subscribe((data)=>{
       console.log(data);
   },(error)=>{
    console.log('Hi I am error')
   },()=>{
     console.log('I am completed');
   })
     

  }

  onActivate(){

  }
  
  ngOnDestroy(){
  //  this.firstSubs.unsubscribe();
    this.customSubs.unsubscribe();
   
  }



}
