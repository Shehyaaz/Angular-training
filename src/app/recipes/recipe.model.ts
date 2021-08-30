import { Ingredient } from "../shared/ingredient.model";

// this class defines a structure of a single recipe
export class Recipe {
    constructor(
        public name: string,
        public description: string,
        public imagePath: string,
        public ingredients: Ingredient[]
    ) { }
}