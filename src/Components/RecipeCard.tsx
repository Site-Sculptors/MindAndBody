
import "../Styles/App.css";
import { Recipe } from "../Interfaces/RecipeInterface";

const RecipeCard: React.FC<Recipe> = ({ label, image }) => {

  //const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="col card recipe-card p-2"  >
      <img className="card-img-top" src={image} alt={image} />
      <h5 className="col text-center align-start">{label}</h5>
    </div>
  );
}

export default RecipeCard;


