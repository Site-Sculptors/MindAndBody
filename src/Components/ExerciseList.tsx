import React from "react";
import { useEffect, useState } from "react";
import { Stack, Button } from "react-bootstrap";
import { exerciseOptions, GetData } from "../Services/GetData.ts";
import { useMediaQuery } from "../Hooks/useMediaQuery.tsx";
import ExerciseCard from "../Components/ExerciseCard.tsx";
import { ExercisesProps } from "../Interfaces/exercises.interface.ts";
import { ExerciseCardProps } from "../Interfaces/exerciseCard.interface.ts";
import Loader from "../Components/Loader.tsx";

export const ExerciseList: React.FC<ExercisesProps> = ({
    exercises = [],
    setExercises,
    bodyPart,
}) => {
    // const { exercises = [], setExercises, bodyPart } = exercisesProps;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [previousButtonDisabled, setPreviousButtonDisabled] =
        React.useState(false);
    const [nextButtonDisabled, setNextButtonDisabled] = React.useState(false);

    let exercisesPerPage = 5;

    const widePage = useMediaQuery('(min-width: 1100px)')
    const mediumPage = useMediaQuery('(min-width: 900px)')
    const smallPage = useMediaQuery('(min-width: 700px)')

    if (widePage) { exercisesPerPage = 5; }
    else if (mediumPage) { exercisesPerPage = 4; }
    else if (smallPage) { exercisesPerPage = 3; }
    else { exercisesPerPage = 2; }

    //exercises = useExerciseQuery(bodyPart, setExercises);


    const handlePaginationButtonClick = (
        e: React.MouseEvent<HTMLButtonElement>,
        param: number
    ) => {
        e.preventDefault();

        if (currentPage < 2) {
            setPreviousButtonDisabled(true);
        } else {
            setPreviousButtonDisabled(false);
        }
        if (currentPage >= totalPages) {
            setNextButtonDisabled(true);
        } else {
            setNextButtonDisabled(false);
        }

        setCurrentPage(currentPage + param);

        /*         const pageIndex = page - 1;
                    const firstIndex = pageIndex * exercisesPerPage;
                    const lastIndex = pageIndex * exercisesPerPage + exercisesPerPage;
                    const currentExercises = Array.isArray(exercises) ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : []; */
        // showData(data.slice(firstIndex, lastIndex));
    }; //,[currentPage]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData: ExerciseCardProps[] = [];

            const passedBodyPart = bodyPart;

            const fixedBodyPart = bodyPart.toString;

            let url: string;

            if (bodyPart === "all") {
                url = "https://exercisedb.p.rapidapi.com/exercises";
            } else {
                url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + bodyPart;
                exerciseOptions
            }

            exercisesData = await GetData<ExerciseCardProps[]>(url, exerciseOptions);

            // https://exercisedb.p.rapidapi.com/exercises/bodyPart/back';

            setTotalPages(Math.ceil(exercisesData.length / exercisesPerPage));

            setExercises(exercisesData);
        };

        fetchExercisesData();
    }, [bodyPart, setExercises, exercisesPerPage]);

    // Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    // const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    const currentExercises = Array.isArray(exercises)
        ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
        : [];
    // const paginate = (event, value) => {
    //  setCurrentPage(1);

    //  window.scrollTo({ top: 1800, behavior: 'smooth' });
    // };

    if (!currentExercises.length) return <Loader />;

    return (
        <div className="p-2">
            <h1>Workouts</h1>
            {exercises.length === 0 && <p>No items found</p>}

            <Stack
                direction="horizontal"
                gap={2}
                className="no-wrap d-flex align-items: stretch">
                {currentExercises.map((exercise, idx) => (
                    <ExerciseCard
                        key={idx}
                        bodyPart={exercise.bodyPart}
                        equipment={exercise.equipment}
                        gifUrl={exercise.gifUrl}
                        id={exercise.id}
                        name={exercise.name}
                        target={exercise.target}
                    />
                ))}
            </Stack>
            {/*    <Stack className="alignItems-center m-0">
        {exercises.length > 6 && (
          <Pagination size="lg" className="d-flex justify-content-center">
            {" "}
            <Pagination>
              <Pagination.Prev />
              <Pagination.Ellipsis />
              <Pagination.Item>{currentPage - 3}</Pagination.Item>
              <Pagination.Item>{currentPage - 2}</Pagination.Item>
              <Pagination.Item>{currentPage - 1}</Pagination.Item>
              <Pagination.Item className="fw-6">{currentPage}</Pagination.Item>
              <Pagination.Item>{currentPage + 1}</Pagination.Item>
              <Pagination.Item>{currentPage + 2}</Pagination.Item>
              <Pagination.Item>{currentPage + 3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Next />
            </Pagination>
          </Pagination>
        )}
      </Stack> */}
            {exercises.length > 6 && (
                // <div className="text-center">
                <Stack
                    direction="horizontal"
                    gap={2}
                    id="button-container"
                    className="mt-5 justify-content-center justify-end">
                    <Button
                        disabled={previousButtonDisabled}
                        aria-disabled={previousButtonDisabled}
                        onClick={(e) => handlePaginationButtonClick(e, -1)}
                        className="btn pag-button me-1"
                        style={{}}>
                        Previous
                    </Button>
                    <h1 className="mx-5">{currentPage} </h1>
                    <Button
                        disabled={nextButtonDisabled}
                        aria-disabled={nextButtonDisabled}
                        onClick={(e) => handlePaginationButtonClick(e, 1)}
                        className="btn pag-button px-4">
                        Next
                    </Button>
                </Stack>
                // </div>
            )}
        </div>
    );
};

