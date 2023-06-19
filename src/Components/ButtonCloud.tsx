
import { Button } from "react-bootstrap";
import "../Styles/App.css";

interface ButtonCloudProps {
  nameArray: string[];
  handleButtonClick: (e: React.MouseEvent<HTMLButtonElement>, element: string) => void;
}

export const ButtonCloud: React.FC<ButtonCloudProps> = ({ nameArray, handleButtonClick }) => {

  return (
    <div className="ing-array flex-fill start-center justify-content-between p-4"
      style={{ backgroundColor: "rgb(251, 187, 171, 30%)", borderRadius: "50px" }}>
      {nameArray.map((element: string) => (
        <Button
          key={element}
          onClick={(e) => handleButtonClick(e, element)}
          className="btn ingr-button btn-lg rounded-circle m-2 text-capitalize"
        >
          {element}
        </Button>
      ))}
    </div>

  );
}