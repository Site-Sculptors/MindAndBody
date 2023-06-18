import { RecipesProps } from "../Interfaces/recipes.interface";
import { Hit, Recipe, RecipesCardProps } from "../Interfaces/recipes.interface";
import { ListGroup, Stack } from "react-bootstrap";

const RecipesList: React.FC<RecipesProps> = ({ recipes, onSelectItem }) => {
  const handleSelect = (recipe: Recipe) => {
    onSelectItem(recipe);
  };

  return (
    <ListGroup>
      {recipes.map((recipe: RecipesCardProps, index: number) => (
        <ListGroup.Item key={index}>
          {recipe.hits.map((hit: Hit) => (
            <Stack gap={3} key={hit.recipe.uri}>
              <div onClick={() => handleSelect(hit.recipe)}>
                <img src={hit.recipe.image} alt={hit.recipe.label} />
                <div>{hit.recipe.label}</div>
              </div>
            </Stack>
          ))}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default RecipesList;
