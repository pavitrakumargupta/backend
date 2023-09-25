const mongoose = require('mongoose');


const userShema= new mongoose.Schema({
  username: String,
  password: String,
  })
  // creating and exportins ids 
const User=mongoose.model('User',userShema)
module.exports=User