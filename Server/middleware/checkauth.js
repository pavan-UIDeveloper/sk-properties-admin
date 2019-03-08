const jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
try{
    jwt.verify(req.headers.authorization,'thisisthesecretkeyforourproject')
    next();
    }
    catch(error){
    console.log(error)
    }
}