const mongoose = require('mongoose')

const Schema = mongoose.Schema

let states = new Schema({
   countryId:{
    type:String
   },   
   stateId:{
    type:String
   },
   stateName:{
    type:String
   }
})

mongoose.model('States',states)