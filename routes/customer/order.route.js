
const express = require('express');

const router = express.Router();

const orderController = require('../../controller/user-controller/order.ctrl')
const auth = require('../../Authorization/userAuth.token')

// router.post('/order', auth.verifytoken, orderController.createOrder)

// router.post('/place-order', auth.verifytoken, orderController.PlaceOrder)

// router.post('/buy-now', auth.verifytoken, orderController.PlaceOrderSingle)

module.exports = router;
