const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    email :{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const admin = mongoose.model("adminApi" , adminSchema)
module.exports = admin