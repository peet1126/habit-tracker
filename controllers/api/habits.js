const Habit = require("../../models/habits");

module.exports = {
  getAllHabits,
  createHabit,
  getOneHabit,
  deleteHabit,
  updateHabit
};

function updateHabit(req, res) {
  Habit.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function(
    h
  ) {
    res.status(200).json(h);
  });
}

function deleteHabit(req, res) {
  Habit.findByIdAndDelete(req.params.id).then(function(h) {
    res.status(200).json(h);
  });
}

function getOneHabit(req, res) {
  Habit.findById(req.params.id).then(function(h) {
    res.status(200).json(h);
  });
}

function createHabit(req, res) {
  Habit.create(req.body).then(function(h) {
    res.status(200).json(h);
  });
}

function getAllHabits(req, res) {
  Habit.find({}).then(function(habits) {
    res.status(200).json(habits);
  });
}
