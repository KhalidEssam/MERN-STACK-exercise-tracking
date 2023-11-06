const { default: mongoose } = require('mongoose')
const Workout = require('../models/WorkoutModel')

// get all workouts
const GetWorkouts = async (req, res) => {
   
    try{
    const workouts = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
    } catch(error){
    res.status(400).json({error: error.message })
    }
    }
// get a workout
const GetWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'ID not valid'})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error:'not found'})
    }
    res.status(200).json(workout)
    }
// add a workout

const creatWorkout = async (req, res) => {
    const { title, load, reps}= req.body
    try{
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
    } catch(error){
    res.status(400).json({error: error.message })
    }
    }

// // delete a workout
const DeleteWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'ID not valid'})
    }
    const workout = await Workout.findByIdAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({error:'not found'})
    }
    res.status(200).json(workout)
    }



// // update a workout
const updateworkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'ID not valid'})
    }
    const workout = await Workout.findByIdAndUpdate({_id:id},{...req.body})
    if(!workout){
        return res.status(404).json({error:'not found'})
    }
    res.status(200).json(workout)
    }


module.exports= {creatWorkout,GetWorkouts,GetWorkout,DeleteWorkout,updateworkout}