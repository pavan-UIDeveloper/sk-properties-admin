const mongoose = require('mongoose')
const Schema = mongoose.Schema
let possession = new Schema({
    possession:{
        type:String
    },
    menuId:{
        type:String
    }
})

mongoose.model('Possession',possession)