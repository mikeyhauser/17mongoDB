const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: true

        },
        duration: {
            type: Number,
            required: true
        },
        
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        distance: {
            type: Number
        }
}
 ]

    
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


// const workoutKeyMap = {
//     date: "Date",
//     totalDuration: "Total Workout Duration",
//     numExercises: "Exercises Performed",
//     totalWeight: "Total Weight Lifted",
//     totalSets: "Total Sets Performed",
//     totalReps: "Total Reps Performed",
//     totalDistance: "Total Distance Covered"
//   };