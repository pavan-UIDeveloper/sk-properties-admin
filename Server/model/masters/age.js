const mongoose = require('mongoose')
const Schema = mongoose.Schema
let age = new Schema({
    age:{
        type:String
    },
    menuId:{
        type:String
    }
})

mongoose.model('Age',age)