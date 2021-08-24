import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is simply a test recipe", 
    "https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-handwritten-lettering-recipe-word-text-green-leaf-handwritten-lettering-suitable-112679873.jpg")
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
