const expense_model=require('../model/expense_model')
async function get_income_controller(req, res)
{
    const user_id=req.user.id
    try
    {
        const user_income_data=await expense_model.find({type:'Income', user_id:user_id}); 
        res.status(200).send(user_income_data)
    }
    catch(e)
    {
        res.status(500).send("Data cannot be found")
    }
    
    
}
module.exports=get_income_controller