const express = require('express');
const mongoose = require('mongoose');
const fileRouter = require("./routes/fileRoutes");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


//app.use()
app.use(express.json()); // parses JSON body
app.use(express.urlencoded({ extended: true })); // parses form data

app.use("/",fileRouter);

// conneting to mogoose db
const mongoURL = process.env.MONGODB;

mongoose
    .connect(mongoURL)
    .then(() => console.log("connected to the DB successfully"))
    .catch((err) => console.log("error while connecting to the Database", err));


app.listen(port, (err)=>{
    if(err){
        console.log("Error while connected to the server", err);
    }
    console.log(`Server is strated on the http://localhost:${port}`);
})