const jwt_token=require('jsonwebtoken');
function create_token(id)
{
    console.log(id);
    return jwt_token.sign({id}, process.env.KEY, {expiresIn:'1d'})
}
module.exports=create_token;