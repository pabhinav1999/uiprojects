import { ViewEncapsulation } from '@angular/core';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AppComponent  {
  intervalSubscription: Subscription | undefined ;
  customObservableSubscription: Subscription| undefined;
  title = 'interview_practice';
  enteredValue:string = "";
  totalStudents = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(4)
    },3000)
  })

  ngOnInit(){

    //observable is the one which is sending data and observer is the one which waits or observe the data

    //in built rxjs observable

    // this.intervalSubscription = interval(1000).subscribe((count)=>{
 
    //  console.log(count);
    // })

    //custom observable

    let customObservable = Observable.create( (observer:any)=>{
      let count = 0;
      setInterval(()=>{
       count++;
       observer.next(count);

       if( count > 3){
        observer.error('Count greater than 3');
       }

       if(count >2 ){
        observer.complete()
       }
      }, 1000)
    })

    this.customObservableSubscription = customObservable.pipe(filter((data:number)=>{
      if(data > 1){
        return true;
      }
      else{
        return false;
      }
    }),map((data:number)=> data*2)).subscribe((data:any)=>{ 
      console.log(data);
    },(error:string)=>{
      console.log(error)
    },()=>{
      console.log('Observable is completed');
    })
  }


  onSubmit(input:HTMLInputElement){
    console.log(input);
    this.enteredValue = input.value; 
  }

  onEmittingAString(event:any){
    console.log(event);
  }

  ngOnDestroy(){
    // this.intervalSubscription?.unsubscribe();
    this.customObservableSubscription?.unsubscribe();
  }
}




