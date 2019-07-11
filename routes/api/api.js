const express = require("express");
const router = express.Router();
const habitsCtrl = require("../../controllers/api/habits");

router.get("/habits", habitsCtrl.getAllHabits);
router.get("/habits/:id", habitsCtrl.getOneHabit);
router.post("/habits", habitsCtrl.createHabit);
router.delete("/habits/:id", habitsCtrl.deleteHabit);
router.put("/habits/:id", habitsCtrl.updateHabit);

module.exports = router;
