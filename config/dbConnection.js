const mongoose = require("mongoose");
require('dotenv').config()

 function connectDB(){
    return mongoose.connect(process.env.db_string)
}

module.exports = connectDB;