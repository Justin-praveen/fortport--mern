const express = require("express");
const hu = require("./schema")

const rout = express.Router();

rout.get("/data/:name",async(req,res)=>{

    
    
  await hu.findOne({email :req.params.name} , (er,doc)=>{
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

