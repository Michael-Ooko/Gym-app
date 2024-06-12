import React from 'react';
import { Link } from 'react-router-dom';
import db from '../db.json';

function Workouts() {
  return (
    <div>
      <h2>Workouts</h2>
      {db.workouts.map(workout => (
        <div key={workout.id}>
          <h3>{workout.name}</h3>
          <p>{workout.description}</p>
          <Link to={`/workouts/${workout.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Workouts;
