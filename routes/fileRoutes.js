const express = require('express');
const router = express.Router();
const upload = require("../middleware");
const fileController = require("../controllers/controller");

router.get("/", (req, res)=>{
    res.send("Hello Puja");
});

//to upload the file
router.post("/api/files/upload", 
    upload.single("Lotus-pic"),
    fileController.fileUpload
);

//to share the file
router.post("/api/files/share", fileController.fileShare);

//to download the file
router.get("/download/:id", fileController.fileDownload)

module.exports = router;