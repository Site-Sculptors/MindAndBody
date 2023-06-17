
import { RecipesCardProps } from "../Interfaces/RecipeInterface.ts";
import { ListGroup } from 'react-bootstrap';

const RecipesList: React.FC<RecipesCardProps> = ({ hits }) => {
    return (
        <ListGroup>
            {hits.map((hit) => (
                <ListGroup.Item key={hit.recipe.uri}>
                    <img src={hit.recipe.image} alt={hit.recipe.label} />
                    <div>{hit.recipe.label}</div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default RecipesList;