
/* import { useEffect } from "react";
import { exerciseOptions, GetData } from "../Services/GetData";
import { ExercisesProps } from "../Interfaces/exercises.interface";

export const useExerciseQuery = (bodyPart: string) => {

  // const [exercises, setExercises] = useState<ExercisesProps[]>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {

      let exercisesData: ExercisesProps[] = [];

      if (bodyPart === "all") {
        exercisesData = await GetData<ExercisesProps[]>(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await GetData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      //   setTotalPages(Math.ceil(exercisesData.length / exercisesPerPage));

      //  setExercises(exercisesData);
    };

    fetchExercisesData();
  });//, [bodyPart, setExercises]);

  // return { exercises };
};
 */