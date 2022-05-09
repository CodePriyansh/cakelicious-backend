const express = require('express');
const router = express.Router();
const tokenVerification = require("../../Authorization/adminAuth.token")

const supportController = require('../../controller/admin-controller/support.ctrl')

router.post('/addQuery',tokenVerification.varifyToken,supportController.addQuery)
router.get('/viewQuery',tokenVerification.varifyToken,supportController.viewQuery)
router.post('/giveSupport',tokenVerification.varifyToken,supportController.giveSupport)

module.exports = router;