
import React from 'react';

const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4 className="workout-title">{workout.title}</h4>
      <p className="workout-detail">
        <strong>Load (kg):</strong> {workout.load}
      </p>
      <p className="workout-detail">
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p className="workout-detail">
        <strong>Created At:</strong> {workout.createdAt}
      </p>
    </div>
  );
};

export default WorkoutDetails;
