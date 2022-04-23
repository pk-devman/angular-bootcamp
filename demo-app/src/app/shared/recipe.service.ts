import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // private recipes: Recipe[] = [
  //   new Recipe('Cheeze Pizza', 'A cheesy delight.', 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg',
  //   [
  //     new Ingredient('Cheese Slice', 5),
  //     new Ingredient('Olives', 15)
  //   ]
  //   ),
  //   new Recipe('Big Fat Burger', 'Enoug to fill you up.', 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg',
  //   [
  //     new Ingredient('Meat Patty', 1),
  //     new Ingredient('Buns', 2)
  //   ])
  // ];

  recipes: Recipe[] =[];

  recipeSelected: Subject<Recipe> = new Subject<Recipe>();

  recipeChanged:Subject<Recipe[]> = new Subject<Recipe[]>();
  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
