const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require("./models/Employee")


const app = express()
app.use(express.json())
app.use(cors())

// export default async()=>{
    async function connectToMongoDB() {
        try {
          await mongoose.connect('mongodb://127.0.0.1:27017/employee', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log('Connected to MongoDB');
        } catch (error) {
          console.error('Error connecting to MongoDB:', error);
          // Handle the error gracefully
        }
      }
      
      connectToMongoDB();
app.post("/login",(req,res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Password is incorrect !")
            }
        }else{
            res.json("No record existed")
        }
    })
})
app.post('/register',(req,res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
    // console.log(err);
})

app.listen(3001, () => {
    console.log("Server is running");
})