/* 
    Create and export the model for the customers
    ****************************************************************
    BY - Singou Dembele 
*/

const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: String,
    dob: String,
    department: String
});

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;