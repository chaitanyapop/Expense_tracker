const transaction_model=require("../model/expense_model")
async function delete_transaction(req, res)
{
    const transaction_id=req.params;
    console.log(transaction_id.id)
    try
    {
        const transaction_delete_result=await transaction_model.findByIdAndDelete(transaction_id.id)
        res.status(200).send({message:"Data deleted successfully"})
    }
    catch(e)
    {
        res.status(400).send({message:"Data is not found"})
    }
}
module.exports= delete_transaction