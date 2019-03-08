const mongoose = require('mongoose')

const Schema = mongoose.Schema

let country = new Schema({
    countryId:{
        type:String
    },
    countryName:{
        type:String
    },
    image:{
        type:String
    }
})

mongoose.model('Country',country)