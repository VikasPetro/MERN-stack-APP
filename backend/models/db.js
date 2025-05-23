const mongoose  = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager' )
.then(()=>{
  console.log("mongodb connected successfully");
}).catch((err)=>{
  console.log("mongodb connection error",err);
})