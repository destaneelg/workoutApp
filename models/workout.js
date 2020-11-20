const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
      day: {
        type: Date,
        default: () => new Date()
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Enter a workout type:"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter an exercise name:"
          },
          duration: {
            type: Number,
            required: "Enter how many minutes you would to workout:"
          },
          weight: {
            type: Number,
            required: "Enter a weight:"
          },
          reps: {
            type: Number,
            required: "Enter an maount of reps:"
          },
          sets: {
            type: Number,
            required: "Enter an an amount of sets:"
          },
          distance: {
            type: Number,
            required: "Enter a distance:"
          }
        }
      ]
    },
    {
      toJSON: {
        virtuals: true
      }
    }
  );
  
  workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  module.exports = Workout;