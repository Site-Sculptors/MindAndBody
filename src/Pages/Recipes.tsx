import ListGroup from "../Components/ListGroup.tsx";
import RecipeCard from "../Components/RecipeCard.tsx";
import { useState } from "react";

export default function Recipes() {

  const appetizers = ["Fat-Free Queso", "Shrimp Cocktail", "Low-Fat Mozzerella Sticks"];
  const desserts = ["Gluten-Free CheeseCake", "Lowfat Mousse", "Strawberry Smoothies"];

  //const [selectedAppetizer, setSelectedAppetizer] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const handleSelectedRecipe = (item: string) => {
    console.log(item);

    setSelectedRecipe(item);
  }

  return (
    <>
      <div className="row align-items-center m-5">
        <div className="col">
          <h1 className="m-3 text-center a b">Healthier Recipes</h1>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-auto mx-5">
          <ListGroup items={appetizers} heading="Appetizers" onSelectItem={handleSelectedRecipe} />
          <ListGroup items={desserts} heading="Desserts" onSelectItem={handleSelectedRecipe} />
        </div>
        <RecipeCard title={selectedRecipe} />

      </div>
    </>
  );
}
