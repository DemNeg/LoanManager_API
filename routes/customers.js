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
  res.send('respond with customers ...');
});

/* CREATE new customer. */
router.post('/add', function(req, res, next) {
  res.send('respond with customers ...');
});

/* UPDATE an existing customer. */
router.update('/update', function(req, res, next) {
  res.send('respond with customers ...');
});


/* DELETE existing customer. */
router.get('/delete', function(req, res, next) {
  res.send('respond with customers ...');
});

/* SEARCH existing customer. */
router.get('/search   ', function(req, res, next) {
  res.send('respond with customers ...');
});
module.exports = router;