import { ExerciseCardProps } from "../Interfaces/exerciseCard.interface";
export interface ExercisesProps {
  exercises: ExerciseCardProps[]; // Corrected interface definition
  setExercises: React.Dispatch<React.SetStateAction<ExerciseCardProps[]>>;
  bodyPart: string;
}
