const mongoose = require('mongoose')

const Schema = mongoose.Schema


let user = new Schema({

    userName: {
        type: String
    },
    password: {
        type: String
    },
    isPasswordChanged:{
        type:Boolean
    }
})

mongoose.model('User', user)