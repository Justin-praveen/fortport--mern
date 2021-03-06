const express = require("express");
const cros  = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
  
const mongoose = require("mongoose");
const rout = require("./Rout");

const app = express(); 
require('dotenv').config()

app.use(morgan("dev"));
app.use(cros());

app.use(express.json());

app.use("/reg",rout);

app.use(express.static(path.join(__dirname,"build")));
app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,"build","index.html"))

})

const ini = {
    useUnifiedTopology : true,
    useNewUrlParser : true

}




mongoose.connect(process.env.DB,ini).then(()=>{
    console.log("db connected");
    console.log(process.env.DU)
})
app.list(9000,()=> console.log("port connected"))

