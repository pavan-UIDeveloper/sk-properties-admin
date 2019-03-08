const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const schema = require('../model/websettings')
const websettingmodel = mongoose.model('WebSettings')
const checkauth = require('../middleware/checkauth')
const shortid = require('shortid');





router.post('/create',checkauth,(req,res)=>{
let websettings = new websettingmodel({
    address:req.body.address,
    phoneNumber:req.body.phoneNumber,
    email:req.body.email,
    aboutUs:req.body.aboutUs,
    ourMission:req.body.ourMission,
    ourVission:req.body.ourVission,
    shortId:shortid.generate()
})

websettings.save((err,result)=>{
    console.log(result)
    if(result){
        let resobj = {
            message:'Data saved Success Fully',
            result:result,
            err:null,
            status:200
        }
        return res.send(resobj)
    }else{
        let resobj = {
            message:'Unable to Save the Data',
            result:null,
            err:err,
            status:500
        }
        return res.send(resobj)    }
})

})

router.get('/get-websettings',checkauth,(req,res)=>{
    websettingmodel.find().then(result=>{
        if(result){
            res.send(result)
        }else{
            res.send(err)

        }
    })
})

router.get('/get-websettings-byid/:id',checkauth,(req,res)=>{
    console.log(req)
    websettingmodel.findOne({shortId:req.params.id}).then(result=>{
        console.log(result)
        if(result){
            res.send(result)
        }else{
            res.send('no data found')

        }
    })
})

router.put('/update-websettings-byid/:id',checkauth,(req,res)=>{
    options = req.body;
    console.log(options)
websettingmodel.update({shortId:req.params.id},options).then(result=>{
    if(result){
        res.send(result)
    }else{
    res.send('unable to Update')
    }
})    

})

router.delete('/delete-websettings-byid/:id',checkauth,(req,res)=>{
    console.log(req.body)
    websettingmodel.deleteOne({shortId:req.params.id}).then(result=>{
        if(result){
            res.send(result)
        }else{
            res.send('unable to delete')
        }
    })
})

module.exports = router;
