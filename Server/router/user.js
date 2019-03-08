

const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const schema = require('../model/user')
const schema2 = require('../model/location')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const checkauth = require('../middleware/checkauth')
const userModel = mongoose.model('User')
const locationModel = mongoose.model('Location')
router.post('/signup', (req, res) => {
    console.log(req.body.userName)
    console.log(req.body.password);

 userModel.findOne({userName:req.body.userName}).then(result=>{
            console.log(result);
            if(!result){
                bcryptjs.hash(req.body.password, 10).then(hash => {
                    let usernames = new userModel({
                        userName:req.body.userName,
                        password:hash,
                        isPasswordChanged:false
                    })
                    usernames.save((err, result) => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.send(result)
                        }
                    })
                }).catch(err=>{
                    console.log('error')
                    res.status(500).json({
                        message:'some error occured',
                        result:null,
                        err:err
                    })
                })
            }else{
                console.log('user already existed')
                   res.status(500).json({
                       message:'user already existed',
                        result:null,
                        err:null
                   }) 
            }
 }).catch(err=>{
     console.log('error')
     res.status(500).json({
         message:'some error occured',
         result:null,
         err:err
     })
 })
   
})


router.post('/login',(req,res)=>{
    let userDetails;
    console.log(req.body.userName)
userModel.findOne({userName:req.body.userName}).then(user=>{
    console.log(user)
    if(!user){
    //    return res.status(500).json({
    //         message:'no user existed'
    //     })
    let resobj = {
        message:'no user existed',
        result:null,
        err:null,
        token:null,
        status:404
    }
    return res.send(resobj)
    
    }
    userDetails=user;
    bcryptjs.compare(req.body.password,user.password).then(isMatch=>{
        console.log(isMatch)
            if(!isMatch){
                // res.status(500).json({
                //     message:'Password In Correect',
                //      result:null,
                //      err:null
                // }) 
                let resobj = {
                    message:'password in correct',
                    result:null,
                    err:null,
                    token:null,
                    status:404
                }
                return res.send(resobj)
            }
   let token=jwt.sign({username:userDetails.email,id:userDetails._id},'thisisthesecretkeyforourproject')
            if(token){
                // res.status(200).json({
                //     message:'login success',
                //     token:token
                // }) 
               
                let resobj = {
                    message:'login success',
                    result:user,
                    err:null,
                    token:token,
                    status:200
                }
                return res.send(resobj)
            }
    }).catch(err=>{
        console.log(err);
    })

}).catch(err=>{
    console.log(err)
})
})

router.post('/country_save',checkauth,(req,res)=>{
    console.log('pavan');
    let locationdetails = new locationModel({
        countryName:req.body.countryName,
        countryCode:req.body.countryCode,
        countryLanguage:req.body.countryLanguage
    })
    locationdetails.save((err,result)=>{
        console.log(err)
        console.log(result)

        if(err){
            res.status(err)
        }else{
            res.status(200).json({
                message:'data saved success fully'
            })
        }
    });
    console.log(locationdetails);
})


router.post('/change-password',(req,res)=>{
    console.log(req.body)
    userModel.findOne({userName:req.body.userName}).then(user=>{
        console.log(user)
        if(!user){
            let resobj = {
                message:'No user Existed',
                result:null,
                err:null,
                token:null,
                status:404
            }
            return res.send(resobj)
        }
        bcryptjs.compare(req.body.oldpassword,user.password).then(isMatch=>{
        if(!isMatch){
            let resobj = {
                message:'You have entered wrong Password',
                result:null,
                err:null,
                token:null,
                status:404
            }
            return res.send(resobj)
        }
        bcryptjs.hash(req.body.newpassword,10).then(hash=>{
           
            options = {
                userName:req.body.userName,
                password:hash,
                isPasswordChanged:true
            }
        userModel.update({userName:req.body.userName},options).then(result=>{
            if(result){
                res.send(result)
            }else{
                res.send('unable to change the password')
            }
        })
        })
    })
       
    })
})


module.exports = router;
