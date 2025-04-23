const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path'); // inbuilt module

//parse the form data and covert it into the json, 
// it will help to uploading or storing the file in the destination/ directory on our system


//path of the  directory where we want to store the uploaded file
//console.log(__dirname, "Directory Name");
const filePath = path.join(__dirname, "uploadedFiles");
console.log(filePath);

//storage: RAM, HDD/SSD

const storage = multer.diskStorage({
    destination:filePath,
    filename: function(req, file, cb){
        console.log(file, "file");
        const fileExtension = path.extname(file.originalname) //to get img file extension i.e .png 
        console.log(fileExtension, "fileExtension");
        
        //uuid
        const fileName = uuidv4()+fileExtension;
        //cb(null, req.filename+fileExtension)  // cb => callback
        cb(null, fileName); // informing multer about the new file name
    },
});

const upload = multer({
    storage: storage,
});


module.exports = upload;
