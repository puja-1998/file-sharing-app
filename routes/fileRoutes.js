const express = require('express');
const router = express.Router();
const fileController = require("../controllers/controller");
const upload = require("../middleware")

router.get("/", (req, res)=>{
    res.send("Hello Puja");
});

//to upload the file
router.post("/api/files/upload", 
    upload.single("Mahadev-pic"),
    fileController.fileUpload
);

//to share the file
router.post("/api/files/share", fileController.fileShare);

//to download the file
router.get("/download/:id", fileController.fileDownload)

module.exports = router;