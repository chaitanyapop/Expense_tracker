const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const user_schema=new Schema({
    firstname:{
    type:String,
    required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobile_number:{
        type:Number,
        required:true
    }
},
{timestamps:true}

)
module.exports=mongoose.model('user_model',user_schema)
