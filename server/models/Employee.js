const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String 
})

const EmployeeModel = mongoose.model("employees",EmployeeSchema)

module.exports = EmployeeModel

// const testCasesSchema = new Schema({
//     input: Number,
//     output: Number,
//   });
  
//   const problemSchema = new Schema({
//     serial_no: Number,
//     title: String,
//     description: [String],
//     languages: [String],
//     test_cases: testCasesSchema,
//   });

//   module.exports = mongoose.model("Problem", problemSchema);