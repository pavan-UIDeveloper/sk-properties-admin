const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const shortId = require('shortid')
const countrySchema = require('../model/location-management/country')
const statesSchema = require('../model/location-management/states')
const districtSchema = require('../model/location-management/districts')
const MandalsSchema = require('../model/location-management/mandals')
const villagesSchema = require('../model/location-management/villages')
const countryModel = mongoose.model('Country')
const statesModel = mongoose.model('States')
const districtsModel = mongoose.model('Districts')
const mandalsModel = mongoose.model('Mandals')
const villageModel = mongoose.model('Villages')
const multer = require('multer')

const mimetypes = {
    'img/png':'png',
    'img/jpg':'jpg',
    'img/jpeg':'jpeg'
}


const storage = multer.diskStorage({
destination:(req,res,cb)=>{
    cb(null,'images')
},
filename:(req,file,cb)=>{
    const name = file.originalname.toLowerCase().split(' ').join('-')
    const ext = 'png'
    cb(null,name+'-'+Date.now()+'.'+ext)
}
})


const bannerStorage = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'banners')
    },
    filename:(req,file,cb)=>{
        const name = file.originalname.toLowerCase().split(' ').join('-')
        const ext = mimetypes[file.mimetype]
     cb(null,name+'-'+Date.now()+'.'+ext)
    }
    })


router.post('/',multer({storage: storage}).single('country_flag'),(req,res)=>{
    console.log('dlsja;ljasd;ajsdsal',req.file)
    console.log(req.body)
    const url = req.protocol + '://'+ req.get('host');
    if(req.body.contentType ==='country'){
        console.log('dlsja;ljasd;ajsdsal',req.file)
        let country = new countryModel({
            countryId:shortId.generate(),
            countryName:req.body.countryName,
            image : url+'/images/'+req.file.filename
        })
        country.save((err,result)=>{
            console.log(result)
            if(result){
               let resObj = {
                    status:200,
                    message:'Saved SuccessFully',
                    err:null,
                    result:result
                }
                res.send(resObj)
            }else{
              let resObj = {
                    status:500,
                    message:'Unable to Save Data',
                    err:err,
                    result:null
                }
                res.send(resObj)
            }
        })
    }
})

router.post('/banners',multer({storage: bannerStorage}).array('bannerImage'),(req,res)=>{
    console.log('banner',req.file)
    console.log(req.body)
    const url = req.protocol + '://'+ req.get('host');
    
        let country = new countryModel({
            countryId:shortId.generate(),
            countryName:req.body.countryName,
            image : url+'/images/'+req.file.filename
        })
        country.save((err,result)=>{
            console.log(result)
            if(result){
               let resObj = {
                    status:200,
                    message:'Saved SuccessFully',
                    err:null,
                    result:result
                }
                res.send(resObj)
            }else{
              let resObj = {
                    status:500,
                    message:'Unable to Save Data',
                    err:err,
                    result:null
                }
                res.send(resObj)
            }
        })
    
})

router.post('/',(req,res)=>{
     if(req.body.contentType ==='districts'){
        console.log(req.body)
        let districts  =new districtsModel({
            countryId:req.body.countryId,
            stateId:req.body.stateId,
            districtId:shortId.generate(),
            districtName:req.body.districtName
        })

        districts.save((err,result)=>{
            if(result){
                let resObj = {
                    status:200,
                    message:'Saved SuccessFully',
                    err:null,
                    result:result
                }
                res.send(resObj)
            }else{
                let resObj = {
                    status:500,
                    message:'Unable to Save Data',
                    err:err,
                    result:null
                }
                res.send(resObj)
            }
        })
    }else if(req.body.contentType ==='mandals'){
        let mandals = new mandalsModel({
            countryId:req.body.countryId,
            stateId:req.body.stateId,
            districtId:req.body.districtId,
            mandalId:shortId.generate(),
            mandalName:req.body.mandalName
        })
        mandals.save((err,result)=>{
            if(result){
                let resObj = {
                    status:200,
                    message:'Saved SuccessFully',
                    err:null,
                    result:result
                }
                res.send(resObj)
            }else{
                let resObj = {
                    status:500,
                    message:'Unable to Save Data',
                    err:err,
                    result:null
                }
                res.send(resObj)
            }
        })
    }else if(req.body.contentType ==='villages'){
        let villages = new villagesModel({
            countryId : req.body.countryId,
            stateId : req.body.stateId,
            districtId : req.body.districtId,
            mandalId : req.body.mandalId,
            villagesId : shortId.generate(),
            villageName : req.body.villageName
        })
        villages.save((err,result)=>{
            if(result){
                let resObj = {
                    status:200,
                    message:'Saved SuccessFully',
                    err:null,
                    result:result
                }
                res.send(resObj)
            }else if(err){
                let resObj = {
                    status:500,
                    message:'Unable to Save Data',
                    err:err,
                    result:null
                }
                res.send(resObj)
            }
        })
    }
})


router.get('/',(req,res)=>{
    console.log('pavan',req.query)
    if(req.query.type ==='countrys'){
        let currentPage = +req.query.currentPage;
        let pageSize = +req.query.pageSize;
        let query = countryModel.find();
        console.log('currentpage',currentPage)

        if(currentPage && pageSize){
            query.skip(pageSize * (currentPage - 1)).limit(pageSize)
        }
        query.then(result=>{
            if(result){
                countryModel.countDocuments().then(data=>{
                   let totalPages = Math.ceil(data/pageSize);
                let resObj = {
                    status:200,
                    messsage:'All Countries',
                    currentPage:currentPage,
                    result:result,
                    totalPages:totalPages
                }
                res.send(resObj)
            })
            }else{
                res.send('unaable get the Data')

            }
        })
        
    }else if(req.query.type ==='country'){
         countryModel.find().then(result=>{
            if(result){
                res.send(result)
                  }else{
                res.send('unaable get the Data')
           }
        })
    }  
    else if(req.query.type ==='state'){
        statesModel.find().then(result=>{
            if(result){
                res.send(result)
            }else{
                res.send('unaable get the Data')

            }
        })
    }else if(req.query.type ==='district'){
        districtsModel.find().then(result=>{
            if(result){
                res.send(result)
            }else{
                res.send('unaable get the Data')

            }
        })
    }else if(req.query.type ==='mandal'){
        console.log('mandals')
        mandalsModel.find().then(result=>{
            if(result){
                res.send(result)
            }else{
                res.send('unaable get the Data')

            }
        })
    }else if(req.body.type ==='village'){
        villageModel.find().then(result=>{
            if(result){
                res.send(result)
            }else{
                res.send('unaable get the Data')

            }
        })
    }else{
        res.send('No Data Found')

    }
})

router.post('/save_states',(req,res)=>{
    console.log('states works')
    let states = new statesModel({
        countryId:req.body.countryId,
        stateId:shortId.generate(),
        stateName:req.body.stateName
    })

    states.save((err,result)=>{
        console.log(result)
        if(result){
           let resObj = {
                status:200,
                message:'Saved SuccessFully',
                err:null,
                result:result
            }
          return res.send(resObj)
        }else{
           let resObj = {
                status:500,
                message:'Unable to Save Data',
                err:err,
                result:null
            }
            return res.send(resObj)
        }
    })
})



router.get('/states_by_country_id/:id',(req,res)=>{
    console.log(req.params)
statesModel.find({countryId:req.params.id}).then(result=>{
    console.log(result)
    if(result){
        res.send(result)
    }else{
        res.send('unaable get the Data')

    }
})
})


router.put('/country_edit',multer({storage:storage}).single('country_flag'),(req,res)=>{
    const url = req.protocol+'://'+req.get('host');
    options = {
        countryId:req.body.countryId,
        countryName:req.body.countryName,
        image:url+'/images/'+req.file.filename
    }

    


    console.log(options)
    req.body.countryName
    req.body.countryId
countryModel.updateOne({countryId:req.body.countryId},options).then(result=>{
    if(result){
   let resObj = {
        status:200,
        message:'Updated SuccessFully',
        err:null,
        result:null
    }
    res.send(resObj)
}else{
    let resObj = {
        status:400,
        message:'Not Found',
        err:null,
        result:null
    }
    res.send(resObj)
}
})

})


router.delete('/delete_country/:id',(req,res)=>{
    console.log(req.params.id)
    countryModel.deleteOne({countryId:req.params.id}).then(result=>{
        if(result){
            console.log(result)
            let resObj = {
                status:200,
                message:'Deleted Success Fully',
                err:null,
                result:null
            }
            res.send(resObj)
        }
    })
})

router.put('/state_edit',(req,res)=>{
    console.log(req.body)
    options = req.body
    statesModel.updateOne({stateId:req.body.stateId},options).then(result=>{
        if(result){
            let resObj = {
                status:200,
                message:'Updated SuccessFully',
                err:null,
                result:null
            }
            res.send(resObj)
        }else{
            let resObj = {
                status:404,
                message:'Unable to Update',
                err:null,
                result:null
            }
            res.send(resObj)
        }
    })
})

router.delete('/delete_state/:id',(req,res)=>{
    console.log(req.params.id)
    statesModel.deleteOne({stateId:req.params.id}).then(result=>{
        if(result){
            console.log(result)
            let resObj = {
                status:200,
                message:'Deleted Success Fully',
                err:null,
                result:null
            }
            res.send(resObj)
        }
    })
})

router.post('/save_districts',(req,res)=>{
    console.log(req.body)
    let districts = new districtsModel({
        countryId:req.body.countryId,
        stateId:req.body.stateId,
        districtId:shortId.generate(),
        districtName:req.body.districtName
    })

    districts.save((err,result)=>{
        console.log(result)
        if(result){
           let resObj = {
                status:200,
                message:'Saved SuccessFully',
                err:null,
                result:result
            }
          return res.send(resObj)
        }else{
           let resObj = {
                status:500,
                message:'Unable to Save Data',
                err:err,
                result:null
            }
            return res.send(resObj)
        }
    })
})

router.put('/district_edit',(req,res)=>{
    console.log(req.body)
    options = req.body
    districtsModel.updateOne({districtId:req.body.districtId},options).then(result=>{
        if(result){
            let resObj = {
                status:200,
                message:'Updated SuccessFully',
                err:null,
                result:null
            }
            res.send(resObj)
        }else{
            let resObj = {
                status:404,
                message:'Unable to Update',
                err:null,
                result:null
            }
            res.send(resObj)
        }
    })
})

router.delete('/delete_district/:id',(req,res)=>{
    console.log(req.params.id)
    districtsModel.deleteOne({districtId:req.params.id}).then(result=>{
        if(result){
            console.log(result)
            let resObj = {
                status:200,
                message:'Deleted Success Fully',
                err:null,
                result:null
            }
            res.send(resObj)
        }
    })
})


router.get('/districts_by_state_id/:id',(req,res)=>{
    console.log(req.params)
districtsModel.find({stateId:req.params.id}).then(result=>{
    console.log(result)
    if(result){
        res.send(result)
    }else{
        res.send('unaable get the Data')

    }
})
})


router.post('/save_mandals',(req,res)=>{
    console.log(req.body)
    let mandals = new mandalsModel({
        countryId:req.body.countryId,
        stateId:req.body.stateId,
        districtId:req.body.districtId,
        mandalId:shortId.generate(),
        mandalName:req.body.mandalName
    })

    mandals.save((err,result)=>{
        console.log(result)
        if(result){
           let resObj = {
                status:200,
                message:'Saved SuccessFully',
                err:null,
                result:result
            }
          return res.send(resObj)
        }else{
           let resObj = {
                status:500,
                message:'Unable to Save Data',
                err:err,
                result:null
            }
            return res.send(resObj)
        }
    })
})


router.put('/mandal_edit',(req,res)=>{
    console.log(req.body)
    options = req.body
    mandalsModel.updateOne({mandalId:req.body.mandalId},options).then(result=>{
        if(result){
            let resObj = {
                status:200,
                message:'Updated SuccessFully',
                err:null,
                result:null
            }
            res.send(resObj)
        }else{
            let resObj = {
                status:404,
                message:'Unable to Update',
                err:null,
                result:null
            }
            res.send(resObj)
        }
    })
})

router.delete('/delete_mandal/:id',(req,res)=>{
    console.log(req.params.id)
    mandalsModel.deleteOne({mandalId:req.params.id}).then(result=>{
        if(result){
            console.log(result)
            let resObj = {
                status:200,
                message:'Deleted Success Fully',
                err:null,
                result:null
            }
            res.send(resObj)
        }
    })
})


router.get('/districts_by_state_id/:id',(req,res)=>{
    console.log(req.params)
districtsModel.find({stateId:req.params.id}).then(result=>{
    console.log(result)
    if(result){
        res.send(result)
    }else{
        res.send('unaable get the Data')

    }
})
})

router.get('/mandals_by_district_id/:id',(req,res)=>{
    console.log(req.params)
mandalsModel.find({districtId:req.params.id}).then(result=>{
    console.log(result)
    if(result){
        res.send(result)
    }else{
        res.send('unaable get the Data')

    }
})
})


router.get('/get_country_auto/:country',(req,res)=>{
    console.log(req.params)
countryModel.find({countryName: {$regex:req.params.country, $options :'i'}}).then(result=>{


    console.log(result)
    if(result){
        res.send(result)
    }else{
        res.send('unaable get the Data')

    }
})
})


router.post('/save_villages',(req,res)=>{
    console.log(req.body)
    let mandals = new mandalsModel({
        countryId:req.body.countryId,
        stateId:req.body.stateId,
        districtId:req.body.districtId,
        mandalId:shortId.generate(),
        mandalName:req.body.mandalName
    })

    mandals.save((err,result)=>{
        console.log(result)
        if(result){
           let resObj = {
                status:200,
                message:'Saved SuccessFully',
                err:null,
                result:result
            }
          return res.send(resObj)
        }else{
           let resObj = {
                status:500,
                message:'Unable to Save Data',
                err:err,
                result:null
            }
            return res.send(resObj)
        }
    })
})

module.exports = router
