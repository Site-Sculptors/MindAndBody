/* import { useEffect, useState } from "react";
import { Stack, Button, Pagination } from "react-bootstrap";
import { exerciseOptions, GetData } from '../Services/GetData.tsx';
import ExerciseCard from '../Components/ExerciseCard';
import { ExercisesProps } from "../Interfaces/exercises.interface";
import Loader from './Loader';
 */
import React from 'react'
import { useEffect, useState } from "react";
import { Stack, Pagination, Button } from "react-bootstrap";
import { exerciseOptions, GetData } from '../Services/GetData.tsx';
import ExerciseCard from '../Components/ExerciseCard';
import { ExercisesProps } from "../Interfaces/exercises.interface";
import Loader from './Loader';

/* interface ExercisesProps {
    exercises: string[]; // Corrected interface definition
    setExercises: (setExercises: React.Dispatch<React.SetStateAction<string[]>>) => void;
    bodyPart: string;
} */
const Exercises: React.FC<ExercisesProps> = ({ exercises = [], setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await GetData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await GetData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }

            setExercises(exercisesData);
        };

        fetchExercisesData();
    }, [bodyPart]);

    // Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    /*   const paginate = (event, value) => {
          setCurrentPage(value);
  
          window.scrollTo({ top: 1800, behavior: 'smooth' });
      }; */

    if (!currentExercises.length) return <Loader />;

    return (
        <div className="p-2">
            <h1>Workouts</h1>
            {exercises.length === 0 && <p>No items found</p>}

            <Stack direction="horizontal" gap={4} className="no-wrap  justifyContent-center" >
                {currentExercises.map((exercise, idx) => (
                    <ExerciseCard key={idx} exercise={exercise} className="m-5" />
                ))}
            </Stack><Stack className="alignItems-center">
                {exercises.length > 9 && (
                    <Pagination size="lg" className="d-flex justify-content-center">
                        {currentPage}
                    </Pagination>
                )}
            </Stack>
            {/* <Stack direction="horizontal" gap={2} className='text-center justifyContent-center mt-5'>
                <Button >Previous</Button>
                <Button >Next</Button>
            </Stack> */}
            <div className="text-center">
                <div id="button-container" className="btn-group">
                    <button className="btn btn-primary me-1">Previous</button>
                    <button className="btn btn-primary px-4">Next</button>
                </div>
            </div>
        </div>
    );
}

export default Exercises;


