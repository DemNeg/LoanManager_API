/* 
    Create and export the model for the Loans
    ****************************************************************
    BY - Singou Dembele 
*/

const mongoose= require('mongoose');

loanSchema= mongoose.Schema({
    loanName:String,
    loanType: String,
    loanAmount:String,
    loanIssueDate: Date,
    loanStatus: String
})

const loanModel = mongoose.model("Loans",loanSchema);

module.exports =loanModel;