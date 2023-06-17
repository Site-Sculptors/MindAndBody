import { Recipe } from "../Interfaces/recipeCard.interface";
import { RecipesCardProps } from "../Interfaces/recipeCard.interface";
export interface RecipesProps {
  recipes: RecipesCardProps[]; // Corrected interface definition
  setRecipes: React.Dispatch<React.SetStateAction<RecipesCardProps[]>>;
  onSelectItem: (recipe: Recipe) => void;
}
