const express = require("express");
const app = express();
const connectDB = require('./config/dbConnection')
require('dotenv').config()

app.get("/", async (req,res) => {
   res.send("hello world");
})

connectDB()
.then(()=> {
 console.log("database is connected successfully...");
 app.listen(process.env.PORT,()=> console.log("listing at port number 7777..."))
})
.catch((err)=> console.log("something went wrong..",err))

