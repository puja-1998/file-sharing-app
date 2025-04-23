const mongoose = require('mongoose');

const fileScheme = new mongoose.Schema({
    fileName:{
        typeof:String
    },
    origionalName:{
        type:String
    },
    fileName:{
        type:String
    },
    filePath:{
        type:String
    },
    size:{
        type:Number
    },
    userName:{
        type:String
    },
});

const fileModel = mongoose.model("fileModel", fileScheme);
module.exports = fileModel;