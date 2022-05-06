const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const adminController = require("../controller/admin-controller/admin.ctrl");
const categoryController = require("../controller/admin-controller/category.ctrl");
const occassionController = require("../controller/admin-controller/occassion.ctrl");
const productController = require("../controller/admin-controller/product.ctrl");
const CustomerController = require("../controller/admin-controller/customer.ctrl");

const tokenVerification = require("../Authorization/adminAuth.token");

const multer = require("multer");
var storage = multer.diskStorage({
  destination: "public/images",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });

router.post(
  "/signin",
  body("email", "Inalid Email Id").isEmail(),
  body("password").not().isEmpty(),
  adminController.signin
);
router.post(
  "/signup",
  body("email").isEmail(),
  body("name").not().isEmpty(),
  body("password", "password length must be 5 letter long").isLength(5),
  body("mobile", "mobile length must be 10 number long").isLength(10),
  adminController.signup
);

router.post(
  "/addCategory",
  tokenVerification.varifyToken,
  upload.single("catImage"),
  categoryController.addCategory
);

router.get(
  "/viewCategory",
  tokenVerification.varifyToken,
  categoryController.getCategory
);

router.post(
  "/deleteCategory",
  tokenVerification.varifyToken,
  categoryController.deleteCategory
);

router.post(
  "/updateCategory",
  tokenVerification.varifyToken,
  upload.single("catImage"),
  categoryController.updateCategory
);

router.post(
  "/addOccassion",
  tokenVerification.varifyToken,
  upload.single("occImage"),
  occassionController.addOccassion
);

router.get(
  "/viewOccassion",
  tokenVerification.varifyToken,
  occassionController.getOccassion
);

router.post(
  "/addProduct",
  tokenVerification.varifyToken,
  upload.array("prodImages"),
  productController.addProduct
);

router.get(
  "/viewProduct",
  tokenVerification.varifyToken,
  productController.getProduct
);

router.post(
  "/deleteProduct",
  tokenVerification.varifyToken,
  productController.deleteProduct
);

//  router.post("/updateProduct",tokenVerification.varifyToken, upload.array('prodsImages'), productController.updateProduct);
router.post(
  "/getProductBycategory/:categoryId",
  tokenVerification.varifyToken,
  productController.getProductByCategory
);

router.get(
  "/searchProduct/:text",
  tokenVerification.varifyToken,
  productController.searchProduct
);

router.get(
  "/viewCustomer",
  tokenVerification.varifyToken,
  CustomerController.getCustomer
);

router.get(
  "/viewOrder",
  tokenVerification.varifyToken,
  CustomerController.orderDetail
);
module.exports = router;
