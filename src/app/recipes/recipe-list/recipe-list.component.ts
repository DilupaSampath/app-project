import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { Recipe } from '../recipe-model';
import { ResipesService } from '../recipes.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[];
@Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService : ResipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
