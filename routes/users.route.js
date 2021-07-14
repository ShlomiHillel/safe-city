const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');




router.post('/addUser',(req,res)=>{
    userController.create(req,res);
});




router.get('/',(req,res)=>{
    console.log('getall');
    userController.readAll(req,res);
});

module.exports = router;
