import { BodyParts } from "../Types/ExerciseTypes";
import workoutImage from "/mind_and_body_workout.jpg";
import { useNavigate } from "react-router-dom";
import { ButtonCloud } from "../Components/ButtonCloud";
import "../Styles/App.css";

export const Workouts = () => {
  const navigate = useNavigate();

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    param: string) => {
    navigate(`/exercises/${encodeURIComponent(param)}`);
  };

  return (
    <div className="row m-5">
      <div className="col-5">
        <img
          src={workoutImage}
          alt="Workout Pic"
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
        <h3 className="m-4 text-center">Muscle Groups</h3>
        <ButtonCloud nameArray={BodyParts} handleButtonClick={handleButtonClick} />
        <p className="text-center">Please choose the muscle group you want exercises for.</p>
      </div>
    </div>
  );
}

