import { useState } from "react";
import Exercises from "../Components/Exercises";
import { ExerciseCardProps } from "../Interfaces/exerciseCard.interface";

const Workouts = () => {
  // const [exercises, setExercises] = useState([]);

  const [exercises, setExercises] = useState<ExerciseCardProps[]>([]);
  const [bodyPart] = useState("all");

  return (
    <div className="p-4">
      {/* <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} /> */}
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Workouts;
