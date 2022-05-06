const express = require('express');
const router = express.Router();
const tokenVerification = require("../../Authorization/adminAuth.token")

const supportController = require('../../controller/admin-controller/support.ctrl')

module.exports = router;