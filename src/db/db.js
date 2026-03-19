const mongoose = require('mongoose');
const connectDB= async()=>{
    await mongoose.connect("mongodb+srv://dev:dev@cluster0.2jgua5n.mongodb.net/cloud-storage-provider")
    .then(()=>(console.log("Connected to MongoDB")))
    .catch((err)=>(console.log("Error connecting to MongoDB:",err)));   
}

module.exports=connectDB;