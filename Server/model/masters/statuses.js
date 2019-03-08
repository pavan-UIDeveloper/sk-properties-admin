const mongoose = require('mongoose')
const Schema = mongoose.Schema
let statuses = new Schema({
    statuses:{
        type:String
    },
    menuId:{
        type:String
    }
})

mongoose.model('Statuses',statuses)