const express = require('express');
const router = express.Router();

const customerController = require('../../controller/admin-controller/customer.ctrl')
const auth = require("../../Authorization/userAuth.token")


router.get("/viewCustomer", auth.verifyToken, customerController.getCustomer);

module.exports = router;
