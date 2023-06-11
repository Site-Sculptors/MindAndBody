import ListGroup from "../Components/ListGroup.tsx";

export default function Recipes() {

  const appetizers = ["Gluten-Free CheeseCake", "Lowfat Mousse", "Strawberry Smoothies"];
  const desserts = ["Gluten-Free CheeseCake", "Lowfat Mousse", "Strawberry Smoothies"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div className="row row align-items-center mt-5">
      <div className="col-6">
        <h1 className="m-4 align-middle b">Healthier Recipes</h1>
        <ListGroup items={appetizers} heading="Appetizers" onSelectItem={handleSelectItem} />
        <ListGroup items={desserts} heading="Desserts" onSelectItem={handleSelectItem} />
      </div>
    </div>
  );
}
