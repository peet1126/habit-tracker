const User = require("../../models/users");

module.exports = {
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
  updateUser
};

function updateUser(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function(
    u
  ) {
    res.status(200).json(u);
  });
}

function deleteUser(req, res) {
  User.findByIdAndDelete(req.params.id).then(function(u) {
    res.status(200).json(u);
  });
}

function getOneUser(req, res) {
  User.findById(req.params.id).then(function(u) {
    res.status(200).json(u);
  });
}

function createUser(req, res) {
  User.create(req.body).then(function(u) {
    res.status(200).json(u);
  });
}

function getAllUsers(req, res) {
  User.find({}).then(function(users) {
    res.status(200).json(users);
  });
}
