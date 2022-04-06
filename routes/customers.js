/* 
    Create and export the module for customers
    ****************************************************************
    BY - Singou Dembele 
*/


var express = require('express');
var router = express.Router();

const customerModel= require('../models/customers.model');

/* GET all customers. */
router.get('/', function(req, res, next) {
  customerModel.find((err, customers) => {
    if(err) {
      res.send({status:500, message:'Unable to find the customer'});
    }else {
      const recordCount = customers.length;
      res.send({status:200,recordCount:recordCount,data:customers});
    }
  })
});

/* GET get detail of specific customer. */
router.get('/view', (req, res, next)=> {
  const userId = req.query.userId;

  customerModel.findById(userId,(err, customers) => {
    if(err) {
      res.send({status:500, message:'Unable to find the customer'});
    }else {
      res.send({status:200, data:customers});
    }
  })
});

/* CREATE new customer. */
router.post('/add', function(req, res, next) {
  let customerObj =new customerModel({
    firstName: "singou",
    lastName: "Dembele",
    emailAddress: "singou@gmail.com",
    phoneNumber: "123124",
    dob: "12-5-1998",
    department: "DSI"
  });

  customerObj.save((err, customer)=>{
    if(err){
      res.send(err)
    }else{
      res.send({status:200,data:customer})
    }
  })
});

/* UPDATE an existing customer. */
router.put('/update', function(req, res, next) {
  const userId = req.query.userId;
  let customerObj ={
    firstName: "Mohamed",
    lastName: "dembele",
    emailAddress: "Moh@gmail.com",
    phoneNumber: "52455841",
    dob: "12-5-2000",
    department: "DSI"
  };

  customerModel.findByIdAndUpdate(userId, customerObj,(err,customer)=>{
    if (err) {
      res.send({status:500, message:'Unable to update customer'});
    }else{
      res.send({status:200, data:customer});
    }
  })
});


/* DELETE existing customer. */
router.delete('/delete', function(req, res, next) {
  const userId = req.query.userId;

  customerModel.findByIdAndDelete(userId,(err, deletedCustomer) => {
    if(err) {
      res.send({status:500, message:'Unable to delete the customer'});
    }else {
      res.send({status:200, message:'Customer deleted successfully',deletedCustomer:deletedCustomer});
    }
  })
});

/* SEARCH existing customer. */
router.get('/search   ', function(req, res, next) {
  res.send('respond with customers ...');
});
module.exports = router;