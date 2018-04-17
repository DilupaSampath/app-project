import { Recipe } from "./recipe-model";

export class ResipesService{
    private recipes:Recipe[]=[
        new Recipe('Test recipe name','Ths is test description','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('Test recipe name','Ths is test description','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
      ];
 
      getRecipes(){
        return this.recipes.slice();
      }
}