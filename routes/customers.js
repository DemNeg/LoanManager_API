/* 
    Create and export the module for customers
    ****************************************************************
    BY - Singou Dembele 
*/


var express = require('express');
var router = express.Router();

const customerModel= require('../models/customers.model');

/* GET customers listing. */
router.get('/', function(req, res, next) {
  res.send('respond with customers ...');
});

module.exports = router;