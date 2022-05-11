const express = require('express');
const router = express.Router();
const tokenVerification = require("../../Authorization/adminAuth.token")

const feedbackController = require('../../controller/admin-controller/feedback.ctrl')
router.post("/addFeedback",tokenVerification.varifyToken,  feedbackController.addFeedback)
router.get("/viewFeedback",tokenVerification.varifyToken, feedbackController.viewFeedback)

module.exports = router;
