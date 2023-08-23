
const expense_data=require('../model/expense_model')
async function add_income(req,res)
{
    const income_data=req.body
    //console.log("iam here"+ income_data.date)
    income_data.user_id=req.user.id
    if(income_data.amount==null || income_data.type=="" || income_data.category==null || income_data.date=="" ||income_data.description=="")
    {
        res.status(400).send({message:"Any field should not be empty"})
    }
    else
    {
        const income=await expense_data.create(income_data)
        res.status(200).send(income)
    }
    
}
module.exports=add_income