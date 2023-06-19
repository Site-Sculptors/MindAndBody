import "../Styles/App.css";
import { Hit } from "../Interfaces/recipes.interface";

export const RecipeCard: React.FC<Hit> = ({ recipe }) => {
  //const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      {/* <image  src={recipe.image} alt={recipe.label} /> */}
      <h3>{recipe.label}</h3>
      <p>{recipe.calories} Calories</p>
      {/* Additional recipe card content */}
    </div>

    /*  <div className="col card recipe-card p-2">
      <img className="card-img-top" src={image} alt={image} />
      <h5 className="col text-center align-start">{label}</h5>
    </div> */
  );
};
