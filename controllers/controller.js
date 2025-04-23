const fileModel = require("../models/models");


const fileUpload = async (req, res) =>{
    //console.log(req.file, "req");
try{
    await fileModel.create({
        fileName: req.file.filename,
        origionalName: req.file.originalname,
        filePath: req.file.path,
        size: req.file.size,
        userName: "test@gmail.com",
    });
    res.status(200).json({
        success:true,
        message:"File uploaded successfully",
    });
}
catch(err){
    console.log("error in uploading the file", err); 
}
}


const fileShare = async (req, res)=>{
    try{
       const fileId = req.body.id;
        let file = await fileModel.findById(fileId);
        if(!file){
            res.status(400).json({
                message: "file not found in the db",
            });
            return;
        }
        res.status(200).json({
            message: "file found successfully",
            data: `/download/${file._id}`, //link of the file
        });

        res.status(200).json({
            success: true,
            message: "file shared successfully",
        });
    }catch(err){
        console.log("error to share the file", err);   
    }
}

const fileDownload = async(req, res) =>{
    try{
        const fileId = req.params.id;
        console.log(fileId, "id");
        const file = await fileModel.findById(fileId);

        if(!file){
            res.status(400).json({
                message: "file not found in the db",
            });
            return;
        }
        
        res.status(200).json({
            success:true,
            message:"File Downloaded successfully"
        });
    }catch(err){
        console.log("error in downloading the file", err);
    }
    
};

module.exports = {fileUpload, fileShare, fileDownload}