import React, { useState } from 'react';
import Exercises from '../Components/Exercises';

const Workouts = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <>
      <h1>Workouts</h1>
      {/* <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} /> */}
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </>
  )
};

export default Workouts;

