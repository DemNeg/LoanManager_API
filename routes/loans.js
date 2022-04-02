/* 
    Create and export the module for loans
    ****************************************************************
    BY - Singou Dembele 
*/


var express = require('express');
var router = express.Router();

const loanModel= require('../models/loans.model');


/* GET loans listing. */
router.get('/', function(req, res, next) {
  res.send('respond with Loans ...');
});

module.exports = router;