import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  @ViewChild('f') shoppingListForm!: NgForm;
  editedItem!: Ingredient;
  editMode: boolean = false;
  editedItemIndex!: number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.slService.startedEditing.subscribe((index: number) => {
      this.editedItem = this.slService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.editedItem.Name,
        amount: this.editedItem.Amount
      });
      this.editedItemIndex = index;
      this.editMode = true;      
    });
  }

  onAddItem(form: NgForm){
    const ingredientName = form.value.name;//this.nameInputRef.nativeElement.value;
    const ingredientAmount = form.value.amount;//this.amountInputRef.nativeElement.value;
    const newIngregient = new Ingredient(ingredientName, ingredientAmount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngregient);
    }
    else{
      this.slService.addIngredient(newIngregient);
    }
    this.onClear();
  }

  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
