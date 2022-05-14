const express = require('express');
const router = express.Router();
const occassionController = require('../../controller/admin-controller/occassion.ctrl')
const auth = require("../../Authorization/userAuth.token")

const multer = require('multer');
var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });

router.post("/delete",occassionController.deleteOccassion);

router.post("/addOccassion", upload.array('occImages'), occassionController.addOccassion);

router.get("/viewOccassion",occassionController.getOccassion);

module.exports = router;
