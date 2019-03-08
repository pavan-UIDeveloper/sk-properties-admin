const mongoose = require('mongoose')

const Schema = mongoose.Schema

let banners = new Schema({
    bannerId:{
        type:String
    },
    bannerImage:{
        type:String
    }
})

mongoose.model('Banner',banners)