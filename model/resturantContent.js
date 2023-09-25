const mongoose = require('mongoose');
const dotenv = require('dotenv');


const userShema= new mongoose.Schema({
  resturantSpeciality:[
    {
      imageLink:"",
      imageOrder:""
    }
  ],
  ambience:[
    {
      imageLink:"",
      imageOrder:""
    }
  ],
  foodMenu:[
    {
      imageLink:"",
      imageOrder:""
    }
  ]
})

  // creating and exportins ids 
const user_id=mongoose.model('Restuarant',userShema)
module.exports=user_id