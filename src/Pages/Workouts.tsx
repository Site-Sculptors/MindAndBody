//import { useState } from "react"; 
import workoutImage from "/mind_and_body_workout.jpg";
//import { Exercises } from "../Components/Exercises";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../Styles/App.css";
//import { ExerciseCardProps } from "../Interfaces/exerciseCard.interface";

export const Workouts = () => {
  // const [exercises, setExercises] = useState([]);

  // const [exercises, setExercises] = useState<ExerciseCardProps[]>([]);
  // const [bodyPart] = useState("all");

  const navigate = useNavigate();

  const handleButtonButtonClick = (param: string) => {
    navigate(`/exercises/${encodeURIComponent(param)}`);
  };

  const bodyParts: string[] = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "wrist"];

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
        <div className="ing-array flex-fill start-center justify-content-between p-4"
          style={{ backgroundColor: "rgb(251, 187, 171, 30%)", borderRadius: "50px" }}>
          {bodyParts.map((bodyPart) => (
            <Button
              key={bodyPart}
              onClick={() => handleButtonButtonClick(bodyPart)}
              className="btn ingr-button btn-lg rounded-circle m-2 text-capitalize"
            >
              {bodyPart}
            </Button>
          ))}
        </div>
        <p className="text-center">Please choose the muscle group you want exercises for.</p>
        <div className="">{/* <Recipes /> */}</div>
      </div>
    </div>
    /*  <div className="p-4">
       {/* <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />  
 
 {/* <div className="col-6">
   {" "}
   <NavLink to="/exercises" className={`nav-item nav-link mx-4 `}>
     <button
       className="btn rounded-circle fw-bold mt-5"
       style={{
         borderRadius: "50% !important",
         height: "150px",
         width: "150px",
         borderColor: "#e4502b",
       }}>
       Exercises
     </button>
   </NavLink>
 </div>
 { <Exercises
         exercises={exercises}
         setExercises={setExercises}
         bodyPart={bodyPart}
       /> 
     </div >  }*/
  );
}

