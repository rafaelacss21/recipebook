import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Cookies', 
            'This is simply a test recipe', 
            'https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1-e1549147195343.jpg',
            [
                new Ingredient('Flour', 1),
                new Ingredient('Chocolate Chips', 50),
                new Ingredient('Vanilla', 2)
            ]),
        new Recipe(
            'Blue Cheese Burger', 
            'This is simply another test recipe', 
            'https://static.olocdn.net/menu/applebees/ffac757fc64d1e414422bf204f1a4f87.jpg',
            [
                new Ingredient('Bread', 1),
                new Ingredient('Meat', 1),
                new Ingredient('Fries', 20)
            ])
      ];

      constructor(private slService: ShoppingListService) {

      }

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

}