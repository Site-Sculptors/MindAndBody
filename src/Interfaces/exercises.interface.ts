export interface ExercisesProps {
  exercises: string[]; // Corrected interface definition
  setExercises: (setExercises: React.Dispatch<React.SetStateAction<string[]>>) => void;
  bodyPart: string;
}