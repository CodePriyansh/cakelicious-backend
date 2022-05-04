const mongoose = require('mongoose');

const occassionSchema = mongoose.Schema({
    occName : {
        type:String,
        required: true
    },
    occImage : {
        type:String,
  
    }
})

module.exports = mongoose.model("occassion",occassionSchema);