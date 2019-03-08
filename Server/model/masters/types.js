const mongoose = require('mongoose')
const Schema = mongoose.Schema
let types = new Schema({
    type:{
        type:String
    },
    typeId:{
        type:String
    }
})

mongoose.model('Types',types)