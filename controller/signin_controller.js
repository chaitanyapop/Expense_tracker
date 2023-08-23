const validator=require('validator')
const bcrypt=require('bcrypt');
const user_model=require('../model/user_model')
const jwt_token=require('../utility/jwt_token')
const verification=require("../utility/verification")
var {firstname,email, password, mobile_number}="";
var otp_val=0;
async function create_account(req, res)
{
    const {otp}=req.body;
    if(otp_val!=otp)
    {
        res.status(400).send({message:"Otp not verified"})
    }
    else
    {
        try
        {
            const salt=await bcrypt.genSalt(10);
            const hashed_password=await bcrypt.hash(password,salt);
            const user_created=await user_model.create({firstname,email, password:hashed_password,mobile_number});
            const token=jwt_token(user_created._id);
            res.status(200).send({firstname,email,token});
        }
        catch(error)
        {
            res.status(400).send(error);
        }
    }

     
}

async function create_otp(req,res)
{
    //console.log(req);
    email=req.body.email;
    password=req.body.password;
    mobile_number=req.body.mob_num;
    firstname=req.body.firstname;
    if(firstname=="" || email=="" || password=="" || mobile_number=="")
    {
        res.status(400).send({message:"Information cannot be empty"});
    }
    else if(validator.isEmail(email)===false)
    {
        res.status(400).send({message:" Email is not valid"});
    }
    else if(validator.isStrongPassword(password)===false)
    {
        res.status(400).send({message:"Password is not strong enough"});
    }
    else
    {
        const user_exist=await user_model.findOne({email})
        
        if(user_exist!=null)
        {
            res.status(400).send({message:"user already exist"})
        }
        else
        {
            try
            {
                
                otp_val=await verification(email);
                //console.log(otp);
                res.status(200).send({message:"OTP Sent successfully"})
            }
            catch(error)
            {
                res.status(400).send({error:"Something went wrong"});
            }
        }
    }
}
module.exports={create_account,create_otp};