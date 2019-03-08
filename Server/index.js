const appconfig = require('./config/appconfig')
const path =require('path')
const express = require('express');
const userrouter = require('./router/user')
const wesettingsrouter = require('./router/websettings')
const masterrouter = require('./router/masters')
const locationmanagementrouter = require('./router/location-management')
let app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET,DELETE")
    next();
})
 app.use('/person',userrouter);
 app.use('/websettings',wesettingsrouter)
 app.use('/masters',masterrouter)
 app.use('/location-management',locationmanagementrouter)
 app.use("/images", express.static(path.join("images")));


mongoose.connection.on('error', function(err) {
    if(err) {
        console.log(err)
    }
})

mongoose.connection.on('open', function(err) {
    if(err) {
        console.log(err)

    } else {
        console.log('connection successful')
    }
})


app.listen(appconfig.port,()=>{
    let db = mongoose.connect(appconfig.db.url, ({ useNewUrlParser: true }))
    console.log('Port is running in ' + appconfig.port)
});
