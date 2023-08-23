const expense_model=require('../model/expense_model')
async function get_expense_controller(req, res)
{
    const user_id=req.user.id
    try
    {
        const user_expense_data=await expense_model.find({type:'Expense', user_id:user_id}); 
        console.log(user_expense_data)
        res.status(200).send(user_expense_data)
    }
    catch(e)
    {   
        res.status(500).send("Data cannot be found")
    }
    
    
}
module.exports=get_expense_controller