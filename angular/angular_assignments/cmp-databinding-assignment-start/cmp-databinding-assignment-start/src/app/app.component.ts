import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  incrementedNumbers: number;
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];

  gameInProgress:boolean = false;

  handleStopEvent(data){
     this.gameInProgress = false
  }

  handleStartEvent(data){
    this.gameInProgress = true;

     this.incrementedNumbers = data;
     data % 2 === 0 ? this.evenNumbers.push(data) : this.oddNumbers.push(data) ;
  }
}
