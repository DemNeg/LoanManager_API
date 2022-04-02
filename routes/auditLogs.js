/* 
    Create and export the module for auditLogs
    ****************************************************************
    BY - Singou Dembele 
*/


var express = require('express');
var router = express.Router();

const auditLogModel= require('../models/auditLogs.model');

/* GET auditLogs listing. */
router.get('/', function(req, res, next) {
  res.send('respond with logs ...');
});

module.exports = router;