//import React, { useState } from "react";
//import { RecipeCard } from "./RecipeCard";
//import { RecipesProps } from "../Interfaces/recipes.interface";

export const Recipes: React.FC = () => {
  // const [recipes, setRecipes] = useState<RecipesProps[]>([]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query");

    // Perform API request here
    // Replace the following code with your API call

    fetch(
      `https://api.edamam.com/api/food-database/parser?app_id=ca747d07&app_key=722fabaee32b8118f7b1cb2e32b137cf&ingr=${query}`
    )
      .then((response) => response.json())
      //.then((data) => setRecipes(data.recipes))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="Search recipes" />
        <button type="submit">Search</button>
      </form>
      {/* <RecipeCard recipe={recipeItem.recipe} /> */}
    </div>
  );
};
