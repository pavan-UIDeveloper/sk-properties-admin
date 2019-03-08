const mongoose = require('mongoose')

const Schema = mongoose.Schema

let websettings = new Schema({
    address: {
        type:String,
    },
    phoneNumber:{
        type:Number
    },
    email:{
        type:String
    },
    aboutUs:{
        type:String
    },
    ourMission:{
        type:String
    },
    ourVission:{
        type:String
    },
    shortId:{
        type:String
    }
})
mongoose.model('WebSettings',websettings)