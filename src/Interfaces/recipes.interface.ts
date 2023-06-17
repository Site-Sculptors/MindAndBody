//import { RecipeCardProps } from "../Interfaces/recipeCard.interface";
import { RecipesCardProps } from "../Interfaces/RecipeInterface";
export interface RecipesProps {
  recipes: RecipesCardProps[]; // Corrected interface definition
  setRecipes: React.Dispatch<React.SetStateAction<RecipesCardProps[]>>;
}
