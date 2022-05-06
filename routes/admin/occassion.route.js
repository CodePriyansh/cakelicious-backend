const express = require('express');
const router = express.Router();
const occassionController = require('../../controller/admin-controller/occassion.ctrl')
const tokenVerification = require("../../Authorization/adminAuth.token")

const multer = require('multer');
var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });

router.post("/addOccassion", tokenVerification.varifyToken, upload.single('occImage'), occassionController.addOccassion);

router.get("/viewOccassion", tokenVerification.varifyToken, occassionController.getOccassion);
module.exports = router;
