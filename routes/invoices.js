/* 
    Create and export the module for invoices
    ****************************************************************
    BY - Singou Dembele 
*/


var express = require('express');
var router = express.Router();

const invoiceModel= require('../models/invoices.model');


/* GET invoices listing. */
router.get('/', function(req, res, next) {
  res.send('respond with invoices');
});

module.exports = router;