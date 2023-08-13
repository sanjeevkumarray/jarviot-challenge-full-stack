const express = require("express");
const router = express.Router();
const driveController = require("../controllers/driveController");

router.get("/analytics", driveController.getDriveAnalytics);

module.exports = router;
