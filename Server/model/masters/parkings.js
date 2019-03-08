const mongoose = require('mongoose')
const Schema = mongoose.Schema
let parkings = new Schema({
    parkings:{
        type:String
    },
    menuId:{
        type:String
    }
})

mongoose.model('Parkings',parkings)