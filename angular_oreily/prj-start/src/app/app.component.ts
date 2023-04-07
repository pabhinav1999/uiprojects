import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 showRecipe:boolean;
  toggleComponent(event){
    console.log(event);
    this.showRecipe = event ;
  }
}
