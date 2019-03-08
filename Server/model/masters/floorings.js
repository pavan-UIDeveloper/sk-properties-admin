const mongoose = require('mongoose')
const Schema = mongoose.Schema
let floorings = new Schema({
    floorings:{
        type:String
    },
    menuId:{
        type:String
    }
})

mongoose.model('Floorings',floorings)