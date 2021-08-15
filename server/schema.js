const mongoose = require("mongoose");

const sch = mongoose.Schema;

const S = new sch({
    names : {
        type : String
    },
    email : {
        type : String
    },
    password:{
        type:String
    },
    isAdmin : {
        type : Boolean,
        default : false
        
    }
})

const hu = mongoose.model("Fortportf",S);

module.exports = hu;