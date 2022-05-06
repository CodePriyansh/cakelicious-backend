const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const adminController = require("../../controller/admin-controller/admin.ctrl");

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

module.exports = router;
