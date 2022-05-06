const express = require('express');
const router = express.Router();

const productController = require('../../controller/user-controller/product.ctrl');
const auth = require('../../Authorization/userAuth.token')

// router.post('/search-product', customerController.searchProduct);

// router.get('/getProduct', customerController.getProduct)

// router.post('/getProductById', customerController.getProductById)

// router.post('/ViewProductByCategory', customerController.getProductByCategory)

module.exports = router;
