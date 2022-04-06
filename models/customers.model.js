const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    customerID: Number,
    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: String,
    dob: String,
    department: String
});

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;