const fileUpload = (req, res) =>{
    res.status(200).json({
        success:true,
        message:"File uploaded successfully"
    })
}


const fileShare = (req, res)=>{
    
    res.status(200).json({
        success: true,
        message: "file uploaded successfully"
    });
}

const fileDownload = (req, res) =>{
    res.status(200).json({
        success:true,
        message:"File Downloaded successfully"
    })
}

module.exports = {fileUpload, fileShare, fileDownload}