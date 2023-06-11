import ListGroup from "../Components/ListGroup.tsx";

export default function Recipes() {

  const appetizers = ["Gluten-Free CheeseCake", "Lowfat Mousse", "Strawberry Smoothies"];
  const desserts = ["Gluten-Free CheeseCake", "Lowfat Mousse", "Strawberry Smoothies"];
  let selectedAppetizer = "";
  let selectedDessert = "";
  const handleSelectedAppetizer = (item: string) => {
    selectedAppetizer = item;
  }
  const handleSelectedDessert = (item: string) => {
    selectedDessert = item;
  }
  return (
    <div className="row row align-items-center mt-5">
      <div className="col-6">
        <h1 className="m-4 align-middle b">Healthier Recipes</h1>
        <div className="row">
          <div className="col-8">
            <ListGroup items={appetizers} heading="Appetizers" onSelectItem={handleSelectedAppetizer} />
          </div>
          <h5 className="col-4 align-center">{selectedAppetizer}</h5>
        </div>
        <div className="row">
          <div className="col-8">
            <ListGroup items={desserts} heading="Desserts" onSelectItem={handleSelectedDessert} />
          </div>
          <h5 className="col-4 align-center">{selectedDessert}</h5>
        </div>
      </div>
    </div>
  );
}
