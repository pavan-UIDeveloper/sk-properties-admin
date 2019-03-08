const express = require('express')
const router = express.Router();
const shortId = require('shortid')

const mongoose = require('mongoose')
const schema = require('../model/masters/types')
const schema1 = require('../model/masters/age')
const schema2 = require('../model/masters/amenities')
const schema3= require('../model/masters/facing')
const schema4 = require('../model/masters/floorings')
const schema5 = require('../model/masters/furnishingStates')
const schema6 = require('../model/masters/measurements')
const schema7 = require('../model/masters/parkings')
const schema8 = require('../model/masters/possession')
const schema9 = require('../model/masters/statuses')
const typesModel = mongoose.model('Types')
const ageModel = mongoose.model('Age')
const amenitiesModel = mongoose.model('Amenities')
const facingModel = mongoose.model('Facing')

const flooringsModel = mongoose.model('Floorings')
const furnishingStatesModel = mongoose.model('FurnishingStates')
const measurementsModel = mongoose.model('Measurements')
const parkingsModel = mongoose.model('Parkings')
const possessionModel = mongoose.model('Possession')
const statusesModel = mongoose.model('Statuses')




router.post('/',(req,res)=>{

console.log(req.body)
    //saving property Type
    if(req.body.contentType==='propertyType'){

    let types = new typesModel({
        type:req.body.type,
        typeId:shortId.generate()
    })
    types.save((err,result)=>{
        if(err){
            let resobj ={
                status:500,
                message:'unable to save the data',
                err:null,
                result:null
            
            }     
            res.send(resobj)
       }else if(result){
        let resobj ={
            status:200,
            message:'Data Saves SuccessFully',
            err:null,
            result:result
        } 
        res.send(resobj)
       }
    })
}else if(req.body.contentType==='age'){
    //saving Age

        let age = new ageModel({
            age:req.body.age,
            menuId:shortId.generate()
        })
        age.save((err,result)=>{
            if(err){
                let resobj ={
                    status:500,
                    message:'unable to save the data',
                    err:null,
                    result:null
                
                }     
                res.send(resobj)
           }else if(result){
            let resobj ={
                status:200,
                message:'Data Saves SuccessFully',
                err:null,
                result:result
            } 
            res.send(resobj)
           }
        })
}
else if(req.body.contentType==='amenities'){
    //saving amenities
    let amenities = new amenitiesModel({
        amenities:req.body.amenities,
        menuId:shortId.generate()
    })
    amenities.save((err,result)=>{
        if(err){
            let resobj ={
                status:500,
                message:'unable to save the data',
                err:null,
                result:null
            
            }     
            res.send(resobj)
       }else if(result){
        let resobj ={
            status:200,
            message:'Data Saves SuccessFully',
            err:null,
            result:result
        } 
        res.send(resobj)
       }
    })

}else if(req.body.contentType==='facing'){
    //saving Facing

    let facing = new facingModel({
        facing:req.body.facing,
        menuId:shortId.generate()
    })
    facing.save((err,result)=>{
        if(err){
            let resobj ={
                status:500,
                message:'unable to save the data',
                err:null,
                result:null
            
            }     
            res.send(resobj)
       }else if(result){
        let resobj ={
            status:200,
            message:'Data Saves SuccessFully',
            err:null,
            result:result
        } 
        res.send(resobj)
       }
    })
}else if(req.body.contentType==='floorings'){

    //saving Florings
console.log(req.body.contentType)
    let florings = new floringsModel({
        floorings:req.body.floorings,
        menuId:shortId.generate()
    })
    floorings.save((err,result)=>{
        if(err){
            let resobj ={
                status:500,
                message:'unable to save the data',
                err:null,
                result:null
            
            }     
            res.send(resobj)
       }else if(result){
        let resobj ={
            status:200,
            message:'Data Saves SuccessFully',
            err:null,
            result:result
        } 
        res.send(resobj)
       }
    })
}else if(req.body.contentType==='furnishingStates'){
//saving furnishingStates

    let furnishingStates = new furnishingStatesModel({
        furnishingStates:req.body.furnishingStates,
        menuId:shortId.generate()
    })
    furnishingStates.save((err,result)=>{
        if(err){
            let resobj ={
                status:500,
                message:'unable to save the data',
                err:null,
                result:null
            
            }     
            res.send(resobj)
       }else if(result){
        let resobj ={
            status:200,
            message:'Data Saves SuccessFully',
            err:null,
            result:result
        } 
        res.send(resobj)
       }
    })
}else if(req.body.contentType==='measurements'){
//saving measurements

let measurements = new measurementsModel({
    measurements:req.body.measurements,
    menuId:shortId.generate()
})
measurements.save((err,result)=>{
    if(err){
        let resobj ={
            status:500,
            message:'unable to save the data',
            err:null,
            result:null
        
        }     
        res.send(resobj)
   }else if(result){
    let resobj ={
        status:200,
        message:'Data Saves SuccessFully',
        err:null,
        result:result
    } 
    res.send(resobj)
   }
})
}else if(req.body.contentType==='parkings'){
//saving parkings

let parkings = new parkingsModel({
    parkings:req.body.parkings,
    menuId:shortId.generate()
})
parkings.save((err,result)=>{
    if(err){
        let resobj ={
            status:500,
            message:'unable to save the data',
            err:null,
            result:null
        
        }     
        res.send(resobj)
   }else if(result){
    let resobj ={
        status:200,
        message:'Data Saves SuccessFully',
        err:null,
        result:result
    } 
    res.send(resobj)
   }
})
}else if(req.body.contentType==='possession'){
//saving possession

let possession = new possessionModel({
    possession:req.body.possession,
    menuId:shortId.generate()
})
possession.save((err,result)=>{
    if(err){
        let resobj ={
            status:500,
            message:'unable to save the data',
            err:null,
            result:null
        
        }     
        res.send(resobj)
   }else if(result){
    let resobj ={
        status:200,
        message:'Data Saves SuccessFully',
        err:null,
        result:result
    } 
    res.send(resobj)
   }
})
}else if(req.body.contentType==='statuses'){
//saving statuses
console.log(req.body.statuses)

let statuses = new statusesModel({
    statuses:req.body.statuses,
    menuId:shortId.generate()
})
statuses.save((err,result)=>{
    if(err){
        let resobj ={
            status:500,
            message:'unable to save the data',
            err:null,
            result:null
        
        }     
        res.send(resobj)
   }else if(result){
    let resobj ={
        status:200,
        message:'Data Saves SuccessFully',
        err:null,
        result:result
    } 
    res.send(resobj)
   }
})
}else{
    let resobj ={
        status:500,
        message:'unable to save the data',
        err:null,
        result:null
    
    }     
    res.send(resobj)
}

})


router.get('/',(req,res)=>{
    if(req.query.type==='propertytype'){
        typesModel.find().then(result=>{
            if(result){
               
                res.send(result)

             }else{
                
                res.send("No data found")

             }
            
        })
    }else if(req.query.type==='age'){
        ageModel.find().then(result=>{
                if(result){
                   
                    res.send(result)
    
                 }else{
                    
                    res.send("No data found")
    
                 }
                
            })
    }else if(req.query.type==='amenities'){
        amenitiesModel.find().then(result=>{
            if(result){
               
                res.send(result)

             }else{
                
                res.send("No data found")

             }
            
        })
    }else if(req.query.type==='facing'){
        facingModel.find().then(result=>{
            if(result){
               
                res.send(result)

             }else{
                
                res.send("No data found")

             }
            
        })
    }else if(req.query.type==='floorings'){
        flooringsModel.find().then(result=>{
            if(result){
               
                res.send(result)

             }else{
                
                res.send("No data found")

             }
            
        })
    }else if(req.query.type==='furnishingStates'){
        furnishingStatesModel.find().then(result=>{
            if(result){
               
                res.send(result)

             }else{
                
                res.send("No data found")

             }
            
        })
    }else if(req.query.type==='measurements'){
        measurementsModel.find().then(result=>{
            if(result){
               
                res.send(result)

             }else{
                
                res.send("No data found")

             }
            
        })
    }else if(req.query.type==='parkings'){
        parkingsModel.find().then(result=>{
            if(result){
               
                res.send(result)

             }else{
                
                res.send("No data found")

             }
            
        })
    }else if(req.query.type==='possession'){
        possessionModel.find().then(result=>{
            if(result){
               
                res.send(result)

             }else{
                
                res.send("No data found")

             }
            
        })
    }else if(req.query.type==='statuses'){
        statusesModel.find().then(result=>{
            if(result){
               
                res.send(result)

             }else{
                
                res.send("No data found")

             }
            
        })
    }

})

router.put('/:id',(req,res)=>{
    console.log(req.body.contentType)

    if(req.body.contentType === "propertytype"){
        console.log(req.body.contentType)

        options = {
            type:req.body.type,
        }
        typesModel.update({typeId:req.params.id},options).then(result=>{
            console.log(result);
            if(result){
                let resobj ={
                    status:200,
                    message:'Data Updated SuccessFully',
                    err:null,
                    result:result
                }     
                res.send(resobj)
            }else{
                let resobj ={
                    status:500,
                    message:'Unable to Update the Data',
                    err:null,
                    result:null
                }     
                res.send(resobj)
            }
        })
    }else if(req.body.contentType === "age"){
        console.log(req.body.contentType)

        options = {
            age:req.body.age,
        }
        ageModel.update({menuId:req.params.id},options).then(result=>{
            console.log(result);
            if(result){
                let resobj ={
                    status:200,
                    message:'Data Updated SuccessFully',
                    err:null,
                    result:result
                }     
                res.send(resobj)
            }else{
                let resobj ={
                    status:500,
                    message:'Unable to Update the Data',
                    err:null,
                    result:null
                }     
                res.send(resobj)
            }
        })
    }else if(req.body.contentType === "amenities"){
        console.log(req.body.contentType)

        options = {
            amenities:req.body.amenities,
        }
        console.log(options)
        amenitiesModel.update({menuId:req.params.id},options).then(result=>{
            console.log(result);
            if(result){
                let resobj ={
                    status:900,
                    message:'Data Updated SuccessFully',
                    err:null,
                    result:result
                }     
                res.send(resobj)
            }else{
                let resobj ={
                    status:500,
                    message:'Unable to Update the Data',
                    err:null,
                    result:null
                }     
                res.send(resobj)
            }
        })
    }else if(req.body.contentType === "facing"){
        console.log(req.body.contentType)

        options = {
            facing:req.body.facing,
        }
        facingModel.update({menuId:req.params.id},options).then(result=>{
            console.log(result);
            if(result){
                let resobj ={
                    status:200,
                    message:'Data Updated SuccessFully',
                    err:null,
                    result:result
                }     
                res.send(resobj)
            }else{
                let resobj ={
                    status:500,
                    message:'Unable to Update the Data',
                    err:null,
                    result:null
                }     
                res.send(resobj)
            }
        })
    }else if(req.body.contentType === "floorings"){
        console.log(req.body.contentType)

        options = {
            floorings:req.body.floorings,
        }
        flooringsModel.update({menuId:req.params.id},options).then(result=>{
            console.log(result);
            if(result){
                let resobj ={
                    status:200,
                    message:'Data Updated SuccessFully',
                    err:null,
                    result:result
                }     
                res.send(resobj)
            }else{
                let resobj ={
                    status:500,
                    message:'Unable to Update the Data',
                    err:null,
                    result:null
                }     
                res.send(resobj)
            }
        })
    }else if(req.body.contentType === "furnishingStates"){
        console.log(req.body.contentType)

        options = {
            furnishingStates:req.body.furnishingStates,
        }
        furnishingStatesModel.update({menuId:req.params.id},options).then(result=>{
            console.log(result);
            if(result){
                let resobj ={
                    status:200,
                    message:'Data Updated SuccessFully',
                    err:null,
                    result:result
                }     
                res.send(resobj)
            }else{
                let resobj ={
                    status:500,
                    message:'Unable to Update the Data',
                    err:null,
                    result:null
                }     
                res.send(resobj)
            }
        })
    }else if(req.body.contentType === "measurements"){
        console.log(req.body.contentType)

        options = {
            measurements:req.body.measurements,
        }
        measurementsModel.update({menuId:req.params.id},options).then(result=>{
            console.log(result);
            if(result){
                let resobj ={
                    status:200,
                    message:'Data Updated SuccessFully',
                    err:null,
                    result:result
                }     
                res.send(resobj)
            }else{
                let resobj ={
                    status:500,
                    message:'Unable to Update the Data',
                    err:null,
                    result:null
                }     
                res.send(resobj)
            }
        })
    }else if(req.body.contentType === "parkings"){
       // console.log(req.body.contentType)

        options = {
            parkings:req.body.parkings,
        }
        parkingsModel.update({menuId:req.params.id},options).then(result=>{
            console.log(result);
            if(result){
                let resobj ={
                    status:200,
                    message:'Data Updated SuccessFully',
                    err:null,
                    result:result
                }     
                res.send(resobj)
            }else{
                let resobj ={
                    status:500,
                    message:'Unable to Update the Data',
                    err:null,
                    result:null
                }     
                res.send(resobj)
            }
        })
    }else if(req.body.contentType === "possession"){
        console.log(req.body.contentType)

        options = {
            possession:req.body.possession,
        }
        possessionModel.update({menuId:req.params.id},options).then(result=>{
            console.log(result);
            if(result){
                let resobj ={
                    status:200,
                    message:'Data Updated SuccessFully',
                    err:null,
                    result:result
                }     
                res.send(resobj)
            }else{
                let resobj ={
                    status:500,
                    message:'Unable to Update the Data',
                    err:null,
                    result:null
                }     
                res.send(resobj)
            }
        })
    }else if(req.body.contentType ==="statuses"){
        options = {
            statuses:req.body.statuses,
        }
        statusesModel.update({menuId:req.params.id},options).then(result=>{
            console.log(result);
            if(result){
                let resobj ={
                    status:200,
                    message:'Data Updated SuccessFully',
                    err:null,
                    result:result
                }     
                res.send(resobj)
            }else{
                let resobj ={
                    status:500,
                    message:'Unable to Update the Data',
                    err:null,
                    result:null
                }     
                res.send(resobj)
            }
        })
    }
})

module.exports =router;