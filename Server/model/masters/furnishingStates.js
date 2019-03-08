const mongoose = require('mongoose')
const Schema = mongoose.Schema
let furnishingStates = new Schema({
    furnishingStates:{
        type:String
    },
    menuId:{
        type:String
    }
})

mongoose.model('FurnishingStates',furnishingStates)