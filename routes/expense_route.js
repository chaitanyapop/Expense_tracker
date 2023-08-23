const express=require('express')
const add_income=require('../controller/add_income_controller')
const add_expense=require("../controller/add_expense_controller")
const delete_transaction=require("../controller/delete_transaction_controller")
const get_expense_controller=require("../controller/get_expense_controller")
const get_income_controller=require("../controller/get_income_controller")
const get_total_expense_controller=require("../controller/get_total_expense_controller")
const get_total_income_controller=require("../controller/get_total_income_controller")
const userAuth=require('../utility/userAuth')
const get_transaction_controller=require("../controller/get_transaction_controller")
const router=express.Router()
router.use(userAuth)
router.post('/add_income',add_income);
router.post('/add_expense',add_expense);
router.delete('/delete_transaction/:id', delete_transaction);
router.get('/get_income', get_income_controller);
router.get('/get_expense', get_expense_controller);
router.get('/get_total_income', get_total_income_controller)
router.get('/get_total_expense', get_total_expense_controller)
router.post('/get_transaction', get_transaction_controller)


module.exports=router