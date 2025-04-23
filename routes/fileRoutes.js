const express = require('express');
const router = express.Router();
const fileController = require("../controllers/controller");
const upload = require("../middleware")

router.get("/", (req, res)=>{
    res.send("Hello Puja");
});

router.post("/upload", 
    upload.single("Mahadev-pic"),
    fileController.fileUpload
);

module.exports = router;