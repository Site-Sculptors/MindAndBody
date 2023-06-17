import { Hit, Recipe } from "../Interfaces/recipeCard.interface";
import { ListGroup, Stack } from "react-bootstrap";

interface RecipesProps {
  recipes: Hit[]; // Update the type to Hit[]
  onSelectItem: (recipe: Recipe) => void;
}

const RecipesList: React.FC<RecipesProps> = ({ recipes, onSelectItem }) => {
  const handleSelect = (recipe: Recipe) => {
    onSelectItem(recipe);
  };

  return (
    <ListGroup>
      {recipes.map((hit: Hit, index: number) => (
        <ListGroup.Item key={index}>
          <Stack gap={3}>
            <div onClick={() => handleSelect(hit.recipe)}>
              <img src={hit.recipe.image} alt={hit.recipe.label} />
              <div>{hit.recipe.label}</div>
            </div>
          </Stack>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default RecipesList;
