const express = require("express");
const router = express.Router();
const habitsCtrl = require("../../controllers/api/habits");

router.get("/getAll", habitsCtrl.getAllHabits);
router.get("/habits/:id", habitsCtrl.getOneHabit);
router.post("/create", habitsCtrl.createHabit);
router.get("/delete/:id", habitsCtrl.deleteHabit);
router.post("/edit/:id", habitsCtrl.updateHabit);

module.exports = router;
