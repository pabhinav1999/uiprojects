import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = true;
  count = 0;
  logsArray:number[]=[];
  upDateClickCount(){
    this.showSecret != this.showSecret;
    this.count++;
    this.logsArray.push(this.count);
  }
}
