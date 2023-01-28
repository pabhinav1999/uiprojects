import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() displaySelectedRecipe = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('Potato Fry','Recipe with potato','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/potato-fry.jpg'),
    new Recipe('Baby Corn','Recipe with Baby corn','https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Baby_Corn_Butter_Masala_Recipe.jpg'),
    new Recipe('Fruit Salad','Healthy fruit salad','https://media.istockphoto.com/id/177755110/photo/mixed-fruit-salad-in-a-white-square-bowl.jpg?s=612x612&w=0&k=20&c=17EK0CthzrBH0B2nti5cZkd4q4CI2h9TWcqPnCiVU64=')
  ];


  constructor() { }

  ngOnInit(): void {
  }

  displayRecipeDetail(recipe:Recipe){
    console.log('recipe emitted');
    console.log(recipe);
    this.displaySelectedRecipe.emit(recipe);
  }

}
