import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient.model';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef ;
  @ViewChild('amountInput',{static:false}) amountInputRef : ElementRef ;
  @Output() newIngredient = new EventEmitter<Ingredient>();
  constructor() {  }

  ngOnInit(): void {
  }

  addIngredient(){
    const nameVal = this.nameInputRef.nativeElement.value;
    const amountVal = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameVal,amountVal);
    this.newIngredient.emit(newIngredient);
  }

}
