import salmonPlateImage from "/mind_and_body_salmon_plate.jpg";
import { ButtonCloud } from "../Components/ButtonCloud";
import { MainIngedients } from "../Types/RecipeTypes";
import "../Styles/App.css";
//import { NavLink } from "react-router-dom";
//import { useState } from "react";
//import { Recipes } from "../Components/Recipes";
//import { RecipesProps } from "../Interfaces/recipes.interface.ts";
//import { RecipesCardProps, Recipe } from "../Interfaces/recipeCard.interface";



export default function EatRight() {

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    param: string) => {

    console.log(param);
    // navigate(`/exercises/${encodeURIComponent(param)}`);
  };



  return (
    <div className="row m-5">
      <div className="col-5">
        <img
          src={salmonPlateImage}
          alt="Salmon Plate Pic"
          width="600px"
          className="img-fluid rounded hover-overlay"
        />
        <h1 className="m-4 align-middle b">Eat Right</h1>{" "}
        <p>
          Maintaining a healthy eating regimen is one of the most difficult
          things to do, but with the right encouragement and the right menu, you
          will be able to get the body you've always wanted.
        </p>
      </div>
      <div className="col justify-center">
        <h3 className="m-4 text-center">Main Ingredient</h3>
        <ButtonCloud nameArray={MainIngedients} handleButtonClick={handleButtonClick} />
        <p className="text-center">Please choose the main ingredient you want for your recipes.</p>
        <div className="">{/* <Recipes /> */}</div>
      </div>
    </div>
  );
}
