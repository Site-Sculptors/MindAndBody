import { useState } from 'react';
//import { BodyParts } from '../Types/BodyParts';
import { ExerciseList } from '../Components/ExerciseList';
import { ExerciseCardProps } from "../Interfaces/exerciseCard.interface";
import { useParams } from "react-router-dom";
//import { ExercisesProps } from '../Interfaces/exercises.interface';

export const Exercises = () => {

  // const { bodyPart } = useParams<{ bodyPart: string }>();

  const { bodyPart } = useParams<{ bodyPart?: string }>();
  const nonNullableBodyPart = bodyPart || '';

  console.log(bodyPart);
  // const [exercises, setExercises] = useState([]);

  const [exercises, setExercises] = useState<ExerciseCardProps[]>([]);
  // const bodyPart: string = BodyParts[1].name().toString();

  return (
    <>
      <h1>Workouts</h1>
      {/* <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} /> */}
      <ExerciseList exercises={exercises} setExercises={setExercises} bodyPart={nonNullableBodyPart} />
    </>
  )
};
