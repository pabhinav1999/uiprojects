import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe;
  constructor() { }

  ngOnInit(): void {
  }

  setRecipe(event){
    console.log('qaya');
    console.log(event);
    this.selectedRecipe = event ;
   }

}
