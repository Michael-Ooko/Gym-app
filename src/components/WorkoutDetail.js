import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../db.json';

function WorkoutDetail() {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    const foundWorkout = db.workouts.find(workout => workout.id === parseInt(id));
    setWorkout(foundWorkout);
  }, [id]);

  if (!workout) {
    return <div>Loading...</div>;
  }

  const { name, description, duration, exercises } = workout;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Duration: {duration}</p>
      <h3>Exercises:</h3>
      <div className="exercise-list">
        {exercises.map(exerciseId => {
          const exercise = db.exercises.find(ex => ex.id === exerciseId);
          return (
            <div key={exercise.id} className="exercise-card">
              <h4>{exercise.name}</h4>
              <p>{exercise.description}</p>
              <p>Difficulty: {exercise.difficulty}</p>
              <img src={exercise.image_url} alt={exercise.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkoutDetail;
