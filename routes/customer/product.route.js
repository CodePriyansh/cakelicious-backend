const express = require('express');
const router = express.Router();

const productController = require('../../controller/user-controller/product.ctrl');

const auth = require('../../Authorization/userAuth.token')

router.post("/getProductBycategory/:categoryId", auth.verifyToken, productController.getProductByCategory);

router.post("/getProductBycategory/:pId", auth.verifyToken, productController.getProductById);

router.get("/searchProduct/:text", auth.verifyToken, productController.searchProduct)

router.post("/addReview" , auth.verifyToken, productController.addReview)

module.exports = router;
