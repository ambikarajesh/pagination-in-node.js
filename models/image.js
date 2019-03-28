const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({   
    name:{
        type:String,
        requires: true
    }, 
    image:{
        type:String,
        requires: true
    }
})

module.exports = mongoose.model('Images', imageSchema);