const express = require('express');
const fileRouter = require("./routes/fileRoutes");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


//app.use()
app.use("/api/files",fileRouter);

app.listen(port, (err)=>{
    if(err){
        console.log("Error while connected to the server", err);
    }
    console.log(`Server is strated on the http://localhost:${port}`);
})