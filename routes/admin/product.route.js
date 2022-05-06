const express = require('express');
const router = express.Router();
const productController = require('../../controller/admin-controller/product.ctrl')
const tokenVerification = require("../../Authorization/adminAuth.token")

const multer = require('multer');
var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });

router.post("/addProduct", tokenVerification.varifyToken, upload.array('prodImages'), productController.addProduct);

router.get("/viewProduct", tokenVerification.varifyToken, productController.getProduct);

router.post("/deleteProduct", tokenVerification.varifyToken, productController.deleteProduct);

//  router.post("/updateProduct",tokenVerification.varifyToken, upload.array('prodsImages'), productController.updateProduct);
router.post("/getProductBycategory/:categoryId", tokenVerification.varifyToken, productController.getProductByCategory);

router.get("/searchProduct/:text", tokenVerification.varifyToken, productController.searchProduct)
module.exports = router;