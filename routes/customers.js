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
      res.send({status:200,recordCount:recordCount,results:customers});
    }
  })
});

/* GET get detail of specific customer. */
router.get('/view', (req, res, next)=> {
  const userId = req.query.id;

  customerModel.findById(userId,(err, customers) => {
    if(err) {
      res.send({status:500, message:'Unable to find the customer'});
    }else {
      res.send({status:200, results:customers});
    }
  })
});

/* CREATE new customer. */
router.post('/add', function(req, res, next) {

  let firstName= req.body.firstName;
  let lastName= req.body.lastName;
  let emailAddress= req.body.emailAddress;
  let phoneNumber= req.body.phoneNumber;
  let dob= req.body.dob;
  let department= req.body.department;

  let customerObj =new customerModel({
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    dob: dob,
    department: department
  });

  customerObj.save((err, customer)=>{
    if(err){
      res.send(err)
    }else{
      res.send({status:200,results:customer})
    }
  })
});

/* UPDATE an existing customer. */
router.put('/update', function(req, res, next) {

  const userId = req.body.userId;
  let firstName= req.body.firstName;
  let lastName= req.body.lastName;
  let emailAddress= req.body.emailAddress;
  let phoneNumber= req.body.phoneNumber;
  let dob= req.body.dob;
  let department= req.body.department;

  let customerObj ={
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    dob: dob,
    department: department
  };

  customerModel.findByIdAndUpdate(userId, customerObj,(err,customerObj)=>{
    if (err) {
      res.send({status:500, message:'Unable to update customer'});
    }else{
      res.send({status:200, message:'Customer updated successfully', data:customerObj});
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