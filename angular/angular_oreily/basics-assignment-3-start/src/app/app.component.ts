import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = true;
  buttonClicks = [];
  count = 0;
  onButtonClick(){
    this.showParagraph = !this.showParagraph;
    this.count++;
    this.buttonClicks.push(this.count);
  }
}
