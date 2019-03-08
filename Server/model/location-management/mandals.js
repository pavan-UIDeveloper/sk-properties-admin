const mongoose = require('mongoose')

const Schema = mongoose.Schema

let mandals = new Schema({
    countryId:{
        type:String
    },
    stateId:{
        type:String
    },
    districtId:{
        type:String
    },
    mandalId:{
        type:String
    },
    mandalName:{
        type:String
    }
})


mongoose.model('Mandals',mandals)