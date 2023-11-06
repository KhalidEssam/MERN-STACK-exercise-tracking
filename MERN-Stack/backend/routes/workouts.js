const express = require ('express')
const Workout = require('../models/WorkoutModel')
const router =express.Router()
const {creatWorkout,
    GetWorkouts,
    GetWorkout,
    DeleteWorkout,
    updateworkout
} = require('../controlers/workoutController')
// get all workouts

router.get('/' ,GetWorkouts)

// get a workout
router.get('/:id' ,GetWorkout)
// add a workout

router.post ('/',creatWorkout)

// delete a workout
router.delete('/:id' ,DeleteWorkout)

// update a workout
router.patch('/:id' ,updateworkout)


// router.get('/' ,( ) =>{})
module.exports = router