import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm!: FormGroup;
  id!: number;
  editMode: boolean = false;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] !== undefined;
      this.initForm();
    });
  }

  private initForm(){
   
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.Name;
      recipeDescription = recipe.Description;
      recipeImagePath = recipe.ImagePath || '';
      recipeIngredients = new FormArray([]);
      if(recipe.Ingredients){
        for (const ingredient of recipe.Ingredients) {
          recipeIngredients.push(new FormGroup({
            name: new FormControl(ingredient.Name, Validators.required),
            amount: new FormControl(ingredient.Amount, Validators.required)
          }));
        }
      }
    }    

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    
    });
  }

  getIngredientControls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      name: new FormControl(null),
      amount: new FormControl(null)
    }))
  }

  onSubmit(){
    const newIngredients = [];
    for (const ingredient of this.recipeForm.value['ingredients']) {
      newIngredients.push(new Ingredient(ingredient.name, ingredient.amount));      
    }
    const newRecipe = new Recipe(this.recipeForm.value['name'], this.recipeForm.value['description'], 
    this.recipeForm.value['imagePath'], newIngredients);

    if(this.editMode){
      this.recipeService.updateRecipe(this.id, newRecipe);
    }
    else{
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
