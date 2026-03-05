const mongoose = require('mongoose');
const connectDB= async()=>{
    await mongoose.connect("mongodb://localhost:27017/CSP")
    .then(()=>(console.log("Connected to MongoDB")))
    .catch((err)=>(console.log("Error connecting to MongoDB:",err)));   
}

module.exports=connectDB;