const { format } = require('date-fns');
const moment=require('moment');
const expense_model=require('../model/expense_model')
async function add_expense(req,res)
{
    var expense_data=req.body;
    expense_data.user_id=req.user.id
    if(expense_data.amount==null || expense_data.type=="" || expense_data.category==null || expense_data.date=="" ||expense_data.description=="")
    {
        res.status(400).send({message:"Any field should not be empty"})
    }
    else
    {
        const expense=await expense_model.create(expense_data)
        //expense.date=moment(expense.date).format('DD/MM/YYYY')
        //console.log(date)
        
        //console.log(expense.date)
        
        res.status(200).send(expense)
    }
    
}
module.exports=add_expense