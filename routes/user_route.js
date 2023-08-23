const express=require('express')
const {create_account,create_otp}=require('../controller/signin_controller')
const login_controller=require('../controller/login_controller')
const router=express.Router();

router.post('/signin/create_account',create_account)
router.post('/signin/create_otp',create_otp)
router.post('/login',login_controller)



module.exports=router