const expense_model=require('../model/expense_model')
// this function is un-optimized
async function get_total_expense_controller(req, res)
{
    const user_id=req.user.id
    try
    {
        console.log(req.user)
        const user_expense_data=await expense_model.find({type:'Expense', user_id:user_id}); 
        //console.log(user_expense_data)
        var total_expense=0;
            for(let i=0;i<user_expense_data.length;i++)
            {  
                //console.log("First time") 
                total_expense=total_expense+user_expense_data[i].amount;
                flag=true;
                //console.log(user_expense_data[i].amount);
            }
           
        
        
        //res.status(200).send(user_expense_data)
        res.send({total_expense:total_expense})
    }
    catch(e)
    {   
        res.status(500).send("Data cannot be found")
    }
}
module.exports=get_total_expense_controller