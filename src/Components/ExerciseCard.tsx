import "../Styles/App.css";
import { Stack, Button, NavLink } from "react-bootstrap";
import { ExerciseCardProps } from "../Interfaces/exerciseCard.interface";


const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const { bodyPart, gifUrl, name, target } = exercise;

  return (
    <div className="card p-2">
      {/* <NavLink className="exercise-card" to="{`/workout/${exercise.id}`} ">    */}
      <p
        style={{
          color: "#000",
          fontWeight: "bold",
          textTransform: "capitalize",
          textAlign: "center"
        }}
      >
        {name}
      </p>
      <img src={gifUrl} alt={name} loading="lazy" />
      <Stack direction="horizontal" gap={2} className="justify-content-center">
        <Button
          style={{
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {bodyPart}
        </Button>
        <Button
          style={{
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {target}
        </Button>
      </Stack>

      {/* </NavLink> */}
    </div>
  );
};

export default ExerciseCard;