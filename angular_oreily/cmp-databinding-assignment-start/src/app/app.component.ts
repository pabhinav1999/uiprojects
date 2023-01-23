import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberToDisplay = 0;
  onGameStarted(event:any){
    console.log(event.presentNumber);
    this.numberToDisplay = event.presentNumber;
  }


  onGameStopped(){
    console.log('game is stopped');
  }
}

