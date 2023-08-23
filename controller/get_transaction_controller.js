const moment=require("moment")
const expense_model=require("../model/expense_model");
async function get_transaction_controller(req, res)
{
    var transaction_filter=req.body.filter
    var selectedDate=req.body.customdate
    const user_id=req.user.id
    if(transaction_filter=="Last one week")
    {
       try
       {
            const one_week_data=await expense_model.find({
            date:{
                $gte:moment().subtract(7, 'days').toDate()
            },
            user_id:user_id
    
           })
           res.status(200).send(one_week_data)
       }
       catch(e)
       {
        console.log(e)
            res.status(401).send("Data not found")
       }

    }
    else if(transaction_filter=="Last one month")
    {
        try
       {
            const one_month_data=await expense_model.find({
            date:{
                $gte:moment().subtract(30, 'days').toDate()
            },
            user_id:user_id
    
           })
           res.status(200).send(one_month_data)
       }
       catch(e)
       {
            res.status(401).send("Data not found")
       }
    }
    else if(transaction_filter=="Last one year")
    {
        try
       {
            const one_year_data=await expense_model.find({
            date:{
                $gte:moment().subtract(365, 'days').toDate()
            },
            user_id:user_id
    
           })
           res.status(200).send(one_year_data)
       }
       catch(e)
       {
            res.status(401).send("Data not found")
       }
    }
    else if(transaction_filter==='custom')
    {
        try
        {
            var custom_data=await expense_model.find({
                date:{
                    $gte:selectedDate[0],
                    $lte:selectedDate[1]
                },
                user_id:user_id     
            })
            res.status(200).send(custom_data)
        }
        catch(e)
        {
            res.status(401).send("Data not found")
        }
       
    }
    else
    {
        console.log("Incorrect api")
    }

}
module.exports=get_transaction_controller