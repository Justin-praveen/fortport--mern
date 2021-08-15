const express = require("express");
const hu = require("./schema")

const rout = express.Router();

rout.get("/data",async(req,res)=>{
    
    const em = req.body.email;
  await hu.findOne({emails : em} , (er,doc)=>{
       res.json(doc)
           
    
    });
 
    
})

rout.post("/register", async(req,res)=>{
    const fu = await new hu({
        names : req.body.names,
        email : req.body.email,
        password : req.body.password
    })

    const i  = await fu.save();
    res.json(i);
 

}) 
 


module.exports = rout;

