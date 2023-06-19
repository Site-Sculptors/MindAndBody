import salmonPlateImage from "/mind_and_body_salmon_plate.jpg";
import { Button } from "react-bootstrap";
import "../Styles/App.css";
//import { NavLink } from "react-router-dom";
//import { useState } from "react";
//import { Recipes } from "../Components/Recipes";
//import { RecipesProps } from "../Interfaces/recipes.interface.ts";
//import { RecipesCardProps, Recipe } from "../Interfaces/recipeCard.interface";

export default function EatRight() {
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
        <div
          className="ing-array flex-fill start-center justify-content-between p-4"
          style={{ backgroundColor: "rgb(251, 187, 171, 30%)", borderRadius: "50px" }}>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Beans
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Beef
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Chicken
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Fish
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Fruit
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Beans
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Noodles
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Chicken
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Lamb
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Pasta
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Pork
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Noodles
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Vegetables
          </Button>
          <Button className="btn ingr-button btn-lg rounded-circle m-2">
            Turkey
          </Button>
        </div>
        <p className="text-center">Please choose the main ingredient you want for your recipes.</p>
        <div className="">{/* <Recipes /> */}</div>
      </div>
    </div>
  );
}
