import React from 'react'
import { useEffect, useState } from "react";
import { Stack, Pagination, Button } from "react-bootstrap";
import { exerciseOptions, GetData } from '../Services/GetData.ts';
import ExerciseCard from '../Components/ExerciseCard';
import { ExercisesProps } from "../Interfaces/exercises.interface";
import { ExerciseCardProps } from "../Interfaces/exerciseCard.interface";
import Loader from './Loader';

const Exercises: React.FC<ExercisesProps> = ({ exercises = [], setExercises, bodyPart }) => {
    // const { exercises = [], setExercises, bodyPart } = exercisesProps;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [exercisesPerPage] = useState(6);
    const [previousButtonDisabled, setPreviousButtonDisabled] = React.useState(false);
    const [nextButtonDisabled, setNextButtonDisabled] = React.useState(false);

    const handlePaginationButtonClick = (param: number) => {

        if (currentPage < 2) {
            setPreviousButtonDisabled(true);
        }
        else if (currentPage >= totalPages) {
            setNextButtonDisabled(true);
        }

        setCurrentPage(currentPage + param);

        /*         const pageIndex = page - 1;
                const firstIndex = pageIndex * exercisesPerPage;
                const lastIndex = pageIndex * exercisesPerPage + exercisesPerPage;
                const currentExercises = Array.isArray(exercises) ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : []; */
        // showData(data.slice(firstIndex, lastIndex));
    };

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData: ExerciseCardProps[] = [];

            if (bodyPart === 'all') {
                exercisesData = await GetData<ExerciseCardProps[]>('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await GetData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }

            setTotalPages(Math.ceil(exercisesData.length / exercisesPerPage));

            setExercises(exercisesData);
        };

        fetchExercisesData();
    }, [bodyPart, setExercises]);

    // Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    // const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    const currentExercises = Array.isArray(exercises) ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : [];
    // const paginate = (event, value) => {
    //  setCurrentPage(1);

    //  window.scrollTo({ top: 1800, behavior: 'smooth' });
    // };

    if (!currentExercises.length) return <Loader />;

    return (
        <div className="p-2">
            <h1>Workouts</h1>
            {exercises.length === 0 && <p>No items found</p>}

            <Stack direction="horizontal" gap={2} className="no-wrap  alignItems-center" >
                {currentExercises.map((exercise, idx) => (
                    <ExerciseCard
                        key={idx}
                        bodyPart={exercise.bodyPart}
                        equipment={exercise.equipment}
                        gifUrl={exercise.gifUrl}
                        id={exercise.id}
                        name={exercise.name}
                        target={exercise.target}
                    />))}
            </Stack>
            <Stack className="alignItems-center m-0">
                {exercises.length > 6 && (
                    <Pagination size="lg" className="d-flex justify-content-center">
                        {currentPage}
                    </Pagination>
                )}
            </Stack>
            {exercises.length > 6 && (
                // <div className="text-center">
                <Stack direction="horizontal" gap={2} id="button-container" className="mt-5 justify-content-center" >
                    <Button aria-disabled={previousButtonDisabled} onClick={() => handlePaginationButtonClick(-1)} className="btn btn-primary me-1" >Previous</Button>
                    <Button aria-disabled={nextButtonDisabled} onClick={() => handlePaginationButtonClick(1)} className="btn btn-primary px-4" >Next</Button>
                </Stack >
                // </div>
            )}
        </div >
    );
}

export default Exercises;


