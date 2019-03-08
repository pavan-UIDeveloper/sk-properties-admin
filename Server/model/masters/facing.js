const mongoose = require('mongoose')
const Schema = mongoose.Schema
let facing = new Schema({
    facing:{
        type:String
    },
    menuId:{
        type:String
    }
})

mongoose.model('Facing',facing)