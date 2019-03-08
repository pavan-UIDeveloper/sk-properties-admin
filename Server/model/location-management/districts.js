const mongoose = require('mongoose')

const Schema = mongoose.Schema

let districts = new Schema({
    countryId:{
        type:String
    },
    stateId:{
        type:String
    },
    districtId:{
        type:String
    },
    districtName:{
        type:String
    }
})

mongoose.model('Districts',districts)