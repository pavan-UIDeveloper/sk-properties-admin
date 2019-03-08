const mongoose = require('mongoose')
const Schema = mongoose.Schema
let amenities = new Schema({
    amenities:{
        type:String
    },
    menuId:{
        type:String
    }
})

mongoose.model('Amenities',amenities)