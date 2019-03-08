const mongoose = require('mongoose')
const Schema = mongoose.Schema
let measurements = new Schema({
    measurements:{
        type:String
    },
    menuId:{
        type:String
    }
})

mongoose.model('Measurements',measurements)