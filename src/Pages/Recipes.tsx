import ListGroup from "../Components/ListGroup.tsx";
import { useState } from "react";

export default function Recipes() {

  const appetizers = ["Fat-Free Queso", "Shrimp Cocktail", "Low-Fat Mozzerella Sticks"];
  const desserts = ["Gluten-Free CheeseCake", "Lowfat Mousse", "Strawberry Smoothies"];

  const [selectedAppetizer, setSelectedAppetizer] = useState("");
  const [selectedDessert, setSelectedDessert] = useState("");
  const handleSelectedAppetizer = (item: string) => {
    console.log(item);

    setSelectedAppetizer(item);
  }
  const handleSelectedDessert = (item: string) => {
    console.log(item);
    setSelectedDessert(item);
  }
  return (
    <div className="row row align-items-center mt-5">
      <div className="col-6">
        <h1 className="m-4 align-middle b">Healthier Recipes</h1>
        <div className="row">
          <div className="col-7">
            <ListGroup items={appetizers} heading="Appetizers" onSelectItem={handleSelectedAppetizer} />
          </div>
          <h5 className="col-5 align-center">{selectedAppetizer}</h5>
        </div>
        <div className="row">
          <div className="col-7">
            <ListGroup items={desserts} heading="Desserts" onSelectItem={handleSelectedDessert} />
          </div>
          <h5 className="col-5 align-center">{selectedDessert}</h5>
        </div>
      </div>
    </div>
  );
}
