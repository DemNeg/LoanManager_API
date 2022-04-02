/* 
    Create and export the module for payments
    ****************************************************************
    BY - Singou Dembele 
*/


var express = require('express');
var router = express.Router();

const paymentModel= require('../models/payment.model');

/* GET payments listing. */
router.get('/', function(req, res, next) {
  res.send('respond with payments ...');
});

module.exports = router;