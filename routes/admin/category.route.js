const express = require('express');
const router = express.Router();

const multer = require('multer');
var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });
const categoryController = require('../../controller/admin-controller/category.ctrl');

const tokenVerification = require("../../Authorization/adminAuth.token")

router.post("/addCategory", tokenVerification.varifyToken, upload.single('catImage'), categoryController.addCategory);

router.get("/viewCategory", tokenVerification.varifyToken, categoryController.getCategory);

router.post("/deleteCategory", tokenVerification.varifyToken, categoryController.deleteCategory);

router.post("/updateCategory", tokenVerification.varifyToken, upload.single('catImage'), categoryController.updateCategory);
module.exports = router;
