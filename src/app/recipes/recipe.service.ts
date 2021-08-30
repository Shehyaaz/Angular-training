import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Test Recipe", "This is simply a test recipe", 
        "https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-handwritten-lettering-recipe-word-text-green-leaf-handwritten-lettering-suitable-112679873.jpg",
        [
            new Ingredient("Meat", 1),
            new Ingredient("Fries", 20)
        ]),
        new Recipe("Test Recipe 2", "This is simply another test recipe", 
        "https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-handwritten-lettering-recipe-word-text-green-leaf-handwritten-lettering-suitable-112679873.jpg",
        [
            new Ingredient("Buns", 2),
            new Ingredient("Meat", 2)
        ])
      ];

    constructor(private slService: ShoppingListService) { }
    
      getRecipes() {
        return this.recipes.slice(); // returns a copy of the array 
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}