const express = require('express');
const router = express.Router();

const customerController = require('../../controller/admin-controller/customer.ctrl')
const tokenVerification = require("../../Authorization/adminAuth.token")

router.get("/viewCustomer", tokenVerification.varifyToken, customerController.getCustomer);
module.exports = router;
