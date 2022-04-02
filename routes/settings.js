/* 
    Create and export the module for settings
    ****************************************************************
    BY - Singou Dembele 
*/


var express = require('express');
var router = express.Router();

const settingModel= require('../models/settings.model');

/* GET settings listing. */
router.get('/', function(req, res, next) {
  res.send('respond with settings ...');
});

module.exports = router;