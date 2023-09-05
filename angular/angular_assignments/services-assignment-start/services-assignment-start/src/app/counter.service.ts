import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  
  inactiveToActive = 0;
  activeToInactive = 0;

  constructor() { }

  incrementActivetoInactive(){
    this.activeToInactive++;
    console.log(this.activeToInactive);
  }
  incrementInActivetoactive(){
    this.inactiveToActive++;
    console.log(this.inactiveToActive);
  }
}
