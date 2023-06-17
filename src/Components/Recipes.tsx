import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipesList from "./RecipesList";
import { RecipesProps } from "../Interfaces/recipes.interface.ts";
import {
  RecipesCardProps,
  Recipe,
} from "../Interfaces/recipeCard.interface.ts";
import { GetRecipesData } from "../Services/GetData.ts";

//import { RecipesProps } from "../Interfaces/recipes.interface.ts";
//import Loader from "./Loader";

const Recipes: React.FC<RecipesProps> = ({ recipes = [], setRecipes }) => {
  //const [recipes, setRecipes] = useState<RecipesCardProps[]>();
  //const recipeData
  const meat = "chicken";

  const [recipeData, setRecipeData] = useState<RecipesCardProps[]>([]);

  // const appetizers = ["Fat-Free Queso", "Shrimp Cocktail", "Low-Fat Mozzerella Sticks"];
  // const desserts = ["Gluten-Free CheeseCake", "Lowfat Mousse", "Strawberry Smoothies"];
  //const [totalPages, setTotalPages] = useState(0);
  // const [recipesPerPage] = useState(5);
  // const currentPage = 1;
  //const [currentPage, setCurrentPage] = useState(1);
  //const [totalPages, setTotalPages] = useState(0);
  const [recipesPerPage] = useState(5);
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [selectedAppetizer, setSelectedAppetizer] = useState("");

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>();

  const handleSelectedRecipe = (recipe: Recipe) => {
    //console.log(recipe.label);

    setSelectedRecipe(recipe);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipeDataTemp = await GetRecipesData(meat);
        setRecipeData(recipeDataTemp);

        // let recipeData: RecipesCardProps[] = [];

        // recipeData = await GetRecipesData(meat);
        // const transformedRecipes = recipeData.hits.map((hit) => hit.recipe);
        // setRecipes(transformedRecipes);
        console.log("rawData:", { recipeData });

        // setRecipes(recipeData);

        console.log("recipes:", { recipes });

        console.log("recipeData:", { recipeData });
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };

    fetchData();
  });

  // const indexOfLastRecipe = currentPage * recipesPerPage;
  // const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  // const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  //  const currentRecipes = Array.isArray(recipeData) ? recipeData : [];

  /* const currentRecipes = Array.isArray(recipes)
    ? recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    : []; */

  // if (!recipeData.length) return <Loader />;

  return (
    <>
      <div className="row align-items-center m-5">
        <div className="col">
          <h1 className="m-3 text-center a b">Healthier Recipes</h1>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-auto mx-5">
          <RecipesList
            recipes={recipeData}
            setRecipes={setRecipes}
            onSelectItem={handleSelectedRecipe}
          />
        </div>
        <RecipeCard
          label={selectedRecipe?.label ?? ""}
          image={selectedRecipe?.image ?? ""}
        />
      </div>
    </>
  );
};

export default Recipes;
