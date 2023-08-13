const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/link", authController.getAuthUrl);
router.post("/revoke", authController.revokeAccess);

module.exports = router;
