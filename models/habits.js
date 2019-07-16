const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitsSchema = new Schema(
  {
    description: String,
    date: Date,
    completed: false
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Habit", habitsSchema);
// { type: Date, default: Date.now }
