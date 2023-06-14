
import "../Styles/App.css";
import { useState } from "react";
import { RecipeCardProps } from "../Interfaces/recipeCard.interface";


const RecipeCard = ({ ingredients, instructions, title }: RecipeCardProps) => {

  //const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="col card recipe-card p-2"  >
      <h5 className="col text-center align-start">{title}</h5>
    </div>
  );
}

export default RecipeCard;


