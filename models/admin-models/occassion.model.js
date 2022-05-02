const mongoose = require('mongoose');

const occassionSchema = mongoose.Schema({
    occasionName : {
        type:String,
        required: true
    }
})

module.exports = mongoose.model("occassion",occassionSchema);