export interface ExercisesProps {
  exercises: string[]; // Corrected interface definition
  setExercises: React.Dispatch<React.SetStateAction<string[]>>;
  bodyPart: string;
}