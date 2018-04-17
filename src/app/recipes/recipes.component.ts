import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-model';
import { ResipesService } from './recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [ResipesService]
})
export class RecipesComponent implements OnInit {
selectedRecipe : Recipe; 

  constructor() { }

  ngOnInit() {
  }

}
