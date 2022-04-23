import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipe-app-demo-f3c0f-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(result => {
      console.log(result);
    });

  }

  fetchRecipes(){
    this.http.get<Recipe[]>('https://recipe-app-demo-f3c0f-default-rtdb.firebaseio.com/recipes.json')
    .pipe(map(data => {
      return data.map(recipe => {
        return {...recipe, Ingredients: recipe.Ingredients ? recipe.Ingredients : []}
      });
    }))
    .subscribe(result => {
      this.recipeService.setRecipes(result);
    });
  }
}
