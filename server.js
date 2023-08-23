const express=require("express");
const { default: mongoose } = require("mongoose");
const user_route=require('./routes/user_route')
const expense_router=require('./routes/expense_route');
const cors=require('cors')
const app= express();
require('dotenv').config()
app.options('*', cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.header("Access-Control-Allow-Headers: GET, PUT, POST, DELETE, OPTIONS");
    next();
});

app.use(express.json());

app.use('/user/',user_route)
app.use('/expense/',expense_router)
//console.log(app)


mongoose.connect(process.env.MONGO_DB).then(
   
        app.listen(process.env.PORT || 40000,()=>{
            console.log("backend is connected to port "+process.env.PORT)
        })
    
).catch((error)=>{
    console.log(error)
})


