const validator=require('validator');
const bcrypt=require('bcrypt');
const mongo_db=require('../model/user_model')
const jwt_token=require('../utility/jwt_token')
async function login_controller(req, res)
{
    const {email,password}=req.body;
    const user= await mongo_db.findOne({email});
    if(email=="" || password=="")
    {
        res.status(400).send({message:"Any field should not be empty"});
    }
    else if(validator.isEmail(email)==false)
    {
        res.status(400).send({message:"Email entered is invalid"})
    }
    else if(user!=null)
    {
        const password_match=await bcrypt.compare(password,user.password);
        var firstname=user.firstname;
        if(password_match==true)
        {
            const token=jwt_token(user._id);
            res.status(200).send({firstname,email,token});
        }
        else
        {
            res.status(400).send({message:"Incorrect email or password"});
        }
    }


}
module.exports= login_controller;