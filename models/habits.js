const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitsSchema = new Schema(
  {
    todo: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Habit", habitsSchema);
