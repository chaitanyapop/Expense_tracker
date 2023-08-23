const expense_model=require('../model/expense_model')
async function get_total_income_controller(req, res)
{
    const user_id=req.user.id
    try
    {
        const user_income_data=await expense_model.find({type:'Income', user_id:user_id}); 
        //console.log(user_expense_data)
        var total_income=0;
            for(let i=0;i<user_income_data.length;i++)
            {  
                //console.log("First time") 
                total_income=total_income+user_income_data[i].amount;
                
                //console.log(user_expense_data[i].amount);
            }
           
        
        
        //res.status(200).send(user_expense_data)
        res.status(200).send({total_income:total_income})
    }
    catch(e)
    {   
        res.status(500).send("Data cannot be found")
    }
}
module.exports=get_total_income_controller