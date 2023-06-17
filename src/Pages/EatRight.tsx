//import { NavLink } from "react-router-dom";
import { useState } from "react";
import Recipes from "../Components/Recipes";
//import { RecipesProps } from "../Interfaces/recipes.interface.ts";
import { RecipesCardProps, Recipe } from "../Interfaces/recipeCard.interface";

export default function EatRight() {
  //const hits = useState<RecipesCardProps[]>([]);

  const [recipes, setRecipes] = useState<RecipesCardProps[]>([]);
  const handleSelectedRecipe = (recipe: Recipe) => {
    // Logic to handle the selected recipe
    // This function will be called when a recipe is selected in the RecipesList component
    console.log("Selected recipe:", recipe);
  };

  return (
    <div className="row row align-items-center m-5">
      <div className="col-6">
        <h1 className="m-4 align-middle b">Eat Right</h1>
        <p>
          Maintaining a healthy eating regimen is one of the most difficult
          things to do, but with the right encouragement and the right menu, you
          will be able to get the body you've always wanted.
        </p>

        <Recipes
          recipes={recipes}
          setRecipes={setRecipes}
          onSelectItem={handleSelectedRecipe}
        />

        {/* recipes={recipes} setRecipes={setRecipes} /> */}
      </div>

      {/* <div className="col-6">
        {" "}
        <NavLink to="/recipes" className={`nav-item nav-link mx-4 `}>
          <button
            className="btn rounded-circle fw-bold mt-5"
            style={{
              borderRadius: "50% !important",
              height: "150px",
              width: "150px",
              borderColor: "#e4502b",
            }}>
            Healthier Recipes
          </button>
        </NavLink>
      </div> */}
    </div>
  );
}
