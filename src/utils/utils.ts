import { IRecipe } from "../types/recipe.type";
import { recipes } from "./data/recipes";

export const searchRecipesAutocomplete = (search: string): IRecipe[] => {
  const newRecipes = recipes.filter((recipe: IRecipe) =>
    recipe.name.toLocaleLowerCase().includes(search)
  );
  return newRecipes;
};
