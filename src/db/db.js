const mongoose = require('mongoose')


function connectDB(){
     mongoose.connect(process.env.MONGO_URI)
     .then(()=>{
          console.log('DB is connected');
          
     })
     .catch(err=>{
          console.log('something went wrong', err);
          
     })
}


module.exports  = connectDB