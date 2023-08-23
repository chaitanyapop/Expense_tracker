const mongoose=require('mongoose');
const schema=mongoose.Schema;
const expense_model=new schema({
    amount:
    {
       type:Number,
       required:true 
    },
    type:
    {
        type:String,
        required:true
    },
    category:
    {
        type:String,
        required:true
    },
    date:
    {
        type:Date,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }


},
{timestamps:true})

module.exports=mongoose.model('expense_model', expense_model)