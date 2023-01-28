import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature:string;
  showSelectedSection(event:any){
    this.selectedFeature = event;
    console.log(event);
  }
}
