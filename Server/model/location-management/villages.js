const mongoose = require('mongoose')

const Schema = mongoose.Schema

let villages = new Schema({
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
    villageId:{
        type:String
    },
    villageName:{
        type:String
    }
})


mongoose.model('Villages',villages)