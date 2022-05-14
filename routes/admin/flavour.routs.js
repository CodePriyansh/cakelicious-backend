
const express = require('express');
const multer = require('multer')
const router = express.Router();

const flavourController = require('../../controller/admin-controller/flavour.controller')

const storage = multer.diskStorage({
    destination: "public/images",
    filename: (request, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
});
const upload = multer({ storage: storage });


router.post("/addflavour", upload.single('flavorimage'), flavourController.addtoflavour);
router.post("/findflavour", flavourController.findtheflavour);
router.get("/findall", flavourController.findalldata);
router.post("/deleteflavour", flavourController.Deletetheflavour);
router.post("/updateflavour", flavourController.updatetheflavour);


module.exports = router;
