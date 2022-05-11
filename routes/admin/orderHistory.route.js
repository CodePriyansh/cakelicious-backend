const express = require('express');
const router = express.Router();
const tokenVerification = require("../../Authorization/adminAuth.token")
const orderController = require('../../controller/admin-controller/order.ctrl')
router.get("/viewOrder",tokenVerification.varifyToken, orderController.orderDetail)
module.exports = router;
