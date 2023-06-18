import slamonPlateImage from "/mind_and_body_salmon_plate.jpg";
import { Stack, Button } from "react-bootstrap";
import "../Styles/App.css";
//import { NavLink } from "react-router-dom";
//import { useState } from "react";
//import { Recipes } from "../Components/Recipes";
//import { RecipesProps } from "../Interfaces/recipes.interface.ts";
//import { RecipesCardProps, Recipe } from "../Interfaces/recipeCard.interface";

export default function EatRight() {
  return (
    <div className="row row align-items-center m-5">
      <div className="col">
        <img
          src={slamonPlateImage}
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
      <div className="col-4">
        <h3 className="m-4 text-align-center">Main Ingredient</h3>
        <div
          className="ing-array flex-fill start-center justify-content-between p-4"
          style={{ backgroundColor: "#FBBBAB", borderRadius: "50px" }}>
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
        <div className="">{/* <Recipes /> */}</div>
      </div>
    </div>
  );
}
