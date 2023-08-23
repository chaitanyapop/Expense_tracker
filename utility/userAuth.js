const jwt=require('jsonwebtoken')
const user_model=require('../model/user_model')
async function userAuth(req,res,next)
{
    const authorization=req.headers.authorization;
    console.log(authorization)
    if(!authorization)
    {
        res.status(401).send({message:"auth token required"})
    }
    const auth_token=authorization.split(" ")[1];
    try
    {
        const {id}=jwt.verify(auth_token,process.env.KEY);
        req.user=await user_model.findOne({_id:id}).select('_id');
        //console.log(req.user)
        next()
    }
    catch(e)
    {
        //console.log(e)
        console.log("I am here")
        res.status(401).send({message:"User is not authenticated"})
    }

}
module.exports=userAuth