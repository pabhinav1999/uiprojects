import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
   public isModalOpened = false;
   public count = 0;

   openModal(){
       this.count += 1;
       this.isModalOpened = true;
   }

   closeModal(){
    if(this.isModalOpened){
      this.count -= 100;
    }
    this.isModalOpened = false;
   }
   
  constructor() { }
}
