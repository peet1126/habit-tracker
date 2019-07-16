const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

router.get("/users", usersCtrl.getAllUsers);
router.get("/users/:id", usersCtrl.getOneUser);
router.post("/users", usersCtrl.createUser);
router.delete("/users/:id", usersCtrl.deleteUser);
router.put("/users/:id", usersCtrl.updateUser);

module.exports = router;
